import React from 'react'

import * as S from './AboutStyled'

import SectionName from '../../components/SectionName'
import SectionMe from '../../components/SectionMe'

const About = () => {
  return (
    <S.Main>
      <SectionName/>
      <SectionMe/>
    </S.Main>
  )
}

export default About