import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { IoRocketOutline } from 'react-icons/io5';
import { GrLanguage } from 'react-icons/gr'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = ({inSpanish, setInSpanish}) => {
  const handleClick = (e) => {
    setInSpanish((prev) => !prev)
  }

  if(inSpanish){
    return (
      <Container>
        <Div1>
          <Link href='/'>
            <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
              <IoRocketOutline size='3rem'/> <Span> Sandotcom</Span>
            </a>
          </Link>
        </Div1>
        <Div2>
          <li>
            <Link href='#tech'>
              <NavLink>Tecnologías</NavLink>
            </Link>
          </li>
          <li>
            <Link href='#projects'>
              <NavLink>Proyectos</NavLink>
            </Link>
          </li>
          <li>
            <Link href='#about'>
              <NavLink>Acerca</NavLink>
            </Link>
          </li>
        </Div2>
        <Div3>
          <SocialIcons href='https://github.com/Sandotcom'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/in/santiagotrabucco/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <NavLink onClick={handleClick}>
            ESP
          </NavLink>
        </Div3>
      </Container>
    );
  } else return (
    <Container>
      <Div1>
        <Link href='/'>
          <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
            <IoRocketOutline size='3rem'/> <Span> Sandotcom</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href='#tech'>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#projects'>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href='#about'>
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com/Sandotcom'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://linkedin.com/in/santiagotrabucco/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <NavLink onClick={handleClick}>
          ENG
        </NavLink>
      </Div3>
    </Container>
  );
} 

export default Header;