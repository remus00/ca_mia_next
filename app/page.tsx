import DecalogSection from '@/components/custom/DecalogSection';
import Footer from '@/components/custom/Footer';
import Hero from '@/components/custom/Hero';
import MissionSection from '@/components/custom/MissionSection';
import StorySection from '@/components/custom/StorySection';
import { getSiteUrl } from '@/lib/site-url';

const siteUrl = getSiteUrl();

// Google ricava da qui il nome del sito mostrato sopra l'URL nei risultati di
// ricerca. Va dichiarato solo sulla home page.
const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: "RSA Ca' Mia",
  alternateName: ["Ca' Mia", "R.S.A. Ca' Mia", "Residenza Sanitaria Assistenziale Ca' Mia"],
  url: siteUrl,
  inLanguage: 'it-IT',
  publisher: { '@id': `${siteUrl}/#organization` },
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteJsonLd),
        }}
      />
      <Hero />
      <StorySection />
      <MissionSection />
      <DecalogSection />
      <Footer />
    </>
  );
};

export default Page;
