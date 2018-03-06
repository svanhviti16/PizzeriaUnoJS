import React from 'react';
import { connect } from 'react-redux';
import OfferItem from '../OfferItem/OfferItem';
import { getAllOffers } from '../../actions/offerActions';

class Offers extends React.Component {

    componentDidMount() {
        const { getAllOffers } = this.props;
        getAllOffers();
    }
    render () {
        const { offer } = this.props;
        console.log(offer);
        return (
            <div className="offer-container">
                {offer.map(o => <OfferItem key={o.id} offer={o} />)}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        offer: state.offer
    }
}

export default connect(mapStateToProps, { getAllOffers })(Offers);