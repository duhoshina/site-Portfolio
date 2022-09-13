import React from 'react'

import { Link } from 'react-router-dom'
import { LanguageSwitcher } from '../../languageSwitcher'
import { useTranslation } from "react-i18next"

import * as S from './style'

const NavBar: React.FC = () => {

  const { t } = useTranslation();

  return (
    <>
      <S.Header>
        <S.NavDesktop>
          <S.Nav>
            <Link to="/"><S.Logo> duhoshina </S.Logo></Link>
            <S.Container>
              <Link to="/about"><S.Anchor>{t("about")}</S.Anchor></Link>
              <Link to="/projects"><S.Anchor>{t("projects")}</S.Anchor></Link>
              <Link to="/skills"><S.Anchor>{t("skills")}</S.Anchor></Link>
              <Link to="/contact"><S.Anchor className='hightlights-anchor'>{t("talkToMe")}</S.Anchor></Link>
              <LanguageSwitcher />
            </S.Container>
          </S.Nav>
        </S.NavDesktop> 
        <S.ContainerMobile>
          <S.NavMobile>
              <Link to="/about"><S.Anchor>{t("about")}</S.Anchor></Link>
              <Link to="/projects"><S.Anchor>{t("projects")}</S.Anchor></Link>
              <Link to="/skills"><S.Anchor>{t("skills")}</S.Anchor></Link>
            </S.NavMobile>
        </S.ContainerMobile>
      </S.Header>
    </>
  )
}

export default NavBar