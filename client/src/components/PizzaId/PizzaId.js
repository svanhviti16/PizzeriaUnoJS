import React from 'react';
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';
import Pizza from '../Pizza/Pizza';
import { getPizzaById } from '../../actions/pizzaActions';

class PizzaId extends React.Component {
   /* constructor(props) {
        super(props);
    }*/
    componentDidMount() {
        const { getPizzaById } = this.props;
        
        getPizzaById(5);
    }
    
    render() {
        const { pizzaId } = this.props;
        console.log('pizzaId: ' + pizzaId);
        return (
            <div className="pizza-wrapper">
                <div className="pizza-container">{
                    <Pizza key={pizzaId} pizza={pizzaId} /> 
                }
                </div>
            </div>
        );
    }
}

/* const PizzaId = ({pizza, ...props}) => {
    // const { name, description, price, image } = pizza;
    console.log(pizza);
    return (null);
    return ( 
        <div className="pizza-id-wrapper">
            <div className="pizza-id-image">
                <img src={image} alt=""/>
            </div>
            <div className="pizza-id-name">{name}</div>
            <div className="pizza-id-description">{description}</div>
            <div className="pizza-id-price">{price}</div>
        </div> 
    )
}
 */


const mapStateToProps = (state) => {
    //console.log("mapSteteToProps" + state);
    return {
        pizzaId: state.pizzaId
    }
}
export default connect(mapStateToProps, { getPizzaById })(PizzaId);