import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './style'

const SectionServices = () => {

  const ListServices = [
    {id: 1, title: 'Website Review', content: 'I make sure your website is performing its best by thoroughly reviewing it before making any changes.', icon: 'search'},
    {id: 2, title: 'Business Strategy', content: 'We discuss what you are trying to achieve, and place goals on your website planning how to achieve that.', icon: 'assessment'},
    {id: 3, title: 'User Experience Design', content: 'I design your website to be as easy to use as possible while guiding users towards the end goal.', icon: 'draw'},
    {id: 4, title: 'Tailored Development', content: 'I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product.', icon: 'branding_watermark'},
    {id: 5, title: 'Tailored Development', content: 'I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product.', icon: 'branding_watermark'},
    {id: 6, title: 'Tailored Development', content: 'I build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product.', icon: 'branding_watermark'}
  ]

  return (
    <S.Section>
      <S.StyledH2>Everything you need for a perfect website</S.StyledH2>
      <S.ContainerBox>
        {ListServices.map((item) => (
          <S.ContainerCard>
            <S.ContainerIcon>
              <span className='material-icons md-light'>{item.icon}</span>
            </S.ContainerIcon>
            <S.ContainerDivFlex>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </S.ContainerDivFlex>
          </S.ContainerCard>
        ))}
      </S.ContainerBox>
      <Link to="/skills">
        <S.ContainerButton>
          <S.Anchor>See my other skills</S.Anchor>
          <span className='material-icons'>east</span>
        </S.ContainerButton>
      </Link>
    </S.Section>
  )
}

export default SectionServices