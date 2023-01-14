import React, { useState } from 'react'

const CartItem = (item, key) => {
    // const [quantity, setQuant] = useState(0)
    console.log({ item })
    return (
        <div key={key} className='cartItem'>
            {console.log(item.imageUrl)}
            <img src={item.item.imgUrl} alt={item.item.name} />
            <h3>{item.item.name}</h3>
            <p>${item.item.price}</p>
        </div>
    )
}

export default CartItem