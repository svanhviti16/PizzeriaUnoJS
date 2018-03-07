import React from 'react';
import { PropTypes } from 'prop-types'

const OfferItem = ({offer}) => {    
    const pic = require('../../../resources/img/offer.jpg');

    return ( 
        <div className="offer-wrapper">
            <img className="offer-img" src={pic} />
            <div className="offer-id">Offer {offer.id}</div>
            <div className="offer-offer">{offer.offer}</div>
            {offer.price ? <div className="offer-price">Price: {offer.price}</div> : null}
            <div className="offer-valid-for">This offer is valid for {offer.validFor}</div>
            <button id="offer-button" className="btn btn-primary">Use offer</button>
        </div> 
    )
}

OfferItem.propTypes = {
    offer: PropTypes.shape({
        id: PropTypes.number,
        price: PropTypes.number,
        offer: PropTypes.string,
        validFor: PropTypes.string
    })
};

export default OfferItem;