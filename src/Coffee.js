import React from 'react';
import SnackNavbar from "./SnackNavbar";
import './App.css';

function Coffee() {
  return (
    <div className="Coffee">
    <SnackNavbar />
        <img className="Coffee-img" src="images/ucc_coffee.jpg"/>
    </div>
  );
}

export default Coffee;