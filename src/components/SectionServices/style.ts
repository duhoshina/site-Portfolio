import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: 1168px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledH2 = styled.h2 `
  font-size: 2.5em;
  color: #263238;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 80%;
    text-align: center;
  }
`;

export const ContainerBox = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1110px) {
    width: 80%;
  }
`;

export const ContainerDivFlex = styled.div`
  display: flex;
  width: 80%;
  max-width: 280px;
  height: 80px;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 801px) {
    width: 80%;
    max-width: 80%;
  }
`;

export const ContainerCard = styled.div`
  width: 350px;
  min-width: 300px;
  height: 100px;
  display: flex;
  margin: 10px;
  justify-content: space-between;
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 799px) {
    width: 100%;
  }

`;

export const ContainerIcon = styled.div `
  width: 50px;
  height: 50px;
  background-color: #6d59a8;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Anchor = styled.a`
  color: #6d59a8;
  text-decoration: none;
  font-weight: bold;
  font-size: 15px;
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 170px;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.1);
  }
`;