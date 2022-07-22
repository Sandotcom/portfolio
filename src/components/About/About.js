import React from 'react';
import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';

const About = (props) => {
  return (
    <Section id='about'>
      <SectionDivider />
      <br/>
      <SectionTitle>
        About Me
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique ornare dictum. Nulla elit erat, cursus eu ornare eget, fermentum sed dolor. Cras imperdiet metus vel mollis elementum. Fusce laoreet ante a pellentesque hendrerit. Nulla et orci vel sapien finibus tempor ut quis erat. Duis accumsan libero tellus, hendrerit porta leo mollis at.
      </SectionText>
    </Section>
  )
}

export default About