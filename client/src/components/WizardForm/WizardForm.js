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
            isDelivery: false,
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
        this.setState({ page: this.state.page + 1 });
    }

    previousPage () {
        this.setState({ page: this.state.page - 1 });
    }

    handleClickDelivery () {
        this.setState({isDelivery: true}, () => {
            console.log('isDelivery á að vera true: ' + this.state.isDelivery)
        });
    }

    handleClickPickup () {
        this.setState({isDelivery: false}, () => {
            console.log('Pickup, isDelivery a að verða false: ' + this.state.isDelivery);
        });
    }

    onFormSubmit(e) {
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
    }



    render() {
        const { page } = this.state;
        const { name, address, city, telephone, postCode } = this.state.fields;
        const order = JSON.parse(localStorage.getItem('pizzaOrder'));
        console.log('order í render' + typeof(order));
        return (
            <div>
                {page === 1 && 
                    <Grid className="container-margin">
                        <div>
                            <label>Pickup or Delivery?</label>
                            <TextInput
                                onChange={ e => this.handleClickPickup(e) }
                                type="radio"
                                name="Pickup"
                                value= "false"
                                validate={val => !val ? 'Name is required' : ''} />
                            <TextInput
                                onChange={ e => this.handleClickDelivery(e) }
                                type="radio"
                                name="Delivery"
                                value= "true"
                                validate={val => !val ? 'Name is required' : ''} />
                        </div>
                        <div>
                            <button type="button" className="next" onClick={this.nextPage}>Next</button>
                        </div>
                    </Grid>
                }
                {page === 2 &&
                    <Grid className="pizza-container"> 
                        <h1>Form</h1>
                        <div>
                            <TextInput 
                                onChange={e => this.onInput(e)}
                                name="name"
                                value={name}
                                validate={val => !val ? 'Name is required' : ''} />
                            <TextInput 
                                onChange={e => this.onInput(e)}
                                name="address"
                                value={address}
                                validate={val => !val ? 'Address is required' : ''} />
                            <TextInput 
                                onChange={e => this.onInput(e)}
                                name="city"
                                value={city}
                                validate={val => !val ? 'City is required' : ''} />
                            <TextInput 
                                onChange={e => this.onInput(e)}
                                name="telephone"
                                value={telephone}
                                validate={val => !validator.isMobilePhone(val, 'any') ? 'Telephone is required' : ''} />
                            <TextInput 
                                onChange={e => this.onInput(e)}
                                name="postCode"
                                value={postCode}
                                validate={val => !validator.isPostalCode(val, 'IS')? 'PostCode is required' : ''} />
                        </div>
                        <div>
                            <button type="button" className="previous" onClick={this.previousPage}>
                                    Previous
                            </button>
                            <button type="button" className="next" onClick={ (e) => this.onFormSubmit(e)} >Next</button>
                        </div>
                    </Grid>}
                {page === 3 &&
                <Grid>
                    <p> Here is your order, please confirm. </p>
                    <ListGroup>
                        {order.map((p, i) =>  <ListGroupItem key={i}>{p.name} {p.price}</ListGroupItem>  )}
                    </ListGroup>
                    <p>Total price: </p>
                    <button type="button" className="previous" onClick={this.previousPage}>Previous</button>
                    <button type="button" className="next" onClick={this.postPizza}>Confirm</button>
                </Grid>
                }
                {page === 4 &&
                <Grid>
                    <p> Pöntun þin er komin í ofn!  </p>
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
