import './styles/App.css';
import ShoppingCart from './components/ShoppingCart'
import Market from './components/Market'
import React, { useState } from 'react'

function App() {
  const [cart, setCart] = useState(() => [])
    function addCart() {
        setCart(prevCart => [...prevCart, 'item'])
    }
  return (
    <div className="App">
      <ShoppingCart cart={cart}/>
      <Market cart={cart} addCart={addCart}/>
    </div>
  );
}

export default App;
