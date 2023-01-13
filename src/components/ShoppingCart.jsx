import '../styles/CartStyle.css'
const ShoppingCart = ({ cart }) => {
    let total = 0
    return (
        <>
            <div className="cart">
                <span className="cartHeading"> Cart</span>
                {cart.map((item, key) => {
                    return (
                        <div key={key} className='cartItem'>
                            {item}
                        </div>
                    );
                })}
                {/* Total will be computed by looping over all the cart items */}
                <span>{total.toFixed(2)}</span>
            </div>
        </>
    );
}

export default ShoppingCart