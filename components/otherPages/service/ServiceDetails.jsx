"use client";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { hours, sericeCategories } from "@/data/services";
import Faq1 from "../faq/Faq1";
export default function ServiceDetails({ serviceItem }) {
  const overview = serviceItem.overview || [];
  const benefits = serviceItem.benefits || [];
  const gallery = serviceItem.gallery || [];
  const faqs = serviceItem.faqs || [];
  const heroImage = serviceItem.heroImage || "/assets/img/service/serviceThumb3_1.png";
  const isExternal = (url) => typeof url === "string" && url.startsWith("http");
  return (
    <>
      {faqs.length > 0 && (
        <Script id="faq-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </Script>
      )}
      <section className="service-details-section space-top pb-425 fix">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-4">
              <div className="col-12 col-lg-4 order-2 order-md-1">
                <div className="main-sidebar">
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="wid-title">
                      <h3>All Services</h3>
                    </div>
                    <div className="news-widget-categories">
                      <ul>
                        {sericeCategories.map((item, index) => (
                          <li
                            key={index}
                            className={item.active ? "active" : ""}
                          >
                            <Link scroll={false} href={`/service-details/${item.id}`}>
                              {item.label}
                              <span>
                                <i className="fa-light fa-arrow-right-long" />
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="single-sidebar-widget wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="wid-title">
                      <h3>Business Hours & Support</h3>
                    </div>
                    <div className="opening-category">
                      <ul>
                        {hours.map((hour, index) => (
                          <li key={index}>
                            <i className={hour.iconClass} />
                            {hour.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="single-sidebar-image bg-cover wow fadeInUp"
                    data-wow-delay="1s"
                    data-bg-src=""
                    style={{
                      backgroundImage:
                        "url(/assets/img/service/serviceThumb3_5.png)",
                    }}
                  >
                    <div className="contact-text">
                      <div className="icon">
                        <i className="fa-solid fa-phone" />
                      </div>
                      <h4>Get Expert Support</h4>
                      <h5>
                        <a href="tel:+447575842908">+44 7575 842908</a>
                      </h5>
                      <p className="text-white-50 mb-0">24/7 Technical Assistance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 order-1 order-md-2">
                <div className="service-details-items">
                  <div className="details-image">
                    {isExternal(heroImage) ? (
                      <img src={heroImage} alt="img" width={770} height={470} style={{ width: "100%", height: "auto" }} />
                    ) : (
                      <Image alt="img" src={heroImage} width={770} height={470} />
                    )}
                  </div>
                  <div className="details-content">
                    <h3 className="wow fadeInUp" data-wow-delay=".6s">
                      {serviceItem.title}
                    </h3>
                    {overview.length > 0 ? (
                      overview.map((para, idx) => (
                        <p
                          key={idx}
                          className="mt-3 wow fadeInUp"
                          data-wow-delay={`${0.9 + idx * 0.3}s`}
                        >
                          {para}
                        </p>
                      ))
                    ) : (
                      <p className="mt-3 wow fadeInUp" data-wow-delay=".9s">
                        We craft tailored solutions aligned to your business
                        goals using modern, secure and scalable technology.
                      </p>
                    )}
                                                              {benefits.length > 0 && (
                        <div className="benefits-section wow fadeInUp" data-wow-delay="1.3s">
                          <h4 className="mb-4">Key Benefits & Features</h4>
                          <div className="row g-4">
                            {benefits.map((b, idx) => (
                              <div className="col-lg-6" key={idx}>
                                <div className="benefit-item d-flex align-items-start">
                                  <div className="benefit-icon me-3">
                                    <i className="fa-regular fa-circle-check text-primary" />
                                  </div>
                                  <div className="benefit-content">
                                    <p className="mb-0">{b}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Additional Content Section */}
                      <div className="additional-content-section wow fadeInUp" data-wow-delay="1.5s">
                        <div className="row g-4 mt-5">
                          <div className="col-lg-6">
                            <div className="content-card">
                              <div className="card-icon mb-3">
                                <i className="fa-solid fa-rocket text-primary" style={{fontSize: '2rem'}}></i>
                              </div>
                              <h5 className="mb-3">Why Choose Our Service?</h5>
                              <p className="mb-0">
                                We deliver cutting-edge solutions with proven methodologies, ensuring your project 
                                exceeds expectations. Our team combines technical expertise with creative innovation 
                                to create solutions that drive real business value.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="content-card">
                              <div className="card-icon mb-3">
                                <i className="fa-solid fa-shield-halved text-primary" style={{fontSize: '2rem'}}></i>
                              </div>
                              <h5 className="mb-3">Quality Assurance</h5>
                              <p className="mb-0">
                                Every project undergoes rigorous testing and quality checks. We maintain the highest 
                                standards in code quality, performance optimization, and security protocols to ensure 
                                your solution is robust and reliable.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="row g-4 mt-4">
                          <div className="col-lg-12">
                            <div className="content-card">
                              <div className="card-icon mb-3">
                                <i className="fa-solid fa-users text-primary" style={{fontSize: '2rem'}}></i>
                              </div>
                              <h5 className="mb-3">Expert Team & Support</h5>
                              <p className="mb-0">
                                Our experienced development team brings years of industry expertise to every project. 
                                We provide ongoing support and maintenance, ensuring your solution continues to perform 
                                optimally and adapts to your evolving business needs.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    {overview.length === 0 && (
                      <p className="mb-40 wow fadeInUp" data-wow-delay="1.5s">
                        Our team ships maintainable solutions with measurable
                        impact, backed by transparent process and fast
                        communication.
                      </p>
                    )}
                    <div
                      className="image-area wow fadeInUp"
                      data-wow-delay="1.6s"
                    >
                      <div className="row g-4">
                        {(gallery.length ? gallery : [
                          "/assets/img/service/serviceThumb3_3.png",
                          "/assets/img/service/serviceThumb3_4.png",
                        ]).slice(0,2).map((img, idx) => (
                          <div className="col-lg-6 col-md-6" key={idx}>
                            <div className="thumb">
                              {isExternal(img) ? (
                                <img src={img} alt="img" width={370} height={307} style={{ width: "100%", height: "auto" }} />
                              ) : (
                                <Image alt="img" src={img} width={370} height={307} />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <h3 className="wow fadeInUp" data-wow-delay="1.8s">
                      Frequently Asked Questions
                    </h3>
                    {faqs.length === 0 && (
                      <p className="mt-25 wow fadeInUp" data-wow-delay="1.9s">
                        Have questions about this service? Here are answers to the most common ones.
                      </p>
                    )}
                  </div>
                  <div className="faq-content style-3">
                    <div className="faq-accordion">
                      {faqs.length > 0 ? (
                        <div className="accordion" id="service-faq">
                          {faqs.map((f, idx) => (
                            <div className="accordion-item mb-3" key={idx}>
                              <h5 className="accordion-header">
                                <button
                                  className={`accordion-button ${idx === 0 ? "" : "collapsed"}`}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#faq-${idx}`}
                                  aria-expanded={idx === 0}
                                  aria-controls={`faq-${idx}`}
                                >
                                  {f.q}
                                </button>
                              </h5>
                              <div
                                id={`faq-${idx}`}
                                className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`}
                                data-bs-parent="#service-faq"
                              >
                                <div className="accordion-body">{f.a}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <Faq1 />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
