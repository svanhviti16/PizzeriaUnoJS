import React from 'react';
import { PropTypes } from 'prop-types'

const OfferItem = ({offer}) => {
    const { id, offerType, price, validFor } = offer;
    return ( 
        <div className="offer-wrapper">
            <div className="offer-id">{id}</div>
            <div className="offer-price">{price}</div>
            <div className="offer-type">{offerType}</div>
            <div className="offer-valid-for">{validFor}</div>
        </div> 
    )
}

OfferItem.propTypes = {
    offer: PropTypes.shape({
        id: PropTypes.number,
        price: PropTypes.number,
        offerType: PropTypes.string,
        validFor: PropTypes.string
    })
};

export default OfferItem;