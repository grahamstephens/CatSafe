import VLayout from '../components/Layout/VLayout';

const ChatRoomPage = () => {
  return (
    <VLayout>
      <div className='flex flex-col h-screen'>
        <div className='flex-1 bg-gray-100 px-6 py-4 overflow-y-scroll'>
          <div className='max-w-screen-lg mx-auto'>
            <h2 className='text-3xl font-bold text-gray-800'>
              {/* {chatRoom?.roomName} */}
              Chat Room
            </h2>
            <div className='mt-6'>
              {/* {messages.map((msg) => (
              <div key={msg.id} className='flex flex-col items-start mb-4'>
                <div className='bg-blue-500 text-white py-2 px-4 rounded-t-lg'>
                  {msg.username}
                </div>
                <div className='bg-gray-200 py-2 px-4 rounded-b-lg'>
                  {msg.text}
                </div>
              </div>
            ))} */}
              {/* {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col items-${
                  msg.from === currentUser ? 'end' : 'start'
                } mb-4`}
              >
                <div
                  className={`bg-${
                    msg.from === currentUser ? 'blue' : 'gray'
                  }-500 text-white py-2 px-4 rounded-${
                    msg.from === currentUser ? 't' : 'b'
                  }-lg`}
                >
                  {msg.from}
                </div>
                <div
                  className={`bg-${
                    msg.from === currentUser ? 'blue' : 'gray'
                  }-200 py-2 px-4 rounded-${
                    msg.from === currentUser ? 'b' : 't'
                  }-lg`}
                >
                  {msg.text}
                </div>
              </div>
            ))} */}

              {/* START */}
              <div className={`flex flex-col items-start mb-4`}>
                <div
                  className={`bg-gray-500 text-white py-2 px-4 rounded-t-lg`}
                >
                  Listener
                </div>
                <div className={`bg-gray-200 py-2 px-4 rounded-b-lg`}>
                  Hey, I'm looking forward to listening to what you have to say!
                  How's your day been?
                </div>
              </div>

              <div className={`flex flex-col items-end mb-4`}>
                <div
                  className={`bg-blue-500 text-white py-2 px-4 rounded-t-lg`}
                >
                  Venter
                </div>
                <div className={`bg-blue-200 py-2 px-4 rounded-b-lg`}>
                  Just a bit of college stress, the final week is coming up.
                </div>
              </div>

              {/* <div className={`flex flex-col items-start mb-4`}>
                <div
                  className={`bg-gray-500 text-white py-2 px-4 rounded-t-lg`}
                >
                  Listener
                </div>
                <div className={`bg-gray-200 py-2 px-4 rounded-b-lg`}>
                  Sounds like a full plate. But don't worry, I've got the
                  perfect solution for you.
                </div>
              </div>
              <div className={`flex flex-col items-end mb-4`}>
                <div
                  className={`bg-blue-500 text-white py-2 px-4 rounded-t-lg`}
                >
                  Venter
                </div>
                <div className={`bg-blue-200 py-2 px-4 rounded-b-lg`}>
                  Really? What is it?
                </div>
              </div>
              <div className={`flex flex-col items-start mb-4`}>
                <div
                  className={`bg-gray-500 text-white py-2 px-4 rounded-t-lg`}
                >
                  Listener
                </div>
                <div className={`bg-gray-200 py-2 px-4 rounded-b-lg`}>
                  Go outside and scream at the top of your lungs. Trust me, it's
                  a great stress reliever.
                </div>
              </div>
              <div className={`flex flex-col items-end mb-4`}>
                <div
                  className={`bg-blue-500 text-white py-2 px-4 rounded-t-lg`}
                >
                  Venter
                </div>
                <div className={`bg-blue-200 py-2 px-4 rounded-b-lg`}>
                  Um, I don't know if that's exactly what I had in mind...
                </div>
              </div>
              <div className={`flex flex-col items-start mb-4`}>
                <div
                  className={`bg-gray-500 text-white py-2 px-4 rounded-t-lg`}
                >
                  Listener
                </div>
                <div className={`bg-gray-200 py-2 px-4 rounded-b-lg`}>
                  Okay, okay, how about this? Let's chat anonymously and vent it
                  all out. No screaming necessary.
                </div>
              </div>
              <div className={`flex flex-col items-end mb-4`}>
                <div
                  className={`bg-blue-500 text-white py-2 px-4 rounded-t-lg`}
                >
                  Venter
                </div>
                <div className={`bg-blue-200 py-2 px-4 rounded-b-lg`}>
                  Hmm, that sounds much better. Thanks, you're a lifesaver!
                </div>
              </div>
              <div className={`flex flex-col items-start mb-4`}>
                <div
                  className={`bg-gray-500 text-white py-2 px-4 rounded-t-lg`}
                >
                  Listener
                </div>
                <div className={`bg-gray-200 py-2 px-4 rounded-b-lg`}>
                  No problem, that's what I'm here for. Plus, screaming in
                  public is so last year.
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className='bg-white border-t border-gray-300 py-4'>
          <div className='max-w-screen-lg mx-auto'>
            <div className='flex flex-col md:flex-row'>
              <input
                type='text'
                className='flex-1 border rounded-lg px-4 py-2 md:mr-2 mb-2 md:mb-0'
                rows='2'
                placeholder='Enter your message'
                //   value={message}
                //   onChange={(e) => setMessage(e.target.value)}
                //   onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              ></input>
              <button
                className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg'
                //   onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </VLayout>
  );
};

export default ChatRoomPage;
