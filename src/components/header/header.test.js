import React from 'react';
import Header from './header.jsx';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import fireEvent from '@testing-library/user-event';

let header = null;
let term = '';

beforeEach(() => {
  header = document.createElement("div");
  document.body.appendChild(header);
});

describe("Header Component" ,() => {
    test('Rendering of the Header component', () => {
        render(<Header />, header);
        expect(Header).toBeDefined();
    });
    
    test('Title should be present in the component', () => {
        render(<Header term={term} />, header);
        const title = screen.getByTestId('title');
        expect(title).toHaveTextContent('Local Movie Database');
    });
    
    test('Input should register text when text is entered', () => {
        const handleSearchTerm = jest.fn((t)=>{ term = t; });
        render(<Header term={term} setTerm={(term)=>{handleSearchTerm(term)}}/>, header);
        render(<input onChange={e => handleSearchTerm()} type="search" value={term}/>);
        const input = screen.getByTestId("movie-search-input");
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("type", "search");
        term = 'I love testing';
        fireEvent.type(input, 'I love testing');
        expect(input.value).toEqual(term);
    });
})

afterEach(() => {
    unmountComponentAtNode(header);
    header.remove();
    header = null;
});
