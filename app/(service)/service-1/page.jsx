import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import HeaderTop2 from "@/components/headers/HeaderTop2";

import Cta from "@/components/common/Cta";
import Services from "@/components/otherPages/service/Services";
import TextSlider from "@/components/homes/home-2/TextSlider";
import VideoBox from "@/components/homes/home-2/VideoBox";
import Team from "@/components/homes/home-2/Team";
import Link from "next/link";
export const metadata = {
  title: "Services - KZWebSolutions | Custom Software Development & Web Applications",
  description: "KZWebSolutions - Professional software development services including React, Next.js, web applications, and custom software solutions. We create scalable, SEO-optimized applications for businesses worldwide.",
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
                  Services
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
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Services/>
        <TextSlider />
        {/* <VideoBox /> */}
        <Team />
        <div className="pb-300"></div>

        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
