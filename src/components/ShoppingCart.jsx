import '../styles/CartStyle.css'
function ShoppingCart({ total, cart, addCart }) {
    total = 0
    return (
        <>
            <div className="cart">
                <span className="cartHeading"> Cart</span>
                <span>{cart}</span>
                <span>{total.toFixed(2)}</span>
            </div>
        </>
    );
}

export default ShoppingCart