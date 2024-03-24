import React from 'react';
 import { FaShoppingCart, FaCog } from 'react-icons/fa'; // Importing icons
import "./Navbar.css";
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} className="logo"/>
        </div>
        <div className="navbar-right">   
          <div className="navbar-icon">
         <Link to="/Cart"><FaShoppingCart /></Link>   
          </div>
          
          <div className="navbar-icon">
          <Link to="/Orders"><FaCog /></Link>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;            