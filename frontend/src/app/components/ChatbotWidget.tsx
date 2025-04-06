'use client';
import React, { useState, useRef, useEffect } from 'react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (input.trim() === '') return;
  
    const userMsg = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
  
    try {
      const res = await fetch('http://localhost:5000/api/chat/chatbotReply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
  
      const data = await res.json();
  
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: 'Server error. Please try again later.' },
      ]);
    } finally {
      setIsTyping(false);
    }
  };
  
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <>
      {/* Chatbox UI */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-[90%] sm:w-80 bg-white border border-gray-300 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-3 font-semibold text-base">
            💬 Secure Slack Bot
          </div>

          {/* Messages */}
          <div className="flex flex-col space-y-2 px-3 py-2 h-64 overflow-y-auto bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm px-4 py-2 rounded-2xl max-w-[75%] shadow ${
                  msg.from === 'bot'
                    ? 'bg-white text-gray-800 self-start'
                    : 'bg-blue-600 text-white self-end'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="text-sm px-4 py-2 rounded-2xl bg-gray-300 text-gray-700 self-start animate-pulse max-w-[60%]">
                Typing...
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input Area */}
          <div className="flex items-center px-2 py-2 border-t bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-all text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-xl z-50 hover:bg-blue-700 transition"
      >
        💬
      </button>
    </>
  );
};

export default ChatbotWidget;
