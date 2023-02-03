import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <NavLink
        to="/"
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <span className="ml-3 text-xl">JPRIS</span>
      </NavLink>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <NavLink to="/register" className="mr-5 hover:text-gray-900">
          SignUp
        </NavLink>
        <NavLink to="/login" className="mr-5 hover:text-gray-900">
          SignIn
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Navigation;
