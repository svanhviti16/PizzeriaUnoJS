import React from 'react';
import { PropTypes } from 'prop-types'

const OfferItem = ({offer}) => {    
    const pic = require('../../../resources/img/offer.jpg');

    return ( 
        <div className="offer-wrapper">
            <img src={pic} />
            <div className="offer-offer">{offer.offer}</div>
            {offer.price ? <div className="offer-price">{offer.price}</div> : null}
            <div className="offer-valid-for">{offer.validFor}</div>
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