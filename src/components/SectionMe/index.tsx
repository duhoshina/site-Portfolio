import React from 'react'

import * as S from './style'
import { useTranslation } from "react-i18next"
import img from '../../assets/img/myprofile.jpg'

const SectionMe = () => {

  const { t } = useTranslation();

  return (
    <S.SectionContainer>
      <S.ContainerImagem>
        <S.StyledImagem src={img} />
      </S.ContainerImagem>
      <S.ContainerContent>
        <p>{t("paragraphOne")}</p>
        <p>{t("paragraphTwo")}</p>
        <p>{t("paragraphThree")}</p>
      </S.ContainerContent>
    </S.SectionContainer>
  )
}

export default SectionMe