import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #908;
`;
export const NavigationItem = styled.button`
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  gap: 0.7rem;
  background: #fff;

  cursor: pointer;

  ${({ selectedItem }) =>
    selectedItem === true &&
    css`
      background: #dbe1f2;
    `}
`;