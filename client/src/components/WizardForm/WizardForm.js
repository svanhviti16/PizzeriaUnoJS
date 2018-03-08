import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import TextInput from '../TextInput/TextInput';
import validator from 'validator';
import { connect } from 'react-redux';
import { Grid, ListGroup, ListGroupItem } from 'react-bootstrap';
import { postOrder } from '../../actions/orderActions';
import Cart from '../Cart/Cart';

class WizardForm extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.postPizza = this.postPizza.bind(this);
        this.state = {
            page: 1,
            isDelivery: '',
            fields: {
                name: '',
                address: '',
                city: '',
                telephone: '',
                postCode: ''
            }
        }
    }
    nextPage () {
        if (this.state.isDelivery === '') {
            return false; 
        }
        this.setState({ page: this.state.page + 1 });
    }

    previousPage () {
        this.setState({ page: this.state.page - 1 });
    }

    handleClick (e) {
        let isDel = e.target.value;
        console.log('let ' + isDel);

        this.setState({isDelivery: isDel});

    }

    onFormSubmitDelivery(e) {
        const { name, address, city, telephone, postCode } = this.state.fields;
        if (name === '' || address === '' || city === '' || telephone === '' || postCode === '') { return false; }
        // setur í localstorage
        localStorage.setItem('userData', JSON.stringify(this.state.fields));

        // sækir úr localstorage, færa annað
        var userData = JSON.parse(localStorage.getItem('userData'));
        // hreinsa state-ið

        console.log(userData);
        this.nextPage();
    };

    onFormSubmitPickup(e) {
        const { name, address, city, telephone, postCode } = this.state.fields;
        if (name === '' || telephone === '') { return false; }
        // setur í localstorage
        localStorage.setItem('userData', JSON.stringify(this.state.fields));

        // sækir úr localstorage, færa annað
        var userData = JSON.parse(localStorage.getItem('userData'));
        // hreinsa state-ið

        console.log(userData);
        this.nextPage();
    };

    onInput(e) {
        let fields = Object.assign({}, this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    };

    postPizza() {
        const { postOrder } = this.props;
        const { fields } = this.state;
        const { name, address, city, telephone, postCode } = this.state.fields;
        const order = localStorage.getItem('pizzaOrder');
        console.log(order);
        if (order) {
            postOrder(JSON.parse(order), telephone);
        }
        this.nextPage();
    }



    render() {
        const { name, address, city, telephone, postCode } = this.state.fields;
        const order = JSON.parse(localStorage.getItem('pizzaOrder'));
        const priceSummer = (accumulator, currentValue) => accumulator + currentValue.price;
    
        return (
            <div>
                {this.state.page === 1 && 
                    <Grid className="container-margin">
                        <div>
                            <label>Pickup or Delivery?</label>
                            <TextInput
                                onChange={ e => this.handleClick(e) }
                                name="pick"
                                value= "false"
                                label="Pickup"
                                type="radio"
                                validate={val => !val ? 'Name is required' : ''} />
                            <TextInput
                                onChange={ e => this.handleClick(e) }
                                name="pick"
                                value= "true"
                                label="Delivery"
                                type="radio"
                                validate={val => !val ? 'Name is required' : ''} />
                        </div>
                        <div>
                            <button type="button" className="next" onClick={this.nextPage}>Next</button>
                        </div>
                    </Grid>
                }
                {this.state.page === 2 && this.state.isDelivery == 'true' &&
                    <Grid className="pizza-container"> 
                        <h1>Please enter your details</h1>
                        <div>
                            <TextInput 
                                onChange={e => this.onInput(e)}
                                name="name"
                                value={name}
                                label="Name"
                                validate={val => !val ? 'Name is required' : ''} />
                            <TextInput 
                                onChange={e => this.onInput(e)}
                                name="address"
                                value={address}
                                label="Address"
                                validate={val => !val ? 'Address is required' : ''} />
                            <TextInput 
                                onChange={e => this.onInput(e)}
                                name="city"
                                value={city}
                                label="City"
                                validate={val => !val ? 'City is required' : ''} />
                            <TextInput 
                                onChange={e => this.onInput(e)}
                                name="telephone"
                                value={telephone}
                                label="Telephone"
                                validate={val => !validator.isMobilePhone(val, 'any') ? 'Telephone is required' : ''} />
                            <TextInput 
                                onChange={e => this.onInput(e)}
                                name="postCode"
                                value={postCode}
                                label="Post Code"
                                validate={val => !validator.isPostalCode(val, 'IS')? 'PostCode is required' : ''} />
                        </div>
                        <div>
                            <button type="button" className="previous" onClick={this.previousPage}>
                                Previous
                            </button>
                            <button type="button" className="next" onClick={ (e) => this.onFormSubmitDelivery(e)} >Next</button>
                        </div>
                    </Grid>}
                {this.state.page === 2 && this.state.isDelivery == 'false' &&
                    <Grid className="pizza-container"> 
                        <h1>Please enter your details</h1>
                        <div>
                            <TextInput 
                                onChange={e => this.onInput(e)}
                                name="name"
                                value={name}
                                label="Name"
                                validate={val => !val ? 'Name is required' : ''} />
                            <TextInput 
                                onChange={e => this.onInput(e)}
                                name="telephone"
                                value={telephone}
                                label="Telephone"
                                validate={val => !validator.isMobilePhone(val, 'any') ? 'Telephone is required' : ''} />
                        </div>
                        <div>
                            <button type="button" className="previous" onClick={this.previousPage}>
                                Previous
                            </button>
                            <button type="button" className="next" onClick={ (e) => this.onFormSubmitPickup(e)} >Next</button>
                        </div>
                    </Grid> 
                }
                {this.state.page === 3 &&
                <Grid>
                    <p> Here is your order, please confirm. </p>
                    <ListGroup>
                        {order.map((p, i) =>  <ListGroupItem key={i}>{p.name} {p.price}</ListGroupItem>  )}
                    </ListGroup>
                    <p>Total price: {order.reduce(priceSummer, 0)}</p>
                    <button type="button" className="previous" onClick={this.previousPage}>Previous</button>
                    <button type="button" className="next" onClick={this.postPizza}>Confirm</button>
                </Grid>
                }
                {this.state.page === 4 &&
                <Grid>
                    <h2> Thank you for your order </h2>
                    <p> Your pizza is going in the oven!  </p>

                </Grid>
                }
            </div>
        );
    }
}

/*WizardForm.propTypes = {
    isDelivery: PropTypes.bool.isRequired
};*/

const mapStateToProps = (state) => {
    return {
        order: state.cartList.cart
    }
}


export default connect(mapStateToProps, { postOrder })(WizardForm);
