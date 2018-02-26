import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js'




export default class App extends Component {
    render () {
        return (
            <div className="app"> 
                <Header />
            </div>
        )
    }
}