import { render } from '@testing-library/react';
import App from './App';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';
import Main from './main/Main.jsx';

let style = null;
let headerStyle;
let footerStyle;

beforeEach(() => {
  style = {'width': '100vw', 'height': '100vh'};
  headerStyle = {"height": "20vh"};
  footerStyle = {"height": "10vh"};
});

test('Rendering of the App component', () => {
  render(<App />);
  expect(App).toBeDefined();
  expect(style.width).toEqual('100vw');
  const app =
    <div className="parent">
      <div style={headerStyle} id="shared">
        render(<Header />);
        expect(Header).toBeDefined();
      </div>
      <div className="main-section">
        render(<Main />);
        expect(Main).toBeDefined();
      </div>
      <div style={footerStyle} id="shared">
        render(<Footer />);
        expect(Footer).toBeDefined();
      </div>
    </div>;
  expect(app).toBeDefined();
});
