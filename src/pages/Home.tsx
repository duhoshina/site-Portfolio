import React from 'react'

import SectionTitle from '../components/SectionTitle/index'
import SectionGame from '../components/SectionProjects'
import SectionServices from '../components/SectionServices'

import * as S from './HomeStyled'
import SectionTestimonial from '../components/SectionTestimonial'

const Home = () => {
  return (
    <S.Main>
      <SectionTitle />
      <SectionServices />
      <SectionGame />
      <SectionTestimonial />
    </S.Main>
  )
}

export default Home