import { render, screen } from '@testing-library/react';
import Footer from './footer.jsx';

test('Rendering of the Footer component', () => {
    render(<Footer />);
    expect(Footer).toBeDefined();
    expect(screen.getByTestId('footer-id')).toHaveTextContent('© Copyright | 2022');
});
