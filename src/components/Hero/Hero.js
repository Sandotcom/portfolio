import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, Button  } from './HeroStyles';

const Hero = ({ inSpanish }) => {
  if(inSpanish) {
    return (
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Hola, soy Santiago
          </SectionTitle>
          <SectionText>
           Bienvenido a mi portfolio! Soy Fullstack Developer, apasionado por el Back-end y por aprender nuevas tecnologías.
          </SectionText>
          <Button href='/assets/Santiago_Trabucco_CV.pdf' target="_blank" download>
            Currículum
          </Button>
        </LeftSection>
      </Section>    
    )
  } else return (    
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, i'm Santiago
        </SectionTitle>
        <SectionText>
          Welcome to my portfolio! I'm a Fullstack Developer, passionate about Back-end development and learning about new technologies.
        </SectionText>
        <Button href='/assets/Santiago_Trabucco_CV.pdf' target="_blank" download>
          Resume
        </Button>
      </LeftSection>
    </Section>
  
  )
}

;

export default Hero;