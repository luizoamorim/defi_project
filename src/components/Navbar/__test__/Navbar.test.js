import React from 'react';
import { render } from '@testing-library/react';

import "@testing-library/jest-dom/extend-expect";
import Navbar from '../Navbar';

test('title is correct', () => {
    const {getByTestId} = render(<Navbar/>);
    const pEl = getByTestId('navbar-brand-title');        
    expect(pEl.textContent).toBe('DApp Token Farm');
})

// test('account is showed', () => {
//     const {getByTestId} = render(<Navbar/>);
//     const accountEl = getByTestId('account');        
//     expect(accountEl.textContent).toBe('0x0');
// })

