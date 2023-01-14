
const MarketItem = ({name, imageUrl, price, addCart, item}) => {
  return (
    <>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addCart(item)}>Add to Cart</button>
    </>
  )
}

export default MarketItem