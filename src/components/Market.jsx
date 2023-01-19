import '../styles/MarketStyle.css'
import MarketItem from './MarketItem'
import { marketData } from '../marketData'
const Market = ({ addCart }) => {
  return (
    <div className="market">
      <span className="marketHeading">Market</span>
      <div className='market-filters'>
        <button>Mystery</button>
        <button>Action</button>
        <button>Romance</button>
      </div>
      {marketData.map((data, key) => {
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