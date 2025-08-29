"use client";

import { projectItems } from "@/data/projects";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-grid">
          {projectItems.slice(0, 6).map((item, index) => (
            <article 
              key={item.id} 
              className="portfolio-card" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-media">
                <Link 
                  href={`/project-details/${item.id}`}
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    textDecoration: "none"
                  }}
                >
                  <Image
                    src={item.imgSrc}
                    width={480}
                    height={300}
                    alt={`${item.title} - ${item.category} project`}
                    className="portfolio-image"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </Link>
              </div>
              
              <div className="portfolio-content">
                <div className="portfolio-tags">
                  <span className="portfolio-tag">{item.category}</span>
                </div>
                
                <h3 className="portfolio-title">{item.title}</h3>
                
                <Link 
                  href={`/project-details/${item.id}`} 
                  className="portfolio-link"
                  aria-label={`View ${item.title} case study`}
                >
                  View case study →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .portfolio-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }

        .portfolio-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .portfolio-card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
        }

        .portfolio-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #c7d2fe;
        }

        .portfolio-card:focus-within {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
        }

        .portfolio-media {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: #f1f5f9;
        }

        .portfolio-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .portfolio-card:hover .portfolio-image {
          transform: scale(1.03);
        }

        /* Enhanced clickable image effects */
        .portfolio-media a {
          display: block;
          width: 100%;
          height: 100%;
          transition: all 0.3s ease;
        }

        .portfolio-media a:hover .portfolio-image {
          transform: scale(1.05);
        }

        .portfolio-media a:active .portfolio-image {
          transform: scale(1.02);
        }

        .portfolio-content {
          padding: 24px;
        }

        .portfolio-tags {
          margin-bottom: 12px;
        }

        .portfolio-tag {
          display: inline-block;
          background: #f1f5f9;
          color: #475569;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .portfolio-title {
          font-size: 20px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .portfolio-link {
          display: inline-flex;
          align-items: center;
          color: #6366f1;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
        }

        .portfolio-link:hover {
          color: #4338ca;
          transform: translateX(2px);
        }

        .portfolio-link:focus {
          outline: 2px solid #6366f1;
          outline-offset: 4px;
          border-radius: 4px;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1280px) {
          .portfolio-grid {
            gap: 28px;
          }
        }

        @media (max-width: 768px) {
          .portfolio-section {
            padding: 80px 0;
          }
          
          .container {
            padding: 0 20px;
          }
          
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .portfolio-section {
            padding: 60px 0;
          }
          
          .container {
            padding: 0 16px;
          }
          
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .portfolio-content {
            padding: 20px;
          }
          
          .portfolio-title {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}