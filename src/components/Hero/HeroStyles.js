import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Button = styled.a`
width: 262px;
height: 64px;
border-radius: 50px;
font-size: ${({ alt }) => alt ? '20px' : '24px'};
font-weight: 300;
display: flex;
align-items: center;
justify-content: center;
margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 80px'};
color: #fff;
background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
cursor: pointer;
transition: 0.5s ease;
position: relative;
overflow: hidden;
opacity: 1;
box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

&:hover {
  background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
  box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
}
&:focus {
  outline: none;
}
&:active {
  box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
}

@media ${(props) => props.theme.breakpoints.md} {
  width: ${({ alt }) => alt ? '150px' : '184px'};
  height: ${({ alt }) => alt ? '52px' : '48px'};
  font-size: ${({ alt }) => alt ? '20px' : '16px'};
  margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  margin-right: ${({ alt }) => alt ? '0' : '64px'};
}

@media ${(props) => props.theme.breakpoints.sm} {
  width: 100%;
  height: 32px;
  font-size: 14px;
  margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
  margin-right: ${({ alt }) => alt ? '0' : '64px'};
}
`