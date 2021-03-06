import React from 'react'
// import logo from 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{backgroundColor: 'var(--secondaryColor)'}}>
    <div className="container">
      <a className="navbar-brand" href="#"> 
      {/* <img className="logo" src-={logo} alt="logo..."/>  */}<h2 id="title">Join My Journey</h2>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#aboutMe">about me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#myProjects">portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contactMe">contact me</a>
          </li>
        </ul>
        
      </div>
    
      </div>
    </nav>
      )
    }

export default Navbar
