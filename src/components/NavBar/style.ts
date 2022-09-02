import styled from "styled-components";

export const Nav = styled.nav `
  padding: 0 16px;
  width: 80%;
  max-width: 1168px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavMobile = styled.nav `
  height: 50px;
  width: 100%;
  min-width: 200px;
  max-width: 300px;
  background-color: #3b3a51;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
`;

export const Logo = styled.a `
  text-transform: uppercase;
  transition: 0.3s;
  text-align: center;
  color: #f3f3f3;
  
  cursor: pointer;
  &:hover {
    font-size:18px
  }
`;

export const Container = styled.div `
  max-width: 400px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Anchor = styled.div `
  color: #f3f3f3;
  padding: 10px 16px;
  margin: 0px 5px;
  transition: 0.3s;
  cursor: pointer;

  &.hightlights-anchor {
    background: #3b3a51;
    border-radius: 12px;
  }
  
  &.hightlights-anchor:hover {
    margin-bottom: 8px;
    background: #3b3a51;
    filter: brightness(1.2);
  }

  &:hover {
    border-radius: 12px;
    background: #1a1c23;
  }
`;

export const NavDesktop = styled.div`
  width: 100vw;
  height: 100px;
  font-size: 16px;
  background: #23252f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  @media(max-width: 888px) {
    display: none;
  }
`;

export const ContainerMobile = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100vw;
  display: flex;
  justify-content: center;
  
  @media(min-width: 889px) {
    display: none;
  }
`;