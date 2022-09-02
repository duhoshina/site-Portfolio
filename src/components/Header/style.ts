import styled from "styled-components";

export const Header = styled.header `
  width: 100vw;
  height: 60px;
  background: #23252F;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav `
  padding: 0 16px;
  width: 80%;
  max-width: 1080px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a `
  cursor: pointer;
  text-transform: uppercase;
  color: #f3f3f3;
`;

export const Container = styled.div `
  max-width: 350px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Anchor = styled.div `
  color: #fff;
  cursor: pointer;
`;