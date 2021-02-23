import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { capitalizeText } from '../../utils/capitalizeText/capitalizeText';

const StyledButton = styled.button`
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    cursor: pointer;
    color: white;
    background-color: ${props => props.secondary ? '#48C9B0' : '#5DADE2'};
`

const Button = ({ children, onClick, secondary }) => 
    <StyledButton secondary={secondary} onClick={onClick}>
        {capitalizeText(children)}
    </StyledButton>

Button.propTypes = {
    children: PropTypes.string.isRequired
}

export default Button;