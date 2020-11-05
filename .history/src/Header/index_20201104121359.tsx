// @flow 
import * as React from 'react';
import { Coin } from '../Coin';
import './index.css';
interface HeaderProps {
    
};

const ALL_PRICES = {
    BTC: {oldPrice: 0, currentPrice: 0},
    LTC: {oldPrice: 0, currentPrice: 0},
}

export const Header: React.FC<HeaderProps> = (props) => {
    const [prices, setPrices] = React.useState(ALL_PRICES);
    return (
        <div className="Header">
            {
                Object.keys(prices).map(coin => (
                    
                ))
            }
            <Coin coin="BTC" oldPrice={0} currentPrice={10}/>
        </div>
    );
};