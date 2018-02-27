import React from 'react';
//import ReactDOM from 'react-dom';
import NavBarLinkWrapper from '../NavBarLinkWrapper/NavBarLinkWrapper.js'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component {
    render () {
        const logo = require('../../../resources/img/pizza_logo.png');

        return (
            <div className="header">
                <div className="imgs">
                    <img src={logo}/>
                </div>
                <h2>Pizzeria Uno</h2>
                <NavBarLinkWrapper>
                    <NavLink
                        to="/"
                        activeClassName="active"
                        className="nav-link"
                        value="Menu">Menu</NavLink>
                    <NavLink
                        to="/Offers"
                        activeClassName="active"
                        className="nav-link">Offers</NavLink>
                    <NavLink
                        to="/AboutUs"
                        activeClassName="active"
                        className="nav-link">About Us</NavLink>
                    <NavLink
                        to="/Cart"
                        activeClassName="active"
                        className="nav-link">Cart</NavLink>
                </NavBarLinkWrapper>
            </div>
        );
    }
}