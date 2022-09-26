import Head from 'next/head';
import { useState } from 'react';
import About from '../components/About/About';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  const [inSpanish, setInSpanish] = useState(true)

  return (
    <>
    <Head>
      <title>Santiago Trabucco Portfolio</title>
    </Head>
    <Layout inSpanish={inSpanish} setInSpanish={setInSpanish}>
      <Section grid>
        <Hero inSpanish={inSpanish} />
        <BgAnimation />
      </Section>
      <Technologies inSpanish={inSpanish} />
      <Projects inSpanish={inSpanish} />
      <About inSpanish={inSpanish} />
    </Layout>
    </>
  );
};

export default Home;