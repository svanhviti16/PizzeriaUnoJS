import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Pizza = ({pizza}) => {
    const { id, name, description, price, image } = pizza;
    return ( 
        <Link to={`/pizzas/${id}`}><div className="pizza-wrapper" >
            <div className="pizza-image">
                <img src={image} alt=""/>
            </div>
            <div className="pizza-name">{name}</div>
            <div className="pizza-description">{description}</div>
            <div className="pizza-price">{price}</div>
        </div> </Link>
    )
}

Pizza.propTypes = {
    // the values that each pizza holds
    pizza: PropTypes.shape({
        // pizza id, used as key
        id: PropTypes.number,
        // pizza name
        name: PropTypes.string,
        // pizza ingredients
        description: PropTypes.string,
        // price of the pizza
        price: PropTypes.number,
        // the photo of the pizza
        image: PropTypes.string
    })
};

export default Pizza;