import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import "@testing-library/jest-dom/extend-expect";

test('title is showed', () => {
    const {getByTestId} = render(<App/>);
    const titleEl = getByTestId('content-title');
    expect(titleEl.textContent).toBe('Hello, World!')
})
