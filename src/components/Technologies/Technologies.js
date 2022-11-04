import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = ({ inSpanish }) => {
  
  if(inSpanish){
    return (
      <Section id='tech'>
      <SectionDivider />
      <br />
      <SectionTitle>Tecnologías</SectionTitle>
      <SectionText>
        Trabajo con tecnologías que me permiten desenvolverme tanto en el Front-end como en el Back-end
      </SectionText>
      <List>
        <ListItem>
          <DiReact size='3rem' />
          <br/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experiencia con <br />
              React.js <br />
              Next.js <br />
              React Query <br />
              Redux <br />
              Tailwind CSS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size='3rem' />
          <br/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experiencia con <br />
              Node.js <br />
              Express <br />
              MongoDB <br />
              Sequelize <br />
              PostgreSQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
    )
  } else return (
    <Section id='tech'>
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with technologies that allow me to work on the Front-end as well as on the Back-end
      </SectionText>
      <List>
        <ListItem>
          <DiReact size='3rem' />
          <br/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js <br />
              Next.js <br />
              React Query <br />
              Redux <br />
              Tailwind CSS
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size='3rem' />
          <br/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js <br />
              Express <br />
              MongoDB <br />
              Sequelize <br />
              PostgreSQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
} 

export default Technologies;