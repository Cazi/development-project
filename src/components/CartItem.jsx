import React from 'react'

const CartItem = (item) => {
  return (
    <>
      <img src={item.imageUrl} alt={item.name} />
      console.log(item.imageUrl)
      <h3>{item.name}</h3>
      <p>${item.price}</p>
    </>
  )
}

export default CartItem