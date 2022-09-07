import React from "react";

import { Link } from 'react-router-dom'

import gif from '../../assets/img/Code-typing.gif'

import * as S from './style'

const SectionTitle: React.FC = () => {

  return (
    <S.Section>
      <S.Container>
        <S.H2>Programming with React and TypeScript</S.H2>
        <S.H1>I create beautiful websites your users will love</S.H1>
        <S.DivButton>
          <Link to="/home"><S.ButtonTarget>Explore More</S.ButtonTarget></Link>
          <Link to="/home"><S.ButtonTarget className="download">Download CV</S.ButtonTarget></Link>
        </S.DivButton>
      </S.Container>
      <S.SectionIMG>
        <S.IMG src={gif} alt="Loading..." />
      </S.SectionIMG>
    </S.Section>
  );
}

export default SectionTitle