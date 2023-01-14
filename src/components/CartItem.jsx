import React, { useState } from 'react'

const CartItem = (item, key) => {
    return (
        <div key={key} className='cartItem'>
            <img src={item.item.imgUrl} alt={item.item.name} />
            <h3>{item.item.name}</h3>
            <p>${item.item.price}</p>
            <button> Delete Item</button>

        </div>
    )
}

export default CartItem