import styled from "styled-components";

export const ContainerLanguage = styled.div`
  gap: 20px;
`;

export const StyledSpan = styled.span`
  color: #6d59a8;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  margin: 10px;
`;

// css video

export const ContainerDropdown = styled.div`
  position: relative;
  width: 120px;
  height: 30px;

  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid #333;
    right: 20px;
    top: 5px;
    z-index: 10000;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(-45deg);
    transition: 0.5s;
    pointer-events: none;

  }
`;

export const StyledInputTextBox = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius: 10px;
`;

export const ContainerOption = styled.div`
  position: absolute;
  top: 50px;
  width: 100%;
  background: #fff;
  box-shadow: 0 30px 30px rgb(0,0,0,0.05);
  color: black;
  border-radius: 10px;
  overflow: hidden;

`;

export const StyledOption = styled.div`
  padding: 12px 20px;
  cursor: pointer;

  &:hover {
    background: #6d59a8;
  }
`;