import React from 'react';

const users = [
  { name: "Archie Parker", letter: "A" },
  { name: "Alfie Mason", letter: "A" },
  { name: "AharleKane", letter: "A" },
  { name: "Athan Jacoby", letter: "A" },
  { name: "Bashid Samim", letter: "B" },
  { name: "Breddie Ronan", letter: "B" },
  { name: "George Carson", letter: "B" },
  { name: "Darry Parker", letter: "D" },
  { name: "Denny Hunter", letter: "D" },
  { name: "Jack Ronan", letter: "J" },
  { name: "Jacob Tucker", letter: "J" },
];

const ChatList = () => {
  return (
    <div className="bg-white w-1/3 p-5 h-full border-r">
      <input
        type="text"
        placeholder="Search by Address, City, or ZIP"
        className="p-2 w-full border rounded-lg mb-4"
      />
      <div className="space-y-4">
        {users.map((user, index) => (
          <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 cursor-pointer">
            <div className="rounded-full w-10 h-10 bg-gray-200 flex items-center justify-center font-semibold">
              {user.name[0]}
            </div>
            <span>{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
