import styled from "styled-components";

export const ContainerSection = styled.section`
  width: 100%;
  max-width: 1168px;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;

  @media (max-width: 1100px) {
    justify-content: center;
    height: 30vh;
  }

  @media (max-width: 800px) {
    width: 80%;
    gap: initial;
  }
`;