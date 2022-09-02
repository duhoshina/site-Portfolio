import styled from "styled-components";

export const Header = styled.header `
  width: 100vw;
  height: 100px;
  font-size: 16px;
  background: #23252f;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const Nav = styled.nav `
  padding: 0 16px;
  width: 80%;
  max-width: 1168px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 888px) {
    display: none;
  }
`;

export const NavMobile = styled.nav `
  width: 80%;
  min-width: 250px;
  max-width: 380px;
  height: 60px;
  background: #3b3a51;
  position: absolute;
  bottom: 30px;
  border-radius: 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media(min-width: 889px) {
    display: none;
  }
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

export const ContainerMobile = styled.div`
  width: 70px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f3f3f3;

  cursor: pointer;
`;