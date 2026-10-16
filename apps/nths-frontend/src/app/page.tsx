import { DepthGauge } from "@/components/DepthGauge";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Register } from "@/components/sections/Register";
import { Route } from "@/components/sections/Route";
import { Sponsor } from "@/components/sections/Sponsor";
import { Stats } from "@/components/sections/Stats";
import { Venue } from "@/components/sections/Venue";

// One long dive: sections are ordered from the surface down to the seafloor,
// and the background darkens along the depth ramp as you scroll.
export default function Home() {
  return (
    <>
      <Navbar />
      <DepthGauge />
      <main className="bg-linear-to-b from-shallow via-deep via-30% to-abyss">
        <Hero />
        <Stats />
        <About />
        <Route />
        <Venue />
        <Faq />
        <Sponsor />
        <Register />
      </main>
      <Footer />
    </>
  );
}
