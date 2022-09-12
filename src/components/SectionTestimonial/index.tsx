import React from 'react'

import img1 from '../../assets/img/testimonial01.jpg'
import img2 from '../../assets/img/testimonial02.jpg'
import img3 from '../../assets/img/testimonial03.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import * as S from './style'

const SectionTestimonial = () => {

  const { t } = useTranslation();

  const ListTestimonial = [
    {id: 1, title: 'Arthur Paulucci', content: 'O Luis é um desenvolvedor fenomenal. Sempre dando atenção aos mínimos detalhes da aplicação; pensando sempre no usuário, de forma intuitiva, e no projeto final como um todo. Em nosso time, era comum vir a implementar novas tecnologias e novos recursos que facilitassem as ideias que, por si só, eram inovadoras um excelente profissional', subtitle: 'Estagiário', img: img1},
    {id: 2, title: 'João Rosas', content: 'O Luis é um desenvolvedor fenomenal. Sempre dando atenção aos mínimos detalhes da aplicação; pensando sempre no usuário, de forma intuitiva, e no projeto final como um todo. Em nosso time, era comum vir a implementar novas tecnologias e novos recursos que facilitassem as ideias que, por si só, eram inovadoras um excelente profissional', subtitle: 'Assistente Administrativo', img: img2},
    {id: 3, title: 'Ana Clara Godoy', content: 'É sempre bom ter pessoas como o Luis para trabalhar. Tive o prazer de trabalhar com ele na Prefeitura de Jacareí, no desenvolvimento de alguns projetos. Objetividade sempre foi uma característica do seu trabalho, bem como a colaboração. Sem dúvidas, é ótimo ter profissionais como o Luis para trabalhar.', subtitle: 'Analista de Suporte Técnico', img: img3}
  ]

  return (
    <S.Section>
      <S.StyledH2>{t("testimonial")}</S.StyledH2>
      <S.ContainerSwiper>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            720: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
                <S.Card>
                  <S.ImageContent>
                    <S.StyledSpan>
                    </S.StyledSpan>
                    <S.CardImage>
                      <S.StyledImage src={img1} />
                    </S.CardImage>
                  </S.ImageContent>
                  <S.CardContent>
                    <S.StyledTitle>Arthur Paulucci</S.StyledTitle>
                    <S.StyledSubtitle>{t("arthurSubtitle")}</S.StyledSubtitle>
                    <S.StyledParagraph>{t("arthurComment")}</S.StyledParagraph>
                  </S.CardContent>
                </S.Card>
            </SwiperSlide>
            <SwiperSlide>
                <S.Card>
                  <S.ImageContent>
                    <S.StyledSpan>
                    </S.StyledSpan>
                    <S.CardImage>
                      <S.StyledImage src={img2} />
                    </S.CardImage>
                  </S.ImageContent>
                  <S.CardContent>
                    <S.StyledTitle>João Rosas</S.StyledTitle>
                    <S.StyledSubtitle>{t("joaoSubtitle")}</S.StyledSubtitle>
                    <S.StyledParagraph>{t("joaoComment")}</S.StyledParagraph>
                  </S.CardContent>
                </S.Card>
            </SwiperSlide>
            <SwiperSlide>
                <S.Card>
                  <S.ImageContent>
                    <S.StyledSpan>
                    </S.StyledSpan>
                    <S.CardImage>
                      <S.StyledImage src={img3} />
                    </S.CardImage>
                  </S.ImageContent>
                  <S.CardContent>
                    <S.StyledTitle>Ana Clara Godoy</S.StyledTitle>
                    <S.StyledSubtitle>{t("anaSubtitle")}</S.StyledSubtitle>
                    <S.StyledParagraph>{t("anaComment")}</S.StyledParagraph>
                  </S.CardContent>
                </S.Card>
            </SwiperSlide>
        </Swiper>
      </S.ContainerSwiper>
    </S.Section>
  )
}

export default SectionTestimonial