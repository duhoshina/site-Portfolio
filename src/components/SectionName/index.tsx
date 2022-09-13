import React from 'react'
import { useTranslation } from "react-i18next"

import * as S from './style'

const SectionName = () => {

  const { t } = useTranslation();

  return (
    <S.ContainerSection>
      <h2>{t("hiThere")}</h2>
      <h1>{t("myNameIs")}</h1>
    </S.ContainerSection>
  )
}

export default SectionName