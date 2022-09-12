import React from 'react'

// section homepages
import SectionTitle from '../components/SectionTitle/index'
import SectionGame from '../components/SectionProjects'
import SectionServices from '../components/SectionServices'
import SectionTestimonial from '../components/SectionTestimonial'


// for styled components
import * as S from './HomeStyled'

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