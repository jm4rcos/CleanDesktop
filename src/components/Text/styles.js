import styled, { css } from 'styled-components';

export const StyledText = styled.p`
  ${({ type, color }) =>
    type === "title" &&
    css`
      color: ${color || "#000"};
      font-weight: 600;
    `}

  ${({ type, color }) =>
    type === "text" &&
    css`
      color: ${color || "#82839A"};
      font-weight: 400;
    `}

    ${({ size }) => css`
    font-size: ${size || "18px"};
  `}

    ${({ mb }) => css`
    margin-bottom: ${mb || "0"};
  `}
`;