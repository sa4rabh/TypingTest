import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import './Header.css'

function Header() {
  return (
    <header
      className="navbar navbar-expand-md fixed-top shadow-sm">
      <nav className="container flex-wrap flex-md-nowrap">
        <a className="navbar-brand" href="/" aria-label="home">
          <img src={logo} className="logo" alt="img" />
        </a>
        <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
        <li className="nav-item col-md-auto me-3">
            <NavLink
              className="nav-link p-2"
              to="/"
            >
              Basics
            </NavLink>
          </li>
          <li className="nav-item col-md-auto me-3">
            <NavLink
              className="nav-link p-2"
              to="/easy"
            >
              Easy
            </NavLink>
          </li>
          <li className="nav-item col-md-auto me-3">
            <NavLink
              className="nav-link p-2"
              to="/medium"
            >
              Medium
            </NavLink>
          </li>
          <li className="nav-item col-md-auto me-3">
            <NavLink
              className="nav-link p-2"
              to="/hard"
              exact
              activeClassName="active"
            >
              Hard
            </NavLink>
          </li>
          <li className="nav-item col-md-auto">
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
