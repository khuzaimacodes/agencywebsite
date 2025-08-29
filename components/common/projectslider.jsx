"use client";

import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects1 } from "@/data/projects";

const ProjectSlider = () => {
  return (
    <div className="project-wrapper" style={{ padding: "40px 0" }}>
      <Swiper {...sliderProps.projectSlider} className="swiper project-slider">
        <div className="swiper-wrapper">
          {projects1.map((item) => (
            <SwiperSlide className="swiper-slide" key={item.id}>
              <div className="project-box-items" style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                backgroundColor: "#fff",
                transition: "all 0.3s ease"
              }}>
                {/* Image Container with Aspect Ratio */}
                <div className="project-image-container" style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  backgroundColor: "#f8f9ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  cursor: "pointer"
                }}>
                  <Link
                    href={`/project-details/${item.id}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                      textDecoration: "none"
                    }}
                  >
                    <img 
                      src={item.imgSrc} 
                      alt={`${item.title} project showcase`}
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                        borderRadius: "8px",
                        border: "2px solid rgba(139, 92, 246, 0.1)",
                        boxShadow: "0 4px 16px rgba(139, 92, 246, 0.1)",
                        transition: "all 0.3s ease"
                      }}
                    />
                  </Link>
                </div>
                
                {/* Content Overlay */}
                <div className="project-content" style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: "linear-gradient(135deg, rgba(56, 75, 255, 0.95) 0%, rgba(180, 42, 243, 0.95) 100%)",
                  color: "white",
                  padding: "24px",
                  transform: "translateY(100%)",
                  transition: "transform 0.3s ease"
                }}>
                  <p style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    opacity: "0.9",
                    margin: "0 0 8px 0",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>{item.category}</p>
                  <h3 style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    margin: "0 0 16px 0",
                    lineHeight: "1.4"
                  }}>
                    <Link 
                      href={`/project-details/${item.id}`}
                      className="project-title-link"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        transition: "opacity 0.2s ease"
                      }}
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <Link
                    href={`/project-details/${item.id}`}
                    className="project-arrow-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      color: "white",
                      textDecoration: "none",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div className="swiper-dot pt-5 text-center">
          <div className="dot" />
        </div>
      </Swiper>
      
      {/* Custom Styles for Hover Effect */}
      <style jsx>{`
        .project-box-items:hover .project-content {
          transform: translateY(0) !important;
        }
        .project-box-items:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2) !important;
        }
        
        /* Project title link hover effects */
        .project-title-link:hover {
          opacity: 0.8 !important;
        }
        
        /* Project arrow link hover effects */
        .project-arrow-link:hover {
          background-color: rgba(255, 255, 255, 0.3) !important;
          transform: scale(1.1) !important;
        }
        
        /* Mobile-specific hover effects - much smaller and more appropriate */
        @media (max-width: 1024px) {
          .project-box-items:hover {
            transform: translateY(-4px) !important;
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15) !important;
          }
          
          .project-image-container {
            aspect-ratio: 16/11 !important;
            padding: 18px !important;
          }
          
          .project-content {
            padding: 20px !important;
          }
        }
        
        @media (max-width: 768px) {
          .project-image-container {
            aspect-ratio: 16/10 !important;
            padding: 16px !important;
          }
          .project-content {
            padding: 18px !important;
          }
          .project-box-items {
            margin: 0 8px !important;
            border-radius: 12px !important;
          }
          .swiper-slide {
            padding: 0 4px !important;
          }
          
          /* Mobile hover effects - very subtle */
          .project-box-items:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12) !important;
          }
          
          .project-box-items:hover .project-content {
            transform: translateY(0) !important;
          }
        }
        
        @media (max-width: 480px) {
          .project-image-container {
            aspect-ratio: 3/2 !important;
            padding: 12px !important;
          }
          .project-content {
            padding: 16px !important;
          }
          .project-box-items {
            margin: 0 12px !important;
            border-radius: 10px !important;
          }
          .swiper-slide {
            padding: 0 6px !important;
          }
          
          /* Very small screens - minimal hover effects */
          .project-box-items:hover {
            transform: translateY(-1px) !important;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1) !important;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .project-box-items:hover {
            transform: none !important;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;
          }
          
          .project-box-items:active {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
          }
          
          .project-box-items:active .project-content {
            transform: translateY(0) !important;
          }
        }
      `}</style>
    </div>
  );
};
export default ProjectSlider;
