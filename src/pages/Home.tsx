import React from 'react'
import SectionImage from '../components/SectionImage'

import SectionTitle from '../components/SectionTitle/index'

import * as S from './HomeStyled'

const Home = () => {
  return (
    <S.Main>
      <SectionTitle />
      <SectionImage />
    </S.Main>
  )
}

export default Home