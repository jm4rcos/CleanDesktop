import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
  ${({ height, width }) =>
    css`
      height: ${height + "px" || "30px"};
      width: ${width || "100%"};
    `}

  border: 3px solid #f2f2f2;
  padding: 20px 16px;
  padding-right: 50px;
  border-radius: 10px;
  background: transparent;
  position: relative;

  &:hover {
    border: 3px solid #dbe1f2;
  }

  ${({ type }) => type === "search" && css``}

  font-size: 16px;
  ::placeholder {
    color: #809090;
  }
`;

export const SearchButton = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  padding: 20px 16px;
  border-radius: 0 8px 8px 0;
  background: #dbe1f2;
  color: #1e49dc;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 3px;

  cursor: pointer;
`;