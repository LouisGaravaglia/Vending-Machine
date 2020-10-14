import React from 'react';
import {NavLink} from "react-router-dom";
import './App.css';

function Navbar() {
  return (
    <nav className="Navbar">
    <h2>What would you like from the Vending Machine?</h2>
    <NavLink exact to="/">Vending Machine</NavLink>
    <NavLink exact to="/Calpico">Something sugary, please.'</NavLink>
    <NavLink exact to="/Coffee">I wan't a caffeine rush!'</NavLink>
    <NavLink exact to="/Pokka">I'd like something refreshing.'</NavLink>
    </nav>
  );
}

export default Navbar;
