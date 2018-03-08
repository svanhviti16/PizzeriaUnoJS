import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Grid, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

class Cart extends React.Component {

    componentDidMount() {
        var pizzaOrder = JSON.parse(localStorage.getItem('pizzaOrder'));
    }

    render() {
        const {cartList} = this.props;
        return (
            <Grid className="pizza-container"> 
                <h2>Checkout</h2>
                <ListGroup>
                    {cartList.map((p, i) =>  <ListGroupItem key={i}>{p.name} </ListGroupItem>  )}
                </ListGroup>
                {cartList.length ? <Row className="show-grid">
                    <NavLink to="/Orders" activeClassName="active" value="Checkout">Checkout</NavLink>
                </Row> : null }
            </Grid>
        )
    }
};


function mapStateToProps(state) {
    localStorage.setItem('pizzaOrder', JSON.stringify(state.cartList.cart));

    return {
        cartList: state.cartList.cart
    }
}

export default connect(mapStateToProps, null)(Cart);

