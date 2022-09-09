import React from 'react'

import img1 from '../../assets/img/testimonial01.jpg'

import * as S from './style'

const SectionTestimonial = () => {

  const ListTestimonial = [
    {id: 1, title: 'Arthur Paulucci', content: 'O Luis é um desenvolvedor fenomenal. Sempre dando atenção aos mínimos detalhes da aplicação; pensando sempre no usuário, de forma intuitiva, e no projeto final como um todo. Em nosso time, era comum vir a implementar novas tecnologias e novos recursos que facilitassem as ideias que, por si só, eram inovadoras um excelente profissional', img: img1}
  ]

  return (
    <S.Section>
      <S.ContainerSlide>
        <S.CardWrapper>
          {ListTestimonial.map((item) => (
            <S.Card>
              <S.ImageContent>
                <S.StyledSpan>
                </S.StyledSpan>
                <S.CardImage>
                  <S.StyledImage src={item.img} />
                </S.CardImage>
              </S.ImageContent>
              <S.CardContent>
                <S.StyledTitle>{item.title}</S.StyledTitle>
                <S.StyledParagraph>{item.content}</S.StyledParagraph>
              </S.CardContent>
            </S.Card>
          ))}
        </S.CardWrapper>
      </S.ContainerSlide>
    </S.Section>
  )
}

export default SectionTestimonial