import styled from "styled-components";

export const Section = styled.section`
  max-width: 1168px;
  min-height: 400px;
  flex-wrap: wrap;
  height: 80vh;
  width: 80%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1111px) {
    width: 100%;
  }
`;

export const H2 = styled.h2`
  text-align:center;
`;

export const H1 = styled.h1`
  font-size: 4em;
  margin: 10px 0px 30px;
  text-align: start;

  @media (max-width: 1111px) {
    text-align: center;
  }

  @media(max-width: 580px) {
    font-size: 3em;
  }

`;

export const Container = styled.div`
  height: 350px;
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 1111px) {
    align-items: center;
  }

`;

export const ButtonTarget = styled.p`
  padding: 15px 40px;
  border-radius: 15px;
  background-color: #6d59a8;
  color: #f3f3f3;
  transition: 0.3s;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const SectionIMG = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  display: flex;
  justify-content: center;
`;

export const IMG = styled.img`
  width: 100%;
`;