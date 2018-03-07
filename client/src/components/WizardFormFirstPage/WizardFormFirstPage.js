import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid } from 'react-bootstrap';

const WizardFormFirstPage = props => {
    const { handleSubmit } = props;
    return (
        <Grid className="container-margin">
            <form onSubmit={handleSubmit}>
                <div>
                    <button type="submit" className="next">Sækja</button>
                    <button type="submit" className="next">Senda</button>
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
