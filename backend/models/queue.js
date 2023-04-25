const mongoose = require('mongoose');

const queueSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['venter', 'listener'],
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Queue = mongoose.model('Queue', queueSchema);

module.exports = Queue;
