import React from 'react'
import styled from 'styled-components'

import { Header, Nav, Logo, Container, Anchor, Button, NavMobile, ContainerMobile } from './style'

const NavBar: React.FC = () => {
  return (
    <Header> 
      <Nav>
        <Logo> duhoshina </Logo>
        <Container>
          <Anchor>About</Anchor>
          <Anchor>Projects</Anchor>
          <Anchor>Skills</Anchor>
          <Button>Talk to me</Button>
        </Container>
      </Nav>
      <NavMobile>
        <ContainerMobile>About</ContainerMobile>
        <ContainerMobile>Projects</ContainerMobile>
        <ContainerMobile>Skills</ContainerMobile>
      </NavMobile>
    </Header>
  )
}

export default NavBar