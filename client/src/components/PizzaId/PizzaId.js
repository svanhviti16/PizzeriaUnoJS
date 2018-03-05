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
        const { match: { params } } = this.props;
        console.log('id ' + params.Id);
        getPizzaById(params.Id);
    }
    
    render() {
        const { pizzaId } = this.props;
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


const mapStateToProps = (state) => {
    //console.log("mapSteteToProps" + state);
    return {
        pizzaId: state.pizzaId
    }
}
export default connect(mapStateToProps, { getPizzaById })(PizzaId);