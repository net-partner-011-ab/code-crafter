'use client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import ContentBlock from '../components/ContentBlock'
import Carousel from '../components/Carousel'
import Text from '../components/Text'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <ContentBlock />
      <Carousel />
      <Text />
      <CTA />
      <Footer />
    </>
  )
}
