import React from 'react';

const ChatWindow = () => {
  return (
    <div className="flex-1 flex flex-col bg-white">
      <div className="flex items-center p-5 border-b">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="rounded-full w-10 h-10 mr-3"
        />
        <h2 className="text-lg font-semibold">Archie Parker</h2>
      </div>
      <div className="flex-1 p-5">
        {/* Chat messages go here */}
      </div>
      <div className="flex items-center p-4 border-t">
        <input
          type="text"
          placeholder="Write Message"
          className="flex-1 p-2 border rounded-lg"
        />
        <button className="p-2 ml-2 text-blue-600">
          <span className="material-icons">send</span>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
