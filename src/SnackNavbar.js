import React from 'react';
import {NavLink} from "react-router-dom";
import './App.css';

function SnackNavbar() {
  return (
    <nav className="Navbar">
    <h2>Would you like something else from the Vending Machine?</h2>
    <NavLink exact to="/">Yes, please.</NavLink>
    </nav>
  );
}

export default SnackNavbar;
