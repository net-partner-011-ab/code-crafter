'use client'
import { getLandingPage } from '../lib/api'

import Hero from '../components/Hero'
import Cards from '../components/Cards'
import ContentBlock from '../components/ContentBlock'
import Carousel from '../components/Carousel'
import CTA from '../components/CTA'

export default function Index({preview, allData}) {
  const landingPage = allData[0];

  return (
    <>
      <Hero 
        title={landingPage.mainTitle} 
        subtitle={landingPage.subtitle}
        heroLogo={landingPage.heroLogo.url}
        logos={landingPage.techLogosCollection.items}
        heroClass="is-medium is-black"
      />
      <Cards 
        items={landingPage.cardsListCollection.items}
      />
      <ContentBlock 
        title={landingPage.contentBlockTitle}
        subtitle={landingPage.contentBlockSubtitle}
        description={landingPage.contentBlockText.json}
      />
      <Carousel 
        items={landingPage.carouselImagesCollection.items}
      />
      <CTA />
    </>
  )
}

export const getStaticProps = async ({ preview = false }) => {
    const allData = (await getLandingPage(preview)) ?? [];
    return {
      props: { preview, allData },
    };
  };