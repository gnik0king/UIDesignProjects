import React from 'react';
import ShoppingCart from '../components/ShoppingCart';
import './CartPage.css';

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div className="cartpage">
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
