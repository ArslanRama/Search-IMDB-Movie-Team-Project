import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from "react-router-dom";
import About from './About';
import Home from "./Home"
import Movies from './Movies';
function NavBar() {
    return (
        <Router>
            <div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/movies">Movies</NavLink></li>
                    <li><NavLink to="/"></NavLink></li>
                  
                </ul>
            </div>
            <Switch>

                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/movies" component={Movies}></Route>
                <Redirect to="/"></Redirect> 
            </Switch>
        </Router>
      
    )
}

export default NavBar
