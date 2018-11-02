import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink exact to="/" className="item">
        홈
      </NavLink>
      <NavLink to="/about/velopert" className="item">
        소개
      </NavLink>
      <NavLink to="/posts" className="item">
        포스트
      </NavLink>
      <NavLink to="/me" className="item">
        마이페이지
      </NavLink>
      <NavLink to="/Login" className="item">
        로그인
      </NavLink>
    </div>
  );
};

export default Header;
