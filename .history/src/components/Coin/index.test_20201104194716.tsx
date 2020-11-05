import React from 'react';
import { render, screen } from '@testing-library/react';
import {Coin} from './index';

it('renders without crashing', () => {
  render(<Coin coin="BTC" currentPrice={-10} oldPrice={0}/>);
  expect(screen.getByText('BTC'));
});