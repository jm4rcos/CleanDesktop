import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #f5f5fd;
  border-radius: 10px;
  margin-top: -10px;
  position: relative;
  /* padding-top: 10px 20px; */

  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s;
  animation: pop 1s forwards;

  @keyframes pop {
    0% {
      opacity: .3;
      height: 0;
    }
    100% {
      opacity: 1;
      height: 100%;
    }
  }
`;
export const NavigationItem = styled.button`
  border-radius: 6px;
  width: 100%;
  padding: 10px 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: #f5f5fd;

  cursor: pointer;

  ${({ selectedItem }) =>
    selectedItem === true &&
    css`
      background: #dddefd;
    `}
`;