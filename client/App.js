import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers/reducer.js';
import Header from './src/components/Header/Header.js';
import Menu from './src/components/Menu/Menu.js';
import Offers from './src/components/Offers/Offers.js';
import AboutUs from './src/components/AboutUs/AboutUs.js';
import Cart from './src/components/Cart/Cart.js';
import PizzaId from './src/components/PizzaId/PizzaId';
import Order from './src/components//Order/Order';


import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

export default class App extends Component {

    render () {
        return (

            <div className="app"> 
                <Header />
                <Switch className='sub-pages'>
                    <Route exact path='/pizzas' render={() => {
                        return <Redirect to="/" />;
                    }} />
                    <Route exact path="/" component={Menu} />
                    <Route path="/pizzas/:Id" component={PizzaId} />                    
                    <Route path='/Offers'component={Offers} ></Route>
                    <Route path='/AboutUs'component={AboutUs} ></Route>
                    <Route path='/Cart'component={Cart} ></Route>
                    <Route path='/Orders' component={Order} ></Route>

                </Switch>
            </div>
        )
    }
}



// createStore fær reducers sem fyrsta parameter og svo thunk sem middleware fyrir asynch köll
ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('app'));
