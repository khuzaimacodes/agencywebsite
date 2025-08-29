import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import HeaderTop2 from "@/components/headers/HeaderTop2";

import Contact from "@/components/otherPages/contact/Contact";
import Map from "@/components/otherPages/contact/Map";
import Link from "next/link";
export const metadata = {
  title: "Contact Us - KZWebSolutions | Custom Software Development & Web Applications",
  description: "Get in touch with KZWebSolutions for professional software development services. Contact us for web design, development, AI solutions, and more. We're here to help bring your digital vision to life.",
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
              <div className="page-heading py-40">
                <h1 className="wow fadeInUp mb-15" data-wow-delay=".3s">
                  Contact
                </h1>
                <ul
                  className="breadcrumb-items wow fadeInUp mb-0"
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
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Map />
      </main>
      <Footer1 />
    </>
  );
}
