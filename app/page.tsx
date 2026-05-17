import DecalogSection from '@/components/custom/DecalogSection';
import Footer from '@/components/custom/Footer';
import Hero from '@/components/custom/Hero';
import MissionSection from '@/components/custom/MissionSection';
import StorySection from '@/components/custom/StorySection';

const Page = () => {
  return (
    <>
      <Hero />
      <StorySection />
      <MissionSection />
      <DecalogSection />
      <Footer />
    </>
  );
};

export default Page;
