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
  function deleteItem(thisItem) {
    // Change add cart so that it creates a cart item
    setCart(prevCart => prevCart.filter(item => thisItem.id != item.id))
  }
  return (
    <div className="App">
      <Market cart={cart} addCart={addCart} />
      <ShoppingCart cart={cart} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
