import '../styles/CartStyle.css'
import CartItem from './CartItem';
import { useState } from 'react';
const ShoppingCart = ({ cart }) => {
    let total = 0;
    return (
        <div className='cart'>
            <span className="cartHeading"> Cart</span>
            {cart.map((item, key) => {
                total += item.price;
                return (
                    <CartItem item={item} key={key} quantity={1} />
                )
            })}
            <span>TOTAL: {total.toFixed(2)}</span>
        </div>
    );
}

export default ShoppingCart