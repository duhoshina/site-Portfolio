import React from 'react'

import SectionTitle from '../components/SectionTitle/index'
import SectionGame from '../components/SectionProjects'
import SectionServices from '../components/SectionServices'

import * as S from './HomeStyled'

const Home = () => {
  return (
    <S.Main>
      <SectionTitle />
      <SectionServices />
      <SectionGame />
    </S.Main>
  )
}

export default Home