import React from 'react';
import NavBarLinkWrapper from '../NavBarLinkWrapper/NavBarLinkWrapper.js';
import { NavLink, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';



export default class Header extends React.Component {
    render () {
        const logo = require('../../../resources/img/pizza_logo.png');
        return (
            <nav className="navbar navbar-inverse fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand"><Link className="company-name" to={'/pizzas'}><img id="logo" src={logo} />Pizzeria Uno</Link></div>
                    </div>
                    <NavBarLinkWrapper className="nav-link-wrapper">
                        <li><NavLink
                            to="/"
                            activeClassName="active"
                            value="Menu">Menu</NavLink></li>
                        <li><NavLink
                            to="/Offers"
                            activeClassName="active">Offers</NavLink></li>
                        <li><NavLink
                            to="/AboutUs"
                            activeClassName="active">About Us</NavLink></li>
                        <li><NavLink
                            to="/Cart"
                            activeClassName="active">Cart</NavLink></li>
                    </NavBarLinkWrapper>
                </div>
            </nav>
        );
    }
}


