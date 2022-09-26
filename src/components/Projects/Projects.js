import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects, proyectos } from '../../constants/constants';

const Projects = ({ inSpanish }) => {
  if(inSpanish){
    return (
      <Section nopadding id='projects'>
      <SectionDivider />
      <br />
      <SectionTitle>Proyectos</SectionTitle>
      <GridContainer>
        {proyectos.map(({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} alt={title}/>
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source}>Código</ExternalLinks>
              {visit ? <ExternalLinks href={visit}>Visitar</ExternalLinks> : null}
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
    )
  } else return (
    <Section nopadding id='projects'>
      <SectionDivider />
      <br />
      <SectionTitle>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} alt={title}/>
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source}>Code</ExternalLinks>
              {visit ? <ExternalLinks href={visit}>Visit</ExternalLinks> : null}
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
} 

export default Projects;