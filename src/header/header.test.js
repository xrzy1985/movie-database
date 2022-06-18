import { render } from '@testing-library/react';
import Header from './header.jsx';

test('Rendering of the Header component', () => {
    const _header = <Header />;
    render(_header);
    expect(_header).toBeDefined();
});
