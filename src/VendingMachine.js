import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import HomeNavbar from "./HomeNavbar";
import SnackNavbar from "./SnackNavbar";
import Home from "./Home";
import Coffee from "./Coffee";
import Pokka from "./Pokka";
import Calpico from "./Calpico";
import './App.css';

function VendingMachine() {
  return (
    <BrowserRouter>

        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/Calpico">
            <Calpico />
        </Route>
        <Route exact path="/Coffee">
            <Coffee />
        </Route>
        <Route exact path="/Pokka">
            <Pokka />
        </Route>
    </BrowserRouter>
  );
}

export default VendingMachine;
