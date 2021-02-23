import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button Component', ()=>{
    it('Renders children text', () => {
        const { getByText } = render(
            <Button>click me</Button>
        );

        getByText('Click me');
    })
})