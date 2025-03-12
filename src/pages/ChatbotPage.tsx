import React from 'react';

const ChatbotPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold">Chatbot</h1>
        <p>Welcome to the chatbot page! Here you can interact with our chatbot.</p>
        {/* Chatbot interaction logic can be added here */}
      </div>
    </div>
  );
};

export default ChatbotPage;
