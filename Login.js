// src/pages/Login.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get location state passed from the previous page

  // Function to handle successful login
  const handleLogin = () => {
    // Redirect to the previous page if available, otherwise go to home
    const from = location.state?.from?.pathname || "/"; // Fallback to home if no "from" state
    navigate(from);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://www.shutterstock.com/image-photo/empty-streets-sidewalks-5th-avenue-600nw-2459090389.jpg')", // Replace with your desired image URL
      }}
    >
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md opacity-90">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(); // Call the login handler
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
