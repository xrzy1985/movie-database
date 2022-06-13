import { render } from '@testing-library/react';
import App from './App';
import Main from './main/Main.jsx';

let style = null;

beforeEach(() => {
  style = {'width': '100vw', 'height': '100vh'};
});

test('Rendering of the App component', () => {
  render(<App />);
  expect(App).toBeDefined();
  expect(style.width).toEqual('100vw');
  render(<div style={style}>render(<Main />)</div>);
  expect(Main).toBeDefined();
});
