// @flow
import * as React from "react";
import { cryptoHttp } from "../../http";
import { Coin } from "../Coin";
import "./index.css";
interface HeaderProps {}

interface Price {
  [key: string]: { oldPrice: number; currentPrice: number };
}

const ALL_PRICES: Price = {
  BTC: { oldPrice: 0, currentPrice: 0 },
  LTC: { oldPrice: 0, currentPrice: 0 },
};

export const Header: React.FC<HeaderProps> = (props) => {
  const [prices, setPrices] = React.useState<Price>(ALL_PRICES);
  React.useEffect(() => {
    const invervals = Object.keys(ALL_PRICES).map((coin) => {
      return setInterval(() => {
        cryptoHttp.get(`price?fsym=${coin}&tsyms=BRL`).then((response) => {
          setPrices((prevState) => {
            if(prevState[coin].currentPrice === response.data.BRL){
              return prevState;
            }
             return {
               ...prevState,
               [coin]: {
                 oldPrice: prevState[coin].currentPrice,
                 currentPrice: response.data.BRL
               }
             }
          })
        });
      }, 5000);
      return () => invervals.forEach(interval => clearInterval(interval))
    })
    
  }, []);
  return (
    <div className="Header">
      {Object.keys(prices).map((coin) => (
        <div>
          <Coin
            coin={coin}
            oldPrice={prices[coin].oldPrice}
            currentPrice={prices[coin].currentPrice}
          />
        </div>
      ))}
    </div>
  );
};
