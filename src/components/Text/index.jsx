import React from 'react';
import { StyledText } from './styles';

export const Text = ({ content, type, color, size, mb }) => {
    return (
        <StyledText
            type={type}
            color={color}
            size={size}
            mb={mb}
        >
            {content}
        </StyledText>
    )
}