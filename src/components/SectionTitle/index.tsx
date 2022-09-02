import React from "react";

import { Link } from 'react-router-dom'

import * as S from './style'

const SectionTitle: React.FC = () => {

  return (
    <S.Section>
      <S.Container>
        <h2>Programming with React and TypeScript</h2>
        <S.H1>I create beautiful websites your users will love</S.H1>
        <Link to="/home"><S.ButtonTarget>Explore More</S.ButtonTarget></Link>
      </S.Container>
    </S.Section>
  );
}

export default SectionTitle