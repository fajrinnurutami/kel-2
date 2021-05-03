// import logo from './logo.svg';
import './App.css';
import './Responsive.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import logo1 from './assets/images/logo1.png';
import LessonsHTML from './components/lessonsHTML';
import LessonsJavascript from './components/LessonsJava';
import LessonsReact from './components/LessonsReact';
import Footer from './components/Footer'



//import Package React Router pada App.js
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import pages yang telah dibuat
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Course from './components/Course';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    
      <div className="App">
     <Router>
      <Navbar className="navbar" expand="lg" fixed="top">
        <Navbar.Brand>
              <img
                  className="logo"
                  src={logo1}
                  alt="First slide"
              />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to='/' className="navbar-link">Home</Link>
              <Link to='/about' className="navbar-link">About Us</Link>
              <Link to='/contact' className="navbar-link">Contact Us</Link>
              {/* <Link to='/course' className="navbar-link">Course</Link> */}
              <Link to='/login' className="navbar-link">Login</Link>
              <Link to='/register' className="navbar-link">Daftar</Link>
            </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/"><Home /> </Route>
        <Route path="/about"><About /> </Route>
        <Route path="/contact"><Contact /> </Route>
        <Route path="/course"><Course /> </Route>
        <Route path="/login"><Login /> </Route>
        <Route path="/register"><Register /> </Route>
        <Route path="/LessonsHTML">
                <LessonsHTML />
              </Route>
              <Route path="/LessonsJava">
                <LessonsJavascript />
              </Route>
              <Route path="/LessonsReact">
                <LessonsReact />
              </Route>
      </Switch>
     
    </Router>
    </div>
  );
}

export default App;
