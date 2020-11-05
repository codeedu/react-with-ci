// @flow 
import * as React from 'react';
import './index.css';

interface CoinProps{
    coin: string;
    oldPrice: number;
    currentPrice: number;
};
export const Coin: React.FC<CoinProps> = (props) => {
    const {coin, oldPrice, currentPrice} = props;
    return (
        <div className="Coin">
            <span>{coin}</span>
    <span>R$ {currentPrice.toLocaleString()}</span>
        </div>
    );
};