import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const CartList = ({cartList}) => (
  <ListGroup>
    {
      cartList.map((cart, index) => (
        <ListGroupItem key={index}>{cart.name}</ListGroupItem>
      ))
    }
  </ListGroup>
)

export default CartList;