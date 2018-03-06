import React from 'react';
//import  CartList  from '../CartList/CartList';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class Cart extends React.Component {

    componentDidMount() {
        //action get cart
    }

    render() {
        console.log('CART' + this.props);
        const {cartList} = this.props;
      return (
        <div className="cart">
            <h2>Pay for your pizza please</h2>
            <ListGroup>
                {cartList.map(p =>  <ListGroupItem key={p.id}>{p.name} </ListGroupItem>  )}
            </ListGroup>
        </div>
      )
    }
};



function mapStateToProps(state) {
    return {
      cartList: state.cartList.cart
    }
  }
  
export default connect(mapStateToProps, null)(Cart);

