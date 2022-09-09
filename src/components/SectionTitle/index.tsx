import React from "react";

import gif from '../../assets/img/Code-typing.gif'
import Typical from 'react-typical'

import * as S from './style'

const SectionTitle: React.FC = () => {

  return (
    <S.Section>
      <S.Container>
        <S.H2>Programming with React and TypeScript</S.H2>
        <S.H1><Typical
        steps={["Hello", 2000, "I'm Frontend Developer 👾", 4000]}
        loop={1}
        wrapper="p"
      /></S.H1>
        <S.DivButton>
          <S.ButtonTarget href="https://www.linkedin.com/in/duhoshina/" target="_blank">Visit LinkedIn</S.ButtonTarget>
          <S.ButtonTarget href="https://drive.google.com/file/d/1rJ892xVJ3Up2FaUZvwOt0kRTvLGPiCJi/view?usp=sharing" target="_blank" className="download">Download CV</S.ButtonTarget>
        </S.DivButton>
      </S.Container>
      <S.SectionIMG>
        <S.IMG src={gif} alt="Loading..." />
      </S.SectionIMG>
    </S.Section>
  );
}

export default SectionTitle