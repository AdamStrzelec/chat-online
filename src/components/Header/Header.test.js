import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Button Component', ()=>{
    it('Renders children text', () => {
        const { getByText } = render(
            <Header>header</Header>
        );
        getByText('Header');
    })
})