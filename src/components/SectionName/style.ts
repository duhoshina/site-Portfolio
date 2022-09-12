import styled from "styled-components";

export const ContainerSection = styled.section`
  width: 100%;
  max-width: 1168px;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 800px) {
    width: 80%;
  }
`;