import React from 'react'

import { Link } from 'react-router-dom'

import * as S from './style'

const NavBar: React.FC = () => {
  return (
    <>
      <header>
        <S.NavDesktop>
          <S.Nav>
            <Link to="/"><S.Logo> duhoshina </S.Logo></Link>
            <S.Container>
              <Link to="/home"><S.Anchor>About</S.Anchor></Link>
              <Link to="/home"><S.Anchor>Projects</S.Anchor></Link>
              <Link to="/home"><S.Anchor>Skills</S.Anchor></Link>
              <Link to="/home"><S.Anchor className='hightlights-anchor'>Talk to me</S.Anchor></Link>
            </S.Container>
          </S.Nav>
        </S.NavDesktop> 
        <S.ContainerMobile>
          <S.NavMobile>
              <Link to="/home"><a>About</a></Link>
              <Link to="/home"><a>Projects</a></Link>
              <Link to="/home"><a>Skills</a></Link>
            </S.NavMobile>
        </S.ContainerMobile>
      </header>
    </>
  )
}

export default NavBar