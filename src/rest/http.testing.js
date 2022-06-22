import { render } from '@testing-library/react';
import Http from './Http.jsx';

test('Rendering of the App component', () => {
  render(<Http />);
  expect(Http).toBeDefined();
});