import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import * as S from './style'

const NavBar: React.FC = () => {
  return (
    <S.Header> 
      <S.Nav>
        <Link to="/"><S.Logo> duhoshina </S.Logo></Link>
        <S.Container>
          <Link to="/home"><S.Anchor>About</S.Anchor></Link>
          <Link to="/home"><S.Anchor>Projects</S.Anchor></Link>
          <Link to="/home"><S.Anchor>Skills</S.Anchor></Link>
          <Link to="/home"><S.Anchor className='hightlights-anchor'>Talk to me</S.Anchor></Link>
        </S.Container>
      </S.Nav>
      <S.NavMobile>
        <Link to="/home"><S.ContainerMobile>About</S.ContainerMobile></Link>
        <Link to="/home"><S.ContainerMobile>Projects</S.ContainerMobile></Link>
        <Link to="/home"><S.ContainerMobile>Skills</S.ContainerMobile></Link>
      </S.NavMobile>
    </S.Header>
  )
}

export default NavBar