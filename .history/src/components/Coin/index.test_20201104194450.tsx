import { render, screen } from '@testing-library/react';
import {Coin} from './index';

it('renders without crashing', () => {
  render(<Coin />);
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});