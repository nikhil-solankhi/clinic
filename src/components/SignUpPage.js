import React, { useState } from 'react';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Signing up with', name, email, password);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-16 px-4 ">
      <h2 className="text-3xl font-serif font-bold text-primary-dark mb-6">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div>
          <label htmlFor="name" className="block text-lg text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-dark"
          />
        </div>
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
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
