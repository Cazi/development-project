import '../styles/MarketStyle.css'
import React from 'react'
function Market ({cart, addCart}) {
  return (
    <div className="market">
      <span className="marketHeading">Market</span>
      <button onClick={addCart}>Add Item 1</button>
    </div>
  )
}

export default Market