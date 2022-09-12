import React from 'react'

import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

import * as S from './style'

const SectionServices = () => {

  const { t } = useTranslation();

  return (
    <S.Section>
      <S.StyledH2>{t("everythingYouNeed")}</S.StyledH2>
      <S.ContainerBox>
        <S.ContainerCard>
          <S.ContainerIcon>
            <span className='material-icons md-light'>search</span>
          </S.ContainerIcon>
          <S.ContainerDivFlex>
            <h3>{t("websiteReview")}</h3>
            <p>{t("websiteReviewContent")}</p>
          </S.ContainerDivFlex>
        </S.ContainerCard>
        <S.ContainerCard>
          <S.ContainerIcon>
            <span className='material-icons md-light'>assessment</span>
          </S.ContainerIcon>
          <S.ContainerDivFlex>
            <h3>{t("businessStrategy")}</h3>
            <p>{t("businessStrategyContent")}</p>
          </S.ContainerDivFlex>
        </S.ContainerCard>
        <S.ContainerCard>
          <S.ContainerIcon>
            <span className='material-icons md-light'>draw</span>
          </S.ContainerIcon>
          <S.ContainerDivFlex>
            <h3>{t("userExperience")}</h3>
            <p>{t("userExperienceContent")}</p>
          </S.ContainerDivFlex>
        </S.ContainerCard>
        <S.ContainerCard>
          <S.ContainerIcon>
            <span className='material-icons md-light'>branding_watermark</span>
          </S.ContainerIcon>
          <S.ContainerDivFlex>
            <h3>{t("tailoredDevelopment")}</h3>
            <p>{t("tailoredDevelopmentContent")}</p>
          </S.ContainerDivFlex>
        </S.ContainerCard>
        <S.ContainerCard>
          <S.ContainerIcon>
            <span className='material-icons md-light'>sync_problem</span>
          </S.ContainerIcon>
          <S.ContainerDivFlex>
            <h3>{t("rigorousTesting")}</h3>
            <p>{t("rigorousTestingContent")}</p>
          </S.ContainerDivFlex>
        </S.ContainerCard>
        <S.ContainerCard>
          <S.ContainerIcon>
            <span className='material-icons md-light'>headset_mic</span>
          </S.ContainerIcon>
          <S.ContainerDivFlex>
            <h3>{t("ongoingSupport")}</h3>
            <p>{t("ongoingSupportContent")}</p>
          </S.ContainerDivFlex>
        </S.ContainerCard>
      </S.ContainerBox>
      <Link to="/skills">
        <S.ContainerButton>
          <S.Anchor>{t("otherSkills")}</S.Anchor>
          <span className='material-icons'>east</span>
        </S.ContainerButton>
      </Link>
    </S.Section>
  )
}

export default SectionServices