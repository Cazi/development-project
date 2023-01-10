import '../styles/MarketStyle.css'

const MarketItem = ({name, imageUrl, price, addCart}) => {
  return (
    <div className="marketItem">
        <span>{name}</span>
        <span>{price}</span>
        <button onClick={addCart}>Add Item 1</button>
    </div>
  )
}

export default MarketItem