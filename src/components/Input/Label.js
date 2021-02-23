import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: #2C3E50;
`

const Label = ({ children, htmlFor }) => (
    <StyledLabel htmlFor={htmlFor}>
        {children}
    </StyledLabel>
)

Label.propTypes = {
    children: PropTypes.string.isRequired,
    htmlFor: PropTypes.string
}

export default Label;