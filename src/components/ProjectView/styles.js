import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  padding: 20px;
  /* background-color: #000; */
  
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  max-height: 10vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Card = styled.div`
  height: 400px;
  width: 300px;
  overflow: hidden;
  border-radius: 10px;
`

export const View = styled.img`
  width: 100%;
  height: 100%;
`;