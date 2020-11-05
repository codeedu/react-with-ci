// @flow 
import * as React from 'react';
import './index.css';

interface CoinProps{
    coin: string;
    oldPrice: number;
    currentPrice: number;
};
export const Coin: React.FC<CoinProps> = (props) => {
    return (
        <div className="Coin">
            
        </div>
    );
};