
import React from 'react'
import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from "react-router-dom"

//* Child Components */
import About from "./About"
import Home from "./Home"
import Contacts from "./Contact"
import Members from "./Members"
import MyAccount from "./MyAccount"


function Navbar() {
 return (
       <Router>

                 <div className="Nav">
                     <ul>
                                 <li><NavLink to="/">Home</NavLink></li> 
                                 <li><NavLink to="/about">About</NavLink></li> 
                                 <li><NavLink to ="/contacts">Contacts</NavLink></li> 
                                 <li><NavLink to ="/members">Members</NavLink></li> 
                                 <li><NavLink to ="/myAccount">MyAccount</NavLink></li> 
                                        <Redirect to="/"></Redirect>
                       </ul>
                 </div>
                  
                  <Switch>
                     <Route exact path="/" component={Home}></Route>
                     <Route path="/about" component={About}></Route>
                     <Route path="/contacts" component={Contacts}></Route>
                     <Route path="/members" component={Members}></Route>
                     <Route path="/myAccount" component={MyAccount}></Route>
                     <Redirect to="/"></Redirect>
                 </Switch>
                      
          
         </Router>
 )
}

export default Navbar
