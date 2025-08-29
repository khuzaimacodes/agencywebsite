"use client";

import React from "react";
import Image from "next/image";

export default function ProjectDetails({ projectItem }) {
  return (
    <section className="Project-details-section fix space-top pb-425">
      <div className="container">
        <div className="project-details-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-items">
                <div
                  className="details-image wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <Image
                    alt="img"
                    src={projectItem.imgSrc}
                    width="1170"
                    height="550"
                  />
                </div>
                <div className="row g-4 justify-content-between">
                  <div className="col-lg-7">
                    <div className="details-content pt-5">
                      <h3 className="wow fadeInUp" data-wow-delay=".6s">
                        {projectItem.title}
                      </h3>
                      <p className="wow fadeInUp" data-wow-delay=".9s">
                        {projectItem.description || "Nulla faucibus malesuada. In placerat feugiat eros ac tempor. Integer euismod massa sapien, et consequat enim laoreet et. Nulla sit amet nisi dapibus, gravida turpis sit amet, accumsan nisl. Fusce vel semper risus. Morbi congue eros sagittis, sodales turpis venenatis, iaculis dui. Proin ac purus sed nibh dapibus neque. scelerisque sed quis ante."}
                      </p>
                      
                      {/* Live Website Button */}
                      {projectItem.websiteUrl && (
                        <div className="live-website-btn wow fadeInUp" data-wow-delay="1.1s" style={{ marginTop: "30px" }}>
                          <a 
                            href={projectItem.websiteUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="gt-btn"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "10px",
                              backgroundColor: "#384bff",
                              color: "white",
                              padding: "15px 30px",
                              borderRadius: "8px",
                              textDecoration: "none",
                              fontWeight: "600",
                              fontSize: "16px",
                              transition: "all 0.3s ease",
                              boxShadow: "0 4px 15px rgba(56, 75, 255, 0.3)"
                            }}

                          >
                            <i className="fa-solid fa-external-link-alt" />
                            Visit Live Website
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="project-catagory wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <h3>Project Info:</h3>
                      <ul>
                        <li>
                          Client:
                          <span>{projectItem.client || "Ralph Edwards"}</span>
                        </li>
                        <li>
                          Category:
                          <span>{projectItem.category}</span>
                        </li>
                        <li>
                          Location:
                          <span>{projectItem.location || "London"}</span>
                        </li>
                        {projectItem.websiteUrl && (
                          <li>
                            Live Website:
                            <span>
                              <a 
                                href={projectItem.websiteUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="website-link"
                              >
                                View Live Site <i className="fa-solid fa-external-link" />
                              </a>
                            </span>
                          </li>
                        )}
                        <li>
                          Share:
                          <span>
                            <i className="fa-brands fa-facebook-f me-3" />
                            <i className="fa-brands fa-instagram me-3" />
                            <i className="fa-brands fa-linkedin-in" />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="details-content pt-3 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <h3>Our Challenge</h3>
                  <p>
                    {projectItem.challenge || "Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie, ac tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis tincidunt quam. Proin nec volutpat ligula, id porttitor augue. Proin id volutpat massa. Vivamus tincidunt nunc justo, ac aliquam ex molestie id."}
                  </p>
                </div>
                {projectItem.features && projectItem.features.length > 0 && (
                  <div className="row g-4 pt-5">
                    {[0, 1, 2].map((colIndex) => (
                      <div key={colIndex} className="col-lg-4 col-md-6">
                        <ul className="list wow fadeInUp" data-wow-delay={`${1.2 + colIndex * 0.2}s`}>
                          {projectItem.features
                            .slice(colIndex * 2, (colIndex + 1) * 2)
                            .map((feature, index) => (
                              <li key={index}>
                                <i className="fa-regular fa-circle-check" />
                                {feature}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                <div
                  className="details-content pt-5 wow fadeInUp"
                  data-wow-delay="1.9s"
                >
                  <h3>The Result of Project</h3>
                  <p>
                    {projectItem.result || "Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie, ac tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis tincidunt quam. Proin nec volutpat ligula, id porttitor augue. Proin id volutpat massa. Vivamus tincidunt nunc justo, ac aliquam ex molestie id."}
                  </p>
                </div>
                <div className="row g-4 pt-5">
                  <div className="col-lg-6 col-md-6">
                    <div className="thumb wow fadeInUp" data-wow-delay="2s">
                      <Image
                        alt={`${projectItem.title} detail image 1`}
                        src={projectItem.image2 || "/assets/img/project/2.png"}
                        width="570"
                        height="360"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="thumb wow fadeInUp" data-wow-delay="2.4s">
                      <Image
                        alt={`${projectItem.title} detail image 2`}
                        src={projectItem.image3 || "/assets/img/project/3.png"}
                        width="570"
                        height="360"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
