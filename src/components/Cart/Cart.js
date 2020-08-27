import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, crs)=> total + crs.price ,0)
    return (
        <div className="cart-container">
            <h3><FontAwesomeIcon icon={faShoppingCart} /> Purchased Course(s): {cart.length}</h3>
            <h4>Total amount: {totalPrice} BDT</h4>
        </div>
    );
};

export default Cart;