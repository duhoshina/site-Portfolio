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
  color: #3b3a51;
  min-width: 200px;
  max-width: 300px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.a `
  text-transform: uppercase;
  transition: 0.3s;
  text-align: center;
  
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
  padding: 10px 16px;
  margin: 0px 5px;
  transition: 0.3s;
  border-radius: 12px;
  
  cursor: pointer;

  &.hightlights-anchor {
    background: #6d59a8;
    border-radius: 12px;
    color: #fff;
  }
  
  &.hightlights-anchor:hover {
    margin-bottom: 8px;
    background: #6d59a8;
    filter: brightness(1.2);
  }

  &:hover {
    background: #6d59a8;
    color: #fff;
  }
`;

export const NavDesktop = styled.div`
  width: 100vw;
  height: 100px;
  font-size: 16px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  @media(max-width: 1100px) {
    display: none;
  }
`;

export const ContainerMobile = styled.div`
  position: fixed;
  z-index: 1;
  top: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  
  @media(min-width: 1111px) {
    display: none;
  }
`;

export const Header = styled.header`
  position: absolute;
`;