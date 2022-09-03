import React from 'react'
import img from '../../assets/img/screencapture.png'

import * as S from './style'

const SectionImage = () => {
  return (
    <S.Section>
      <S.Container>
        <S.ContainerFixed>
          <a href="https://www.draleilawessler.com.br" target='_blank'>
            <S.Imagem src={img} />
          </a>
        </S.ContainerFixed>
      </S.Container>
    </S.Section>
  )
}

export default SectionImage