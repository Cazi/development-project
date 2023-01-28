import '../styles/MarketStyle.css'
import MarketItem from './MarketItem'
import { marketData } from '../marketData'
import { useState, useEffect } from 'react'
const Market = ({ addCart }) => {
  const [items, setItems] = useState(marketData);
  // useEffect(() => {
  //   setItems({
  //     items: items
  //   })
  // });

  const handleClick = (genre) => {
    setItems(marketData)
    let filterItems = []
    if (genre !== 'all') {
      filterItems = items.filter(item => item.genre === genre);
      setItems(filterItems)
    }
  }

  return (
    <div className="market">
      <span className="marketHeading">Market</span>
      <div className='market-filters'>
        <button onClick={() => handleClick('all')}>Reset</button>
        <button onClick={() => handleClick('mystery')}>Mystery</button>
        <button onClick={() => handleClick('action')}>Action</button>
        <button onClick={() => handleClick('romance')}>Romance</button>
      </div>
      {items.map((data, key) => {
        return (
          <div key={key} className="marketItem">
            <MarketItem name={data.name} imageUrl={data.imgUrl} price={data.price} addCart={addCart} item={data} />
          </div>
        );
      })}


    </div>
  )
}


export default Market