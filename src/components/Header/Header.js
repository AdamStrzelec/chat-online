import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { capitalizeText } from '../../utils/capitalizeText/capitalizeText';

const StyledHeader = styled.h1`
    color: ${props => props.heading ? '#566573' : '#2C3E50'};
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.heading ? '20px' : '25px'};
    margin: 0;
`

const Header = ({ children, heading }) => (
    <StyledHeader heading={heading}>
        {capitalizeText(children)}
    </StyledHeader>
)


Header.propTypes = {
    children: PropTypes.string.isRequired
}

export default Header;