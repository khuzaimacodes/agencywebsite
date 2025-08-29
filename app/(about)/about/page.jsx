import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import HeaderTop2 from "@/components/headers/HeaderTop2";

import Cta from "@/components/common/Cta";
import About from "@/components/homes/home-2/About";
import Services from "@/components/homes/home-2/Services";
import VideoBox from "@/components/homes/home-2/VideoBox";
import Team from "@/components/homes/home-2/Team";
import AboutCta from "@/components/otherPages/AboutCta";
import Testimonials from "@/components/homes/home-2/Testimonials";
import Link from "next/link";
export const metadata = {
  title: "About Us - KZWebSolutions | Custom Software Development & Web Applications",
  description: "KZWebSolutions - Professional software development company specializing in React, Next.js, and modern web technologies. We create innovative digital solutions for businesses worldwide.",
};
export default function Page() {
  return (
    <>
      <HeaderTop2 />
      <Header2 />
      <main className="main position-relative" id="mains">
        <div className="breadcrumb-wrapper">
          <div
            className="breadcumb"
            data-bg-src=""
            style={{ backgroundImage: "url(/assets/img/hero/breadcumbBg.png)" }}
          >
            <div className="container">
              <div className="page-heading">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  About Us
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link scroll={false} href={`/`}>
                      {" "}
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-chevrons-right" />
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <About />
        <Services />
        {/* <VideoBox /> */}
        <Team />
        <AboutCta />
        <Testimonials />
        <div className="pb-300"></div>

        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
