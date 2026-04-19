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
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
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
        <Testimonials />
        <Pricing />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
