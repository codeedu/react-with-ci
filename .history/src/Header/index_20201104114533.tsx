// @flow 
import * as React from 'react';
import { Coin } from '../Coin';
import './index.css';
interface HeaderProps {
    
};
export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className="Header">
            <Coin/></Coin>
        </div>
    );
};