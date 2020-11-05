// @flow
import * as React from "react";
import { Coin } from "../Coin";
import "./index.css";
interface HeaderProps {}

const ALL_PRICES = {
  BTC: { oldPrice: 0, currentPrice: 0 },
  LTC: { oldPrice: 0, currentPrice: 0 },
};

export const Header: React.FC<HeaderProps> = (props) => {
  const [prices, setPrices] = React.useState(ALL_PRICES);
  return (
    <div className="Header">
      {Object.keys(prices).map((coin: string) => (
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
