import React from 'react';
import { connect } from 'react-redux';
import Pizza from '../Pizza/Pizza';
import { getAllPizzas } from '../../actions/pizzaActions';

class Menu extends React.Component {

    componentDidMount() {
        const { getAllPizzas } = this.props;
        getAllPizzas();
    }
    render () {
        const { pizza } = this.props;
        return (
            <div className="pizza-container">{pizza.map(p => ( 
                <div className="pizza">
                    <Pizza key={p.id} pizza={p} /> 
                </div> ))}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        pizza: state.pizza
    }
}
export default connect(mapStateToProps, { getAllPizzas })(Menu);