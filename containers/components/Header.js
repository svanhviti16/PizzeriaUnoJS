import React from 'react';
//import ReactDOM from 'react-dom';

export default class Header extends React.Component {
    render () {
        const logo = require('../../img/pizza_logo.png');

        return (
            <div className="header">
                <div className="imgs">
                    <img src={logo}/>
                </div>
                <h2>Pizzeria Uno</h2>
                
            </div>
        );
    }
}