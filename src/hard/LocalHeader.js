import React from "react";
import { NavLink } from 'react-router-dom'

function Header() {

    return (
        <header
            className="navbar navbar-expand-md fixed-top shadow-sm "
            style={{ marginTop: '100px' }}
        >
            <nav className="container flex-wrap flex-md-nowrap">
                <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                    <li className="nav-item col-md-auto me-3 nav-link p-2">
                        <NavLink to="/hard/o">1 Min</NavLink>
                    </li>
                    <li className="nav-item col-md-auto me-3 nav-link p-2">
                        <NavLink to="/hard/t">3 Min</NavLink>
                    </li>
                    <li className="nav-item col-md-auto me-3 nav-link p-2">
                        <NavLink to="/hard/f">5 Min</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
