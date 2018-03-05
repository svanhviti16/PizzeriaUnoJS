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
        
        //const { id, name, description, price, image } = pizza;
        getPizzaById();
        console.log('this.props: '+ this.props)
    }
    
    render() {
        //let pizza = this.props.pizza.filter(pizza => pizza.id === parseInt(this.props.match.params.Id, 10));
        const { pizza } = this.props;
        console.log('pizza: ' + pizza);
        return (
            <div className="pizza-wrapper">
                <div className="pizza-container">{
                    <Pizza key={pizza} pizza={pizza} /> 
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
    console.log(state);
    return {
        pizzaId: state.pizzaId
    }
}
export default connect(mapStateToProps, { getPizzaById })(PizzaId);