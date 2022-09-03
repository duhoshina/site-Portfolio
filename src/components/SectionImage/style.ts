import styled from "styled-components";
import img from "../../assets/img/Mockup.png"

export const Section = styled.section `
  width: 100%;
  height: 50vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div `
  height: 100%;
  width: 100%;
  max-width: 1161px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
`;

export const ContainerFixed = styled.div`
  max-width: 585px;
  width: 100%;
  height: 83%;
  position: relative;
  top: 23px;
  overflow: auto;
  border-radius: 10px;
  
  cursor: pointer;

  ::-webkit-scrollbar {
    display: none;
  }
`;



export const Imagem = styled.img`
  width: 100%;
`;