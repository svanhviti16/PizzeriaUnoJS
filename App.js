import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { store } from 'redux';
import Header from './src/components/Header/Header.js';
import Menu from './src/components/Menu/Menu.js';
import Offers from './src/components/Offers/Offers.js';
import AboutUs from './src/components/AboutUs/AboutUs.js';
import Cart from './src/components/Cart/Cart.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default class App extends Component {
    render () {
        return (
            <div className="app"> 
                <Header />
                <Switch className='sub-pages'>
                    <Route exact path='/'component={Menu} ></Route>
                    <Route path='/Offers'component={Offers} ></Route>
                    <Route path='/AboutUs'component={AboutUs} ></Route>
                    <Route path='/Cart'component={Cart} ></Route>
                </Switch>
            </div>
        )
    }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
