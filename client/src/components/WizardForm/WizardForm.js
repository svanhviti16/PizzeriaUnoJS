import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import WizardFormFirstPage from '../WizardFormFirstPage/WizardFormFirstPage';
import WizardFormSecondPage from '../WizardFormSecondPage/WizardFormSecondPage';
import WizardFormThirdPage from '../WizardFormThirdPage/WizardFormThirdPage';

class WizardForm extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.handleClickDelivery = this.handleClickDelivery.bind(this);
        this.handleClickPickup = this.handleClickPickup.bind(this);
        this.state = {
            page: 1,
            isDelivery: false
        };
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



    render() {
        const { onSubmit } = this.props;
        const { page } = this.state;
        return (
            <div>
                {page === 1 && <WizardFormFirstPage onSubmit={ this.nextPage } isDelivery={this.isDelivery} handleDelivery={ this.handleClickDelivery } handlePickup={  this.handleClickPickup }/>}
                {page === 2 &&
          <WizardFormSecondPage
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
          />}
                {page === 3 &&
          <WizardFormThirdPage
              previousPage={this.previousPage}
              onSubmit={onSubmit}
          />}
            </div>
        );
    }
}

WizardForm.propTypes = {
    isDelivery: PropTypes.bool.isRequired
};


export default WizardForm;
