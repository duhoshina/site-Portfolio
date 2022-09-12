import React from 'react'

import * as S from './style'

import img from '../../assets/img/myprofile.jpg'

const SectionMe = () => {
  return (
    <S.SectionContainer>
      <S.ContainerImagem>
        <S.StyledImagem src={img} />
      </S.ContainerImagem>
      <S.ContainerContent>
        <p>I'm a user experience consultant working with teams around the world to help create outstanding websites.</p>
        <p>I've been a developer since I started my career 5 years ago, and have always taken a deep interest in making websites the best they can be for everyone using them.</p>
        <p>Now I design and develop beautiful websites which focus on providing the best experience for everyone using them, ensuring they are easy for your team to edit while also delivering the best experience for your users.</p>
      </S.ContainerContent>
    </S.SectionContainer>
  )
}

export default SectionMe