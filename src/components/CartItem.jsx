import React, { useState } from 'react'

const CartItem = (item, key) => {
    // const [quantity, setQuant] = useState(0)
    console.log({ item })
    return (
        <div key={key} className='cartItem'>
            <img src={item.item.imageUrl} alt={item.item.name} />
            <h3>{item.item.name}</h3>
            <p>${item.item.price}</p>
        </div>
    )
}

export default CartItem