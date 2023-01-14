import './styles/App.css';
import ShoppingCart from './components/ShoppingCart'
import Market from './components/Market'
import React, { useState } from 'react'
import CartItem from './components/CartItem';

function App() {
  const [cart, setCart] = useState(() => [])

  function addCart(item) {
    // Change add cart so that it creates a cart item
    setCart([...cart, item])
  }
  // function deleteItem(id) {
  //   // Change add cart so that it creates a cart item
  //   setCart(cart.filter(item => item.id != id))
  // }
  return (
    <div className="App">
      <Market cart={cart} addCart={addCart} />
      <ShoppingCart cart={cart}/>
    </div>
  );
}

export default App;
