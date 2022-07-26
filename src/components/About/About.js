import React from 'react';
import { Section, SectionText, SectionTitle, SectionDivider, SectionSubText } from '../../styles/GlobalComponents';

const About = (props) => {
  return (
    <Section id='about'>
      <SectionDivider />
      <br/>
      <SectionTitle>
        About me
      </SectionTitle>
      <SectionSubText>
        I am a Full Stack Developer and an advanced student in a five year course of study in Business Administration and Management.
        <br/>
        <br/>
        I am looking for my first job as a developer. I have experience working with NodeJS, React, Redux and MongoDB, among other technologies in this area. I have an outstanding capacity to combine my technical and soft skills with my knowledge, all of which I acquired at university. I have acquired a personal capacity for action on uncertain scenarios, for adaptation to new situations and to team work.
        <br/>
        <br/>
        I am currently looking forward to joining a technological development company, so I can put my professionalism and qualifications to work, while also having the possibility to grow and enhance my skills.
      </SectionSubText>
    </Section>
  )
}

export default About