import { render, screen, } from '@testing-library/react';
import Footer from './footer.jsx';
import React from "react";
import { unmountComponentAtNode } from "react-dom";

let element = null;

beforeEach(() => {
    element = document.createElement("div");
    document.body.appendChild(element);
});

test('Rendering of the Footer component', () => {
    render(<Footer />);
    expect(Footer).toBeDefined();
    const details = screen.getByTestId('footer-id');
    expect(details).toHaveTextContent('© Copyright | 2022');
});

afterEach(() => {
  unmountComponentAtNode(element);
  element.remove();
  element = null;
});

