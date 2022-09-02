import React from "react";

import { Link } from 'react-router-dom'

import * as S from './style'

const SectionTitle: React.FC = () => {
  return (
    <S.Section>
      <S.Container>
        <h2>Programming with TypeScript</h2>
        <h1>I create beautiful websites your users will love</h1>
        <Link to="/"><S.ButtonTarget>Explore More</S.ButtonTarget></Link>
      </S.Container>
    </S.Section>
  );
}

export default SectionTitle