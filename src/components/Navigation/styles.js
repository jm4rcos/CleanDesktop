import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  width: 400px;
  height: 100vh;
  padding: 20px;

  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Avatar = styled.div`
  height: 60px;
  width: 60px;
  background: #d9d9d9;
  border-radius: 50%;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 16px 20px;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover {
    background: #f5f5fd;
  }
`;

export const Navigation = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 3px solid #f2f2f2;
  padding: 20px 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  overflow: auto;
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
    gap: .7rem;
    background: #fff;

    cursor: pointer;

    ${({ selectedItem }) => selectedItem === true && css`
        background: #1e49dc;
    `}
`;