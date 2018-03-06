import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Grid, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

class Cart extends React.Component {

    componentDidMount() {
        //action get cart
    }

    render() {
        const {cartList} = this.props;
        return (
            <Grid> 
                <h2>Pay for your pizza please</h2>
                <ListGroup>
                    {cartList.map(p =>  <ListGroupItem key={p.id}>{p.name} </ListGroupItem>  )}
                </ListGroup>
                <Row className="show-grid">
                    <NavLink to="/Orders" activeClassName="active" value="Checkout">Checkout</NavLink>
                </Row>
            </Grid>
        )
    }
};


function mapStateToProps(state) {
    return {
        cartList: state.cartList.cart
    }
}
  
export default connect(mapStateToProps, null)(Cart);

