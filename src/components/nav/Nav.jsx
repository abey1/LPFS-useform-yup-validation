import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="bg-gray-600 p-4 text-white  top-0 w-full flex justify-between">
      <div className="flex items-center">
        <Link to="/" className="mr-4">
          Home
        </Link>

        <Link to="/about" className="mr-4">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
