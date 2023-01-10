import '../styles/CartStyle.css'
const ShoppingCart = ({ total, cart}) => {
    total = 0
    return (
        <>
            <div className="cart">
                <span className="cartHeading"> Cart</span>
                <span className="total">Total:{cart}</span>
                {/* Total will be computed by looping over all the cart items */}
                <span>{total.toFixed(2)}</span>
            </div>
        </>
    );
}

export default ShoppingCart