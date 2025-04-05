'use client';
import React, { useState } from 'react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    // Fake bot response
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: 'I will get back to you!' }]);
    }, 800);
  };

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white border border-gray-300 rounded-xl shadow-xl z-50 flex flex-col">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-t-xl font-semibold">Secure Slack Bot</div>
          <div className="p-4 space-y-2 h-64 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm p-2 rounded-lg max-w-[75%] ${
                  msg.from === 'bot' ? 'bg-gray-200 self-start' : 'bg-blue-500 text-white self-end'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t px-2 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow px-2 py-1 border border-gray-300 rounded-l"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 rounded-r hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg z-50 hover:bg-blue-700"
      >
        💬
      </button>
    </>
  );
};

export default ChatbotWidget;
