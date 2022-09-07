import React from 'react'

import SectionTitle from '../components/SectionTitle/index'
import SectionGame from '../components/SectionProjects'

import * as S from './HomeStyled'

const Home = () => {
  return (
    <S.Main>
      <SectionTitle />
      <SectionGame />
    </S.Main>
  )
}

export default Home