import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'
// import {
//   Navbar,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink
// } from 'reactstrap';
import CategoriesList from './components/categories/List'
import Register from './components/register/register'
import Login from './components/login/login'
import Logout from './components/logout/logout'
import NotesList from './components/notes/notesList'
import AddNote from './components/notes/addNote'
import NoteShow from './components/notes/noteShow'
import Settings from './components/settings'
import Home from './components/home'
import { connect } from 'react-redux'
import './bootstrap.css'



function App(props) {
  return (
    <BrowserRouter >
      <div>
        <nav className="navbar navbar-dark bg-dark d-flex">
          <Link to='/' className="navbar-brand ">Notes App</Link>
          {
            Object.keys(props.user).length === 0 ? (
              <React.Fragment>
                <Link to='/login' className="nav-link">Login</Link>
                <Link to='/register' className="nav-link"> Register </Link>
              </React.Fragment>
            ) :
              (
                <React.Fragment>
                  <Link to='/categories' className="nav-link"> Categories </Link>
                  <Link to='/notes' className="nav-link"> Notes </Link>
                  <Link to='/delete' className="nav-link" > Settings </Link>
                  <Link to='/logout' className="nav-link" > Logout </Link>
                </React.Fragment>
              )
          }

        </nav>
        <Switch>
          {/* : <Route path='/' exact component={NotesList} />} */}
          <Route path='/notes/edit/:id' exact component={AddNote} />
          <Route path='/notes/add' exact component={AddNote} />
          <Route path='/notes/:id' exact component={NoteShow} />
          <Route path='/categories' component={CategoriesList} />
          <Route path='/notes' exact component={NotesList} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/delete' component={Settings} />
          <Route path='/logout' component={Logout} />
          <Route path='/' component={Home} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);