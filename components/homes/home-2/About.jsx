"use client";
import Link from "next/link";
import Image from "next/image";
// import ModalVideo from "react-modal-video";
import { useState } from "react";

export default function About() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="about-area">
        <div
          className="about-wrap style2 space-top pb-233 fix fix position-reltive"
          data-bg-src=""
          style={{ backgroundImage: "url(/assets/img/bg/aboutBg2_1.png)" }}
        >
          <div className="shape1_1 d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/aboutShape1_1.png"
              width="270"
              height="733"
            />
          </div>
          <div className="shape1_2 movingX d-xl-block d-none">
            <Image
              alt="shape"
              src="/assets/img/shape/aboutShape1_2.png"
              width="188"
              height="275"
            />
          </div>
          <div className="container">
            <div className="about-wrapper style2">
              <div
                className="about-thumb-box wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="about-thumb-box about-thumb1">
                  <Image
                    alt="thumb"
                    src="/assets/img/about/aboutThumb2_1.png"
                    width="682"
                    height="561"
                  />
                  <a
                    onClick={() => setOpen(true)}
                    className="play-btn style4 popup-video"
                  >
                    <i className="fa-sharp fa-solid fa-play" />
                  </a>
                </div>
                <div className="about-thumb-box line jump" />
              </div>
              <div
                className="about-content wow fadeInRight"
                data-wow-delay="1s"
              >
                <div className="title-area">
                  <h5 className="subtitle text-start">
                    <span>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIcon.png"
                        width="28"
                        height="12"
                      />
                    </span>{' '}
                    About us KZWebSolutions{' '}
                    <span>
                      <Image
                        alt="icon"
                        src="/assets/img/icon/titleIcon.png"
                        width="28"
                        height="12"
                      />
                    </span>
                  </h5>
                  <h2 className="title text-start">
                    We Deliver Custom Software Solutions That Drive Business Growth
                  </h2>
                  <p className="text">
                    We are a team of passionate software engineers, designers, and technology experts dedicated to building innovative digital solutions. With expertise in React, Next.js, and modern web technologies, we create scalable applications that help businesses thrive in the digital age.
                  </p>
                  
                  {/* Additional Stats */}
                  <div className="additional-stats mt-4 mb-4">
                    <div className="row g-3">
                      <div className="col-6">
                        <div className="stat-item d-flex align-items-center">
                          <div className="stat-icon me-2">
                            <i className="fa-solid fa-rocket" style={{ color: "#384bff", fontSize: "20px" }}></i>
                          </div>
                          <div className="stat-content">
                            <div className="stat-number" style={{ fontWeight: "700", fontSize: "18px", color: "#384bff" }}>99.9%</div>
                            <div className="stat-label" style={{ fontSize: "14px", color: "#726b7d" }}>Uptime</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="stat-item d-flex align-items-center">
                          <div className="stat-icon me-2">
                            <i className="fa-solid fa-clock" style={{ color: "#b42af3", fontSize: "20px" }}></i>
                          </div>
                          <div className="stat-content">
                            <div className="stat-number" style={{ fontWeight: "700", fontSize: "18px", color: "#b42af3" }}>24/7</div>
                            <div className="stat-label" style={{ fontSize: "14px", color: "#726b7d" }}>Support</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fancy-box-wrapper">
                  <div className="fancy-box">
                    <div className="checklist mt-0 mb-0">
                      <ul className="ps-0">
                        <li>
                          <Image
                            alt="icon"
                            src="/assets/img/icon/signIcon.png"
                            width="16"
                            height="16"
                          />
                        </li>
                                                 <li>Full-Stack Development Solutions</li>
                       </ul>
                       <ul className="ps-0">
                         <li>
                           <Image
                             alt="icon"
                             src="/assets/img/icon/signIcon.png"
                             width="16"
                             height="16"
                           />
                         </li>
                         <li>React & Next.js Applications</li>
                       </ul>
                       <ul className="ps-0">
                         <li>
                           <Image
                             alt="icon"
                             src="/assets/img/icon/signIcon.png"
                             width="16"
                             height="16"
                           />
                         </li>
                         <li>Cloud & DevOps Services</li>
                      </ul>
                    </div>
                  </div>
                  <div className="fancy-box d-flex justify-content-start justify-content-md-end">
                    <div className="counter-box style1">
                      <div className="counter-box_icon">
                        <Image
                          alt="icon"
                          src="/assets/img/icon/aboutIcon1_1.png"
                          width="52"
                          height="52"
                        />
                      </div>
                      <div className="counter-box_counter">
                                                 <div>
                           <span className="counter-number">500</span>
                           <span className="plus">+</span>
                         </div>
                         <span>Happy Customers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-wrapper">
                  <Link
                    scroll={false}
                    href={`/contact`}
                    className="gt-btn gt-btn-icon"
                  >
                    EXPLORE MORE
                  </Link>
                  <div className="fancy-box style1">
                    <div className="fancy-box_icon">
                                             <Image
                         alt="img"
                         src="/assets/img/team/TechLead.jpeg"
                         width="56"
                         height="56"
                       />
                     </div>
                     <div className="fancy-box_content">
                       <h4>Khuzaima Afzal</h4>
                       <span>Founder & Tech Lead</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        // videoId="f2Gzr8sAGB8"
        onClose={() => setOpen(false)}
      /> */}
    </>
  );
}
