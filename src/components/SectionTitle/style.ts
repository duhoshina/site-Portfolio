import styled from "styled-components";

export const Section = styled.section`
  max-width: 1168px;
  min-height: 400px;
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  font-size: 4em;
  margin: 20px 0px 50px;

  @media(max-width: 580px) {
    font-size: 3em;
  }

`;

export const Container = styled.div`
  height: 300px;
  width: 80%;
  min-width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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