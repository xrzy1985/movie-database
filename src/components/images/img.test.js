import { render, screen } from '@testing-library/react';
import { IMG } from './img.jsx';
import React from "react";
import { unmountComponentAtNode } from "react-dom";

let element = null;

beforeEach(() => {
    element = document.createElement("div");
    document.body.appendChild(element);
});

test('Rendering of the IMG component', () => {
    render(<IMG />);
    expect(IMG).toBeDefined();
    expect(screen.getByRole('img')).toBeInTheDocument();
});

test('Img should be present', () => {
    render(<IMG />);
    expect(screen.getByRole('img')).toBeInTheDocument();
});

afterEach(() => {
  unmountComponentAtNode(element);
  element.remove();
  element = null;
});

