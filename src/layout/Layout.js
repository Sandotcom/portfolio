import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children, inSpanish, setInSpanish }) => {
  return (
    <Container>
     <Header inSpanish={inSpanish} setInSpanish={setInSpanish} />
     <main>{children}</main> 
     <Footer inSpanish={inSpanish} />
    </Container>
  )
}