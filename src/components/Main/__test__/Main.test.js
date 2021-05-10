import React from 'react';
import { render } from '@testing-library/react';

import "@testing-library/jest-dom/extend-expect";
import Main from '../Main';

test('title is correct', () => {
    const {getByTestId} = render(<Main/>);
})

// test('account is showed', () => {
//     const {getByTestId} = render(<Navbar/>);
//     const accountEl = getByTestId('account');        
//     expect(accountEl.textContent).toBe('0x0');
// })

