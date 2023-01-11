import '../styles/MarketStyle.css'

const MarketItem = ({ name, imageUrl, price, addCart }) => {
  return (
    <>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={addCart}>Add to Cart</button>
    </>
  )
}

export default MarketItem