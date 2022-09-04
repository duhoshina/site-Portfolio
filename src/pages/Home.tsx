import React from 'react'

import SectionTitle from '../components/SectionTitle/index'
import SectionProjects from '../components/SectionProjects'

import * as S from './HomeStyled'

const Home = () => {
  return (
    <S.Main>
      <SectionTitle />
      <SectionProjects />
    </S.Main>
  )
}

export default Home