import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, Button  } from './HeroStyles';

const Hero = (props) => (
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
);

export default Hero;