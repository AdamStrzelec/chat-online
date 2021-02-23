import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
    width: calc(100% - 15px);
    background-color: #EAECEE;
    height: 25px;
    padding-left: 15px;
    border: none;
    outline: none;
    border-radius: 8px;
    font-size: 16px;
`

const Input = ({ placeholder, type, name }) => (
    <StyledInput
        placeholder={placeholder}
        type={type}
        name={name}/>
)

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string
}

Input.defaultProps = {
    placeholder: '',
    type: 'text',
}

export default Input;