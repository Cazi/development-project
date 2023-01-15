import React, { useState } from 'react'

const CartItem = ({item, deleteItem, key}) => {
    function handleClick() {
        deleteItem(item)
    }

    return (
        <div key={key} className='cartItem'>
            {/* <img src={item.item.imgUrl} alt={item.item.name} /> */}
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={handleClick}> Delete Item</button>
        </div>
    )
}

export default CartItem