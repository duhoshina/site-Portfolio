import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  gap: 50px;

  @media (max-width: 1100px) {
    gap: initial;
  }
`;