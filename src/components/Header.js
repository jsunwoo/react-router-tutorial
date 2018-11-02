import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" className="item">
        a
      </NavLink>
      <NavLink to="/about/velopert" className="item">
        b
      </NavLink>
      <NavLink to="/posts" className="item">
        c
      </NavLink>
    </div>
  );
};

export default Header;
