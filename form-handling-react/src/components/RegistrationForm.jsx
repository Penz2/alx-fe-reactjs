import React, { useState } from "react";


function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    
    setError("");
    console.log("Registration Data:", { username, email, password });

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Create an Account
        </h2>

        {/* Username Field */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter your username"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-center font-medium mb-4">{error}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-all"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
