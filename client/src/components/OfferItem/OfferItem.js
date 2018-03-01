import React from 'react';
import { PropTypes } from 'prop-types'

const OfferItem = ({offer}) => {
    const { id, price, validFor } = offer;
    return ( 
        <div className="offer-wrapper">
            <div className="offer-id">{id}</div>
            <div className="offer-price">{price}</div>
            <div className="offer-valid-for">{validFor}</div>
        </div> 
    )
}

OfferItem.propTypes = {
    offer: PropTypes.shape({
        id: PropTypes.number,
        //offerType: PropTypes.string,
        price: PropTypes.number,
        validFor: PropTypes.string
    })
};

export default OfferItem;