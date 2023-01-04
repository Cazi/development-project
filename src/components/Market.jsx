import '../styles/CartStyle.css'
import React from 'react'
function Market (cart, addCart) {
  return (
    <div className="market">
      <button onClick={addCart}>Add Item 1</button>
    </div>
  )
}

export default Market