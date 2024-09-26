import React from 'react';
import { CircleX } from 'lucide-react';

export default function LoginPopup({ isOpen, onClose }) {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-lg flex items-center justify-center z-50 ">  
      <div className="relative bg-white w-full max-w-lg mx-auto p-6 rounded-2xl shadow-2xl backdrop:backdrop-blur-3xl shadow-blue-300"> 
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={onClose}>
          <CircleX size={24} />
        </button>
        
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Login</h1>
          
          <h3 className="text-sm mb-4 text-gray-800">
            Don't have an account? <a href="#" className="text-blue-600 font-semibold hover:underline">Sign Up</a>
          </h3>

          <button className="bg-black hover:opacity-60 text-white py-2 px-12 rounded-lg mb-4">
            <i className="fab fa-google mr-2  text-blue-400"></i>
            Login with Google
          </button>

          <p className="text-gray-500 mb-4 w-full text-center">----------------- OR -----------------</p>

          <form className="w-full flex flex-col space-y-4 ">
            <div className="flex flex-col">
              <label htmlFor="yourEmail" className="text-sm font-medium text-gray-700">Your Email</label>
              <input 
                id="yourEmail" 
                type="email" 
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 sm:text-sm" 
                placeholder="you@example.com" 
                required 
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="yourPass" className="text-sm font-medium text-gray-700">Password</label>
              <input 
                id="yourPass" 
                type="password" 
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm sm:text-sm" 
                required 
              />
            </div>

            <button className="bg-black hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
