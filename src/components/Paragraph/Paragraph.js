import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledParagraph = styled.p`
    color: #2C3E50;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    margin: 0;
`

const Paragraph = ({ children }) => (
    <StyledParagraph>
        {children}
    </StyledParagraph>
)
Paragraph.propTypes = {
    children: PropTypes.string.isRequired
}

export default Paragraph;