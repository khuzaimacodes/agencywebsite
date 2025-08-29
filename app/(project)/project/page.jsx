import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import HeaderTop2 from "@/components/headers/HeaderTop2";

import Cta from "@/components/common/Cta";
import Projects from "@/components/otherPages/project/Projects";
import Link from "next/link";
export const metadata = {
  title: "Our Projects Portfolio || KZWebSolutions",
  description: "Explore our diverse portfolio of successful web development projects. From e-commerce platforms to healthcare websites, we bring ideas to life with cutting-edge technology.",
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
                  Our Projects
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
                  <li>Project</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Projects />
        <Cta />
      </main>
      <Footer1 />
    </>
  );
}
