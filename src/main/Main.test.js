import { render } from '@testing-library/react';
import Main from './Main';

test('Tests the Main component', () => {
  render(<Main />);
  expect(Main).toBeDefined();
});
