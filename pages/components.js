import { getSubpage } from "../lib/api";

import Hero from "../components/Hero";
import Text from "../components/Text";
import ContentBlock from "../components/ContentBlock";
import CTA from "../components/CTA";
import Cards from "../components/Cards";
import ImageCarousel from "../components/Carousel";
import ContactForm from "../components/ContactForm";

export default function Components({ preview, allData }) {
  const subPage = allData[0];

  return (
    <>
      <Hero 
        title={subPage.title} 
        subtitle={subPage.subtitle}
        heroClass="is-medium is-success" 
      />
      <Text 
        title={subPage.textTitle}  
        paragraph={subPage.textParagraph} 
      />
      <ContentBlock
        title={subPage.contentBlockTitle}
        subtitle={subPage.contentBlockSubtitle}
        description={subPage.contentBlockText.json}
      />
      <CTA />
      <Cards items={subPage.cardsListCollection.items} />
      <ImageCarousel
        title={subPage.carouselTitle}
        subtitle={subPage.carouselSubtitle}
        items={subPage.carouselImagesCollection.items}
      />
      <ContactForm items={subPage.iconsListCollection.items}/>
    </>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const allData = (await getSubpage(preview)) ?? [];
  return {
    props: { preview, allData },
  };
};
