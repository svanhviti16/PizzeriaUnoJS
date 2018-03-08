import React from 'react';
import TextInput from '../TextInput/TextInput';
//import toastr from 'toastr';
import validator from 'validator';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

const initialState = {
    fields: {
        name: '',
        address: '',
        city: '',
        telephone: '',
        postCode: ''
    }
}

class OrderForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = initialState;

    }

    onFormSubmit(e) {
        e.preventDefault();

        const { name, address, city, telephone, postCode } = this.state.fields;
        if (name === '' || address === '' || city === '' || telephone === '' || postCode === '') { return false; }

        // setur í localstorage
        //localStorage.setItem('userData', JSON.stringify(this.state.fields));

        // sækir úr localstorage, færa annað
        //var userData = JSON.parse(localStorage.getItem('userData'));
        // hreinsa state-ið
        this.setState(initialState);
    };

    onInput(e) {
        let fields = Object.assign({}, this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    };

    render() {
        const { name, address, city, telephone, postCode } = this.state.fields;
        return (
            <Grid className="pizza-container"> 
                <h1>Form</h1>
                <form action="" method="get" onSubmit={e => this.onFormSubmit(e)}>
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
                    <button type="sumbit" className="btn btn-primary">Continue</button>
                </form>
            </Grid>
           
        )
    }
}

export default OrderForm;

