import React from 'react';
import HomeNavbar from "./HomeNavbar";
import './App.css';

function Home() {
  return (
    <div className="Home">
    <HomeNavbar />
        <img className="Home-img" src="images/vending_machine.jpg"/>
    </div>
  );
}

export default Home;
