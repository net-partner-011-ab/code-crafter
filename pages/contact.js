import { getContactPage } from "../lib/api";

import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import CTA from "../components/CTA";

export default function Contact({ preview, allData }) {
  const contactPage = allData[0];

  return (
    <>
      <Hero 
        title={contactPage.title} 
        subtitle={contactPage.subtitle}
        heroClass="is-primary" 
      />
      <ContactForm items={contactPage.iconsListCollection.items} />
      <CTA />
    </>
  );
}

export const getStaticProps = async ({ preview = false }) => {
  const allData = (await getContactPage(preview)) ?? [];
  return {
    props: { preview, allData },
  };
};
