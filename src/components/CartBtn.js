import React from 'react'
import CartSvg from '../assets/icons/cart.svg';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../redux/actions';

function CartBtn(props) {
  return (
    <Button className="mr-3 cartBtn" color="primary">
      <img width="20" height="20" alt="cart" src={CartSvg}></img>
      {!!props.cartItems.length && (
        <div className="cartBtn__count">{props.cartItems.length}</div>
      )}
    </Button>
  )
}
const mapSateToProps = state => state.CartReducer;

export default connect(
  mapSateToProps, 
  {
    addItemToCart, 
    removeItemFromCart
  }
)(CartBtn)
