import '../styles/CartStyle.css'
import CartItem from './CartItem';
const ShoppingCart = ({ cart }) => {
    let total = 0;
    function Counter(array) {
        let count = {}
        for (let index = 0; index < array.length; index++) {
            if (array[index].name in count) {
                count[array[index].name] += 1;
            } else {
                count[array[index].name] = 1;
            }
        }
      }
    let countItems = Counter(cart)
    return (
        <div className='cart'>
            <span className="cartHeading"> Cart</span>
            {cart.map((item, key) => {
                return (
                    <CartItem item={item} key={key} />
                )
            })}
            {console.log({countItems})}
        </div>
    );
}

export default ShoppingCart