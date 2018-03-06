import React from 'react';
//import ReactDOM from 'react-dom';
import NavBarLinkWrapper from '../NavBarLinkWrapper/NavBarLinkWrapper.js';
import { NavLink, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';



export default class Header extends React.Component {


    render () {
        const logo = require('../../../resources/img/pizza_logo.png');
        /** 
                             <div className="imgs">
                        <Link to={'/pizzas'}><img src={logo} /></Link>
                    </div>
        */

        return (
            <Nav className="navbar navbar-inverse navbar-fixed-top">
                <div class="container-fluid">
                    <div className="navbar-header">
                         <a className="navbar-brand"><Link to={'/pizzas'}>Pizzeria Uno</Link></a>
                    </div>
                    <NavBarLinkWrapper >
                        <li><NavLink
                            to="/"
                            activeClassName="active"
                            value="Menu">Menu</NavLink></li>
                        <li><NavLink
                            to="/Offers"
                            activeClassName="active"
                            >Offers</NavLink></li>
                        <li><NavLink
                            to="/AboutUs"
                            activeClassName="active"
                            >About Us</NavLink></li>
                        <li><NavLink
                            to="/Cart"
                            activeClassName="active"
                            >Cart</NavLink></li>
                    </NavBarLinkWrapper>
                </div>
            </Nav>
        );
    }
}


