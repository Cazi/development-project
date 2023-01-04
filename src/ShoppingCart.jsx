import React, { useState } from 'react'


const ShoppingCart = () => {
    const [cart, setCart] = useState(() => [])
    const [total, setTotal] = useState(0)
    function addCart() {
        setCart(prevCart => [...prevCart, 'item'])
        setTotal(prevTotal => prevTotal + 12.99)
    }
    return (
        <>
            <div className="cart">
                <button onClick={addCart}>Add Item 1</button>
                <span>{cart}</span>
                <span>{total.toFixed(2)}</span>
            </div>
        </>
    );
}

export default ShoppingCart