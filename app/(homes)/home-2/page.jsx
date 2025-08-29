import Cta from "@/components/common/Cta";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import HeaderTop2 from "@/components/headers/HeaderTop2";
import About from "@/components/homes/home-2/About";
import Contact from "@/components/homes/home-2/Contact";
import Cta2 from "@/components/homes/home-2/Cta";
import Facts from "@/components/homes/home-2/Facts";
import Hero from "@/components/homes/home-2/Hero";
import Projects from "@/components/homes/home-2/Projects";
import Services from "@/components/homes/home-2/Services";
import Skills from "@/components/homes/home-2/Skills";
import Team from "@/components/homes/home-2/Team";
import Testimonials from "@/components/homes/home-2/Testimonials";
import TextSlider from "@/components/homes/home-2/TextSlider";
import Pricing from "@/components/common/Pricing";
import Faq from "@/components/otherPages/faq/Faq";
import ProjectSlider from "@/components/common/projectslider";
// import VideoBox from "@/components/homes/home-2/VideoBox";
import React from "react";
export const metadata = {
  title: "Home - KZWebSolutions | Custom Software Development & Web Applications",
  description: "KZWebSolutions - Professional software development company specializing in React, Next.js, and modern web technologies. We create scalable, SEO-optimized applications for businesses worldwide.",
};
export default function page() {
  return (
    <>
      <HeaderTop2 />
      <Header2 />
      <main className="main position-relative" id="mains">
        <Hero />
        <Facts />
        <Services />
        <About />
        <Cta2 />
        <Projects />
        {/* <ProjectSlider /> */}
        <TextSlider />
        {/* <VideoBox /> */}
        <Team />
        <Skills />
        {/* <Pricing /> */}
        <Testimonials />
        <Faq />
        <Contact />
        <Cta />
      </main>     
      <Footer1 />
    </>
  );
}
