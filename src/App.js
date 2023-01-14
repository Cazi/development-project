import './styles/App.css';
import ShoppingCart from './components/ShoppingCart'
import Market from './components/Market'
import React, { useState } from 'react'
import CartItem from './components/CartItem';

function App() {
  const [cart, setCart] = useState(() => [])
  const [total, setToal] = useState(0)
  function addCart(item) {
    // Change add cart so that it creates a cart item
    setCart([...cart, item])
  }
  return (
    <div className="App">
      <Market cart={cart} addCart={addCart} />
      <ShoppingCart cart={cart} total={total} />
    </div>
  );
}

export default App;
