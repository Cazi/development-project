import '../styles/CartStyle.css'
import CartItem from './CartItem';
const ShoppingCart = ({ cart }) => {
    let total = 0
    return (
        <div className='cart'>
            <span className="cartHeading"> Cart</span>
            {cart.map((item, key) => {
                return (
                    <CartItem item={item} key={key} />
                )
            })}
        </div>
    );
}

export default ShoppingCart