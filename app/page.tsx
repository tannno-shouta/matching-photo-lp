import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { PainPoints } from '@/components/sections/PainPoints';
import { WhyPhotosMatter } from '@/components/sections/WhyPhotosMatter';
import { Reason } from '@/components/sections/Reason';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { Portfolio } from '@/components/sections/Portfolio';
import { Location } from '@/components/sections/Location';
import { Flow } from '@/components/sections/Flow';
import { Photographer } from '@/components/sections/Photographer';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { Safety } from '@/components/sections/Safety';
import { FAQ } from '@/components/sections/FAQ';
import { BottomCTA } from '@/components/sections/BottomCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <WhyPhotosMatter />
        <Reason />
        <BeforeAfter />
        <Portfolio />
        <Location />
        <Flow />
        <Photographer />
        <Testimonials />
        <Pricing />
        <Safety />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
