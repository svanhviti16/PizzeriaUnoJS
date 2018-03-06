import React from 'react';
import OrderForm from '../OrderFormOrderForm'

class Registration = React.createClass({
	getInitialState: function() {
		return {
			step: 1
		}
	},



nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },
  
  // Same as nextStep, but decrementing
  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },