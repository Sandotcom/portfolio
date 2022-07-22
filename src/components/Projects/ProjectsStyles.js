import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;  
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  opacity: 0.8;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
font-family: 'Space Grotesk';
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`
export const BlogCard = styled.div`
  border: 1px solid #172339;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-size: 13px;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1.5rem;
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: linear-gradient(270deg, #4b2d70 0%, #331f4d 100%);
border-radius: 10px;
transition: 0.5s;
&:hover{
  background: linear-gradient(300deg, #4b2d70 0%, #331f4d 100%);
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: rgba(255, 255, 255, 0.5);
font-size: 1.5rem;
`