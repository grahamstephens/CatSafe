require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const User = require('./models/user');
const Queue = require('./models/queue');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('./middleware/auth');

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });

app.post('/signup', async (req, res) => {
  try {
    console.log('Reached backend /signup');
    const { email, password } = req.body;
    console.log(email, password);

    // Check if email already exists in database
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user in database
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

app.post('/login', async (req, res) => {
  try {
    console.log('Reached backend /login');
    const { email, password } = req.body;

    // Check if user exists in database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create and send JWT token to client
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );

    res.status(200).json({ result: user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

const checkForMatch = async (userRole) => {
  const oppositeRole = userRole === 'venter' ? 'listener' : 'venter';
  const oppositeQueue = await Queue.findOne({ role: oppositeRole }).sort(
    'createdAt'
  );
  if (!oppositeQueue) {
    // No match found, return null
    return null;
  }

  // Match found, create a new chat room and remove both users from their queues
  const newChatRoom = new ChatRoom({ roomName: uuidv4() });
  await newChatRoom.save();
  const user = await User.findById(oppositeQueue.members[0]);
  const otherUser = await User.findById(req.user._id);
  user.chatRooms.push(newChatRoom._id);
  otherUser.chatRooms.push(newChatRoom._id);
  await user.save();
  await otherUser.save();
  await Queue.findOneAndDelete({ role: userRole, members: user._id });
  await Queue.findOneAndDelete({ role: oppositeRole, members: req.user._id });
  return newChatRoom;
};

app.post('/role-selection', async (req, res) => {
  console.log('Reached backend /role-selection');
  try {
    const { role } = req.body;
    const user = await User.findById(req.user._id);
    const queue = await Queue.findOne({ role, members: user._id });
    if (!queue) {
      // User not in queue, add them
      const newQueue = new Queue({ role, members: [req.user._id] });
      await newQueue.save();
    }
    const match = await checkForMatch(role);
    if (match) {
      return res
        .status(200)
        .json({ message: 'Match found!', chatRoomId: match._id });
    }
    return res.status(200).json({ message: 'Added to queue' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
