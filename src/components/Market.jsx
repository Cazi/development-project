import '../styles/MarketStyle.css'
import MarketItem from './MarketItem'
import { marketData } from '../marketData'
const Market = ({addCart}) => {
  return (
    <div className="market">
      <span className="marketHeading">Market</span>
        {marketData.map((data, key) => {
          return (
            <div key={key} className="marketItem">
              <MarketItem name={data.name} imageUrl={data.imgUrl} price={data.price} addCart={addCart} />
            </div>
          );
        })}


    </div>
  )
}

export default Market