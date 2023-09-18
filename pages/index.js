'use client'
import { getLandingPage } from '../lib/api'

import Hero from '../components/Hero'
import Cards from '../components/Cards'
import ContentBlock from '../components/ContentBlock'
import Carousel from '../components/Carousel'
import Text from '../components/Text'
import ContactForm from '../components/ContactForm'
import CTA from '../components/CTA'

export default function Index({preview, allPosts}) {
  const landingPage = allPosts[0];

  return (
    <>
      <Hero title={landingPage.mainTitle} subtitle={landingPage.subtitle}/>
      <Cards />
      <ContentBlock />
      <Carousel />
      <Text />
      <ContactForm />
      <CTA />
    </>
  )
}

export const getStaticProps = async ({ preview = false }) => {
    const allPosts = (await getLandingPage(preview)) ?? [];
    return {
      props: { preview, allPosts },
    };
  };