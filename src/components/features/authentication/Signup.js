import React, { useState } from 'react';

import Authenticator from '../../../apis/authenticator';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    Authenticator.register({ email, name, password })
      .then(() => {
        // redirect to signin page
      }).catch(() => {
        // display error message
      });
  };

  return (
    <form className="text-gray-600 body-font" onSubmit={handleSubmit}>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <div className="mb-20">
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=400"
              alt="Your Company"
            />
            <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              JPris - SignUp
            </h1>
          </div>
          <h2 className="title-font font-medium text-3xl text-gray-900">
            Book Review
          </h2>
          <p className="leading-relaxed mt-4">
            Is a book-tracking application built using Spring Boot and
            PostgreSQL. The app is similar to Goodreads and allows users to keep
            track of books they have read, are currently reading, and want to
            read in the future. Users can also rate and review books, create and
            join book clubs, and discover new books to read through personalized
            recommendations.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Confirm password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Button
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signup;
