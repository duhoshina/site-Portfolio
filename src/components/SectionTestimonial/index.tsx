import React from 'react'

import img1 from '../../assets/img/testimonial01.jpg'
import img2 from '../../assets/img/testimonial02.jpg'
import img3 from '../../assets/img/testimonial03.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import * as S from './style'

const SectionTestimonial = () => {

  const ListTestimonial = [
    {id: 1, title: 'Arthur Paulucci', content: 'O Luis é um desenvolvedor fenomenal. Sempre dando atenção aos mínimos detalhes da aplicação; pensando sempre no usuário, de forma intuitiva, e no projeto final como um todo. Em nosso time, era comum vir a implementar novas tecnologias e novos recursos que facilitassem as ideias que, por si só, eram inovadoras um excelente profissional', img: img1},
    {id: 2, title: 'Apolo Rezende', content: 'O Luis é um desenvolvedor fenomenal. Sempre dando atenção aos mínimos detalhes da aplicação; pensando sempre no usuário, de forma intuitiva, e no projeto final como um todo. Em nosso time, era comum vir a implementar novas tecnologias e novos recursos que facilitassem as ideias que, por si só, eram inovadoras um excelente profissional', img: img2},
    {id: 3, title: 'Ana Clara Godoy', content: 'É sempre bom ter pessoas como o Luis para trabalhar. Tive o prazer de trabalhar com ele na Prefeitura de Jacareí, no desenvolvimento de alguns projetos. Objetividade sempre foi uma característica do seu trabalho, bem como a colaboração. Sem dúvidas, é ótimo ter profissionais como o Luis para trabalhar.', img: img3}
  ]

  return (
    <S.Section>
      <S.StyledH2>See testimonial send for my working partner</S.StyledH2>
      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {ListTestimonial.map((item) => (
          <SwiperSlide>
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
          </SwiperSlide>
            ))}
      </Swiper>
    </S.Section>
  )
}

export default SectionTestimonial