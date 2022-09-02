import React from 'react'
import styled from 'styled-components'

import { Header, Nav, Logo, Container, Anchor } from './style'

const NavBar: React.FC = () => {
  return (
    <Header> 
      <Nav>
        <Logo> duhoshina </Logo>
        <Container>
          <Anchor>About</Anchor>
          <Anchor>Projects</Anchor>
          <Anchor>Skills</Anchor>
          <Anchor>Talk to me</Anchor>
        </Container>
      </Nav>
    </Header>
  )
}

export default NavBar