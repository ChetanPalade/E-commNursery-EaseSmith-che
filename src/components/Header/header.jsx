import React from 'react';
import './Header.css';
import { FaOpencart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">EaseSmith</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Plants & Pots</li>
          <li>Tools</li>
          <li>Our Services</li>
          <li>Blog</li>
          <li>FAQs</li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search Plant" />
      </div>
      <div className="icons">
        <span><CgProfile />My Profile</span>
        <span><FaOpencart />Cart</span>
      </div>
    </header>
  );
};

export default Header;
