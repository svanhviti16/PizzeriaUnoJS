import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid } from 'react-bootstrap';
import renderField from '../renderField';

const WizardFormFirstPage = props => {
    const { handleSubmit, handleDelivery, handlePickup } = props;
    return (
        <Grid className="container-margin">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Pickup or Delivery</label>
                    <div>
                        <label>
                            <Field onChange={ handlePickup } name="checkout1" component="input" type="radio" value="pickup" />
                            {' '} Pickup pizza</label>
                        <label>
                            <Field onChange={ handleDelivery } name="checkout1" component="input" type="radio" value="delivery" />
                            {' '}Have pizza delivered
                        </label>
                    </div>
                </div>
                <div>
                    <button type="submit" className="next">Next</button>
                </div>
            </form>
        </Grid>
    );
};

export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormFirstPage);


/**
 *                         <Field name="checkout1" component={renderError} />

 */