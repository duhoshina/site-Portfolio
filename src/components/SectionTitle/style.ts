import styled from "styled-components";

export const Section = styled.section`
  width: 80%;
  max-width: 1168px;
  min-height: 400px;
  flex-wrap: wrap;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1111px) {
    width: 100%;
    height: 100vh;
  }
`;

export const H2 = styled.h2`
  text-align:center;
`;

export const H1 = styled.h1`
  font-size: 4em;
  margin: 20px 0px 30px;
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

export const ButtonTarget = styled.a`
  padding: 15px 40px;
  border-radius: 15px;
  background-color: #6d59a8;
  color: #f3f3f3;
  transition: 0.3s;
  border: #6d59a8 2px solid;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }

  &.download {
    background-color: #fff;
    color: #6d59a8;
    font-weight: 600;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 440px) {
    padding: 15px 30px;
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

export const DivButton = styled.div`
  display: flex;
  width: 370px;
  justify-content: space-between;

  @media (max-width: 440px) {
    width: 320px;
  }
`;
