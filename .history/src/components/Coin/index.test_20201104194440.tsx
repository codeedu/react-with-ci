import { render, screen } from '@testing-library/react';
import {Coin} from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});