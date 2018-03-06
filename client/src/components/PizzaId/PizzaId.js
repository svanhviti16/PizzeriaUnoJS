import React from 'react';
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';
import Pizza from '../Pizza/Pizza';
import { getPizzaById } from '../../actions/pizzaActions';
import { addToCart } from '../../actions/cartActions';
import { bindActionCreators } from 'redux';



class PizzaId extends React.Component {
    /* constructor(props) {
        super(props);
    }*/
    componentDidMount() {
        const { getPizzaById } = this.props;
        const { match: { params } } = this.props;
        console.log('id ' + params.Id);
        getPizzaById(params.Id);
    }

    handleOnClickCart (pizza) {
        const { addToCart } = this.props;
        addToCart(pizza);
    }
    
    render() {
        const { pizzaId } = this.props;
        return (
            <div className="pizza-wrapper">
                <div className="pizza-container">{
                    <Pizza key={pizzaId} pizza={pizzaId} /> 
                }
                </div>
            <button className="btn btn-primary" onClick={() => {
                this.handleOnClickCart(pizzaId);
              }}
            > Add to Cart</button>
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    //console.log("mapSteteToProps" + state);
    return {
        pizzaId: state.pizzaId
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getPizzaById: getPizzaById,
        addToCart: addToCart, 
    }, dispatch)
  
  }
export default connect(mapStateToProps, mapDispatchToProps)(PizzaId);