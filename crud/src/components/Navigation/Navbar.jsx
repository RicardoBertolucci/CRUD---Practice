import React from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="header">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/details">Detalhes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
