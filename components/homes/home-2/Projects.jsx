"use client";

import { projects1 } from "@/data/projects";
import Link from "next/link";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Projects() {
  const swiperOptions = {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 1000,

         breakpoints: {
       0: { 
         slidesPerView: 1, 
         spaceBetween: 15,
         centeredSlides: true,
         initialSlide: 0
       },
       576: { 
         slidesPerView: 1, 
         centeredSlides: true, 
         spaceBetween: 20,
         initialSlide: 0
       },
       768: { 
         slidesPerView: 2, 
         spaceBetween: 25,
         centeredSlides: false,
         initialSlide: 0
       },
       992: { 
         slidesPerView: 3, 
         spaceBetween: 30,
         centeredSlides: false,
         initialSlide: 0
       },
       1200: { 
         slidesPerView: 4, 
         spaceBetween: 30,
         centeredSlides: false,
         initialSlide: 0
       },
     },
    modules: [Navigation, Autoplay],
    navigation: {
      prevEl: ".snbp1",
      nextEl: ".snbn1",
    },
  };
  return (
    <section className="project-area fix">
      <div
        className="project-wrap pt-225 pb-230 fix"
        data-bg-src=""
        style={{ backgroundImage: "url(/assets/img/bg/portfolioBg2_1.png)" }}
      >
        <div className="container">
          <div className="title-area mx-auto">
            <h5
              className="subtitle text-center wow fadeInUp"
              data-wow-delay=".3s"
            >
              <span>
                <Image
                  alt="icon"
                  src="/assets/img/icon/titleIcon.png"
                  width="28"
                  height="12"
                />
              </span>{' '}
              Recently Worked{' '}
              <span>
                <Image
                  alt="icon"
                  src="/assets/img/icon/titleIcon.png"
                  width="28"
                  height="12"
                />
              </span>
            </h5>
            <h2
              className="title text-center text-white mb-50 wow fadeInUp"
              data-wow-delay=".6s"
            >
              Latest projects from <br />
              KZWebSolutions
            </h2>
          </div>
        </div>
      </div>
      <div className="project-wrap style2 fix">
        <div className="container">
          <div className="slider-area project-slider2">
            <Swiper
              // spaceBetween={30}
              className="swiper gt-slider"
              // style={{ overflow: "clip" }}
              id="projectSlider2"
              {...swiperOptions}
            >
              {projects1.map((slide) => (
                <SwiperSlide className="swiper-slide" key={slide.id}>
                  <div className="project-card style1 img-shine" style={{
                    position: "relative",
                    borderRadius: "20px",
                    overflow: "hidden",
                    backgroundColor: "#fff",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.4s ease"
                  }}>
                    {/* Modern Image Container */}
                    <div className="project-img-modern" style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "4/3",
                      overflow: "hidden",
                      background: "linear-gradient(135deg, #f8f9ff 0%, #e8edff 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "24px",
                      cursor: "pointer"
                    }}>
                      <Link
                        scroll={false}
                        href={`/project-details/${slide.id}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                          textDecoration: "none"
                        }}
                      >
                        <Image
                          src={slide.imgSrc}
                          width={400}
                          height={300}
                          alt={`${slide.title} project showcase`}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "auto",
                            height: "auto",
                            objectFit: "contain",
                            borderRadius: "12px",
                            border: "3px solid rgba(139, 92, 246, 0.2)",
                            boxShadow: "0 8px 24px rgba(139, 92, 246, 0.15)",
                            transition: "all 0.3s ease"
                          }}
                        />
                      </Link>
                    </div>
                    
                    {/* Enhanced Overlay Content */}
                    <div className="fancy-box style2" style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      background: "linear-gradient(135deg, rgba(56, 75, 255, 0.95) 0%, rgba(180, 42, 243, 0.95) 100%)",
                      backdropFilter: "blur(10px)",
                      color: "white",
                      padding: "28px 24px",
                      transform: "translateY(100%)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    }}>
                      <p style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        opacity: "0.9",
                        margin: "0 0 8px 0",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        color: "rgba(255, 255, 255, 0.9)"
                      }}>{slide.category}</p>
                      
                      <h4 style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        margin: "0 0 20px 0",
                        lineHeight: "1.3",
                        color: "white"
                      }}>
                        <Link
                          scroll={false}
                          href={`/project-details/${slide.id}`}
                          style={{
                            color: "white",
                            textDecoration: "none",
                            transition: "all 0.2s ease"
                          }}
                        >
                          {slide.title}
                        </Link>
                      </h4>
                      
                      {/* Live Website Button */}
                      {slide.websiteUrl && (
                        <div style={{ marginBottom: "20px" }}>
                          <a 
                            href={slide.websiteUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="live-website-link"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "8px",
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                              color: "white",
                              padding: "10px 16px",
                              borderRadius: "6px",
                              textDecoration: "none",
                              fontWeight: "600",
                              fontSize: "14px",
                              transition: "all 0.3s ease",
                              border: "1px solid rgba(255, 255, 255, 0.3)"
                            }}
                          >
                            <i className="fa-solid fa-external-link-alt" />
                            Visit Live Site
                          </a>
                        </div>
                      )}
                      
                      <Link
                        scroll={false}
                        href={`/project-details/${slide.id}`}
                        className="arrow-icon"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "48px",
                          height: "48px",
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          borderRadius: "50%",
                          color: "white",
                          fontSize: "16px",
                          textDecoration: "none",
                          border: "2px solid rgba(255, 255, 255, 0.3)",
                          transition: "all 0.3s ease"
                        }}
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      
      {/* Modern Hover Effects and Responsive Styles */}
      <style jsx>{`
        .project-card:hover .fancy-box {
          transform: translateY(0) !important;
        }
        .project-card:hover {
          transform: translateY(-12px) !important;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25) !important;
        }
        .project-card:hover .project-img-modern img {
          transform: scale(1.05);
          border-color: rgba(139, 92, 246, 0.4) !important;
        }
        .project-card:hover .arrow-icon {
          background-color: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
          transform: scale(1.1);
        }
        
        /* Live website link hover effects */
        .live-website-link:hover {
          background-color: rgba(255, 255, 255, 0.3) !important;
          transform: translateY(-1px) !important;
        }
        
        /* Mobile-specific hover effects - much smaller and more appropriate */
        @media (max-width: 1024px) {
          .project-img-modern {
            aspect-ratio: 16/11 !important;
            padding: 20px !important;
          }
          
          .project-card:hover {
            transform: translateY(-6px) !important;
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18) !important;
          }
          
          .project-card:hover .project-img-modern img {
            transform: scale(1.02);
          }
          
          .project-card:hover .arrow-icon {
            transform: scale(1.05);
          }
        }
        
        @media (max-width: 768px) {
          .project-img-modern {
            aspect-ratio: 16/10 !important;
            padding: 16px !important;
          }
          .fancy-box {
            padding: 24px 20px !important;
          }
          .project-card {
            border-radius: 16px !important;
            margin: 0 10px !important;
          }
          .swiper-slide {
            padding: 0 5px !important;
          }
          
          /* Mobile hover effects - very subtle */
          .project-card:hover {
            transform: translateY(-4px) !important;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
          }
          
          .project-card:hover .project-img-modern img {
            transform: scale(1.01);
          }
          
          .project-card:hover .arrow-icon {
            transform: scale(1.02);
          }
        }
        
        @media (max-width: 480px) {
          .project-img-modern {
            aspect-ratio: 3/2 !important;
            padding: 12px !important;
          }
          .fancy-box {
            padding: 20px 16px !important;
          }
          .project-card {
            border-radius: 12px !important;
            margin: 0 15px !important;
          }
          .swiper-slide {
            padding: 0 8px !important;
          }
          
          /* Very small screens - minimal hover effects */
          .project-card:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12) !important;
          }
          
          .project-card:hover .project-img-modern img {
            transform: scale(1.005);
          }
          
          .project-card:hover .arrow-icon {
            transform: scale(1.01);
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .project-card:hover {
            transform: none !important;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15) !important;
          }
          
          .project-card:hover .project-img-modern img {
            transform: none;
          }
          
          .project-card:hover .arrow-icon {
            transform: none;
          }
          
          .project-card:active {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2) !important;
          }
        }
      `}</style>
    </section>
  );
}
