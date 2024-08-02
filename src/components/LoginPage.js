import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with', email, password);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-16 px-4 ">
      <h2 className="text-3xl font-serif font-bold text-primary-dark mb-6">
        Login
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div>
          <label htmlFor="email" className="block text-lg text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-dark"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-lg text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-dark"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-primary-dark text-white font-bold rounded-md hover:bg-primary-dark-dark"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
