import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: 1168px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  border-radius: 25px;
  background: #f3f3f3;
  width: 350px;
  height: 450px;
`; 

export const ImageContent = styled.div`
  padding: 10px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  position: relative;
  padding: 25px 0;
`;

export const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #6d59a8;
  border-radius: 25px 25px 0 25px;

  &::before,
  &::after{
    position: absolute;
    height: 40px;
    width: 40px;
    right: 0;
    bottom: -40px;
    background: #6d59a8;
    content: '';
  }

  &::after{
    border-radius: 0 25px 0 0;
    background-color: #f3f3f3;
  }
`;

export const CardImage = styled.div`
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  padding: 3px;
`;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #f3f3f3;
`;

export const CardContent = styled.div`
  padding: 20px 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #263238;
  margin-bottom: 5px;
`;

export const StyledParagraph = styled.p`
  font-size: 14px;
  color: #707070;
  text-align: center;
`;

export const StyledH2 = styled.div`
  font-size: 3em;
  color: #263238;
  margin-bottom: 50px;
  text-align: center;
  font-weight: 600;

  @media (max-width: 800px) {
    width: 80%;
    text-align: center;
  }
`;

export const StyledSubtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;

