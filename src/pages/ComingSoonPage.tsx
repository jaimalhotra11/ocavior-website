import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white/80 dark:bg-gray-800/50 p-12 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Coming Soon!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            We're working hard to bring you amazing marketing solutions. Stay tuned for updates!
          </p>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="px-6 py-3 bg-white dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-full max-w-md text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200">
                Notify Me
              </button>
            </div>
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mt-8 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;