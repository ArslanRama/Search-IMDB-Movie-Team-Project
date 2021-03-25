import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
  Redirect,
} from 'react-router-dom'

//* Child Components */
import Movies from './Movies'
import Home from './Home'
import TopRated from './TopRated'
import Members from './Members'
import MyAccount from './MyAccount'

function Navbar() {
  return (
    <Router>
      <div>
        <ul className="navbar justify-content-between">
          <li>
            <Link className="link ml-4" to="/">
              <i class="fa fa-home"></i> Home
            </Link>
          </li>
          <li>
            <NavLink className="link" to="/movies">
              <i class="fa fa-film"></i> Movies
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/topRated">
              {' '}
              <i class="fa fa-star"></i>TopRated
            </NavLink>
          </li>
          <a className="link" to="" href="#fav">
            {' '}
            <i class="fa fa-users"></i> Favourites
          </a>
          <li>
            <NavLink className="link mr-4" to="/myAccount">
              <i class="fa fa-clone"></i> MyAccount
            </NavLink>
          </li>
          <Redirect to="/"></Redirect>
        </ul>
      </div>

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/topRated" component={TopRated}></Route>
        <Route path="/members" component={Members}></Route>
        <Route path="/myAccount" component={MyAccount}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </Router>
  )
}

export default Navbar
