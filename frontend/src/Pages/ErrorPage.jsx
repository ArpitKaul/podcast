import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <p className="text-2xl font-semibold mb-6">Oops! Page Not Found</p>
      <p className="text-lg text-gray-400 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 text-lg font-semibold bg-blue-600 rounded-lg hover:bg-blue-500 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
