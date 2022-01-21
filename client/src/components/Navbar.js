import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {
  return <nav>
      <Link to="/">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </Link>
  </nav>;
};

export default Navbar;
