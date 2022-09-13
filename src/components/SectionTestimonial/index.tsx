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