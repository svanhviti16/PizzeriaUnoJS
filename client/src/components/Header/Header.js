import React from 'react';
//import ReactDOM from 'react-dom';
import NavBarLinkWrapper from '../NavBarLinkWrapper/NavBarLinkWrapper.js';
import { NavLink, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';



export default class Header extends React.Component {

    render () {
        const logo = require('../../../resources/img/pizza_logo.png');

        return (
            <div className="header">
                    <div className="imgs">
                        <Link to={'/pizzas'}><img src={logo} /></Link>
                    </div>
                    <h2 ><Link to={'/pizzas'}>Pizzeria Uno</Link></h2>
                    <NavBarLinkWrapper className="nav navbar-nav">
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