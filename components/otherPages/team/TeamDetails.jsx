import React from "react";
import Image from "next/image";
import Progress from "@/components/common/Progress";

export default function TeamDetails({ teamMember }) {
  return (
    <section className="team-details-area fix space-top">
      <div className="container">
        <div className="team-details-wrap">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4">
              <div
                className="team-details-thumb wow fadeInUp"
                data-wow-delay=".6s"
              >
                <Image
                  alt={`${teamMember.name} - ${teamMember.position}`}
                  src={teamMember.imgSrc}
                  width="391"
                  height="474"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="team-details-content">
                <div
                  className="details-info d-flex justify-content-between wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="info-left">
                    <h3 className="title">{teamMember.name}</h3>
                    <span className="designation">{teamMember.position}</span>
                  </div>
                  <div className="info-right">
                    <div className="experience">
                      <span className="number">{teamMember.experience}</span>
                      <span className="text">Experience</span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".9s">
                  {teamMember.description}
                </p>
                
                {teamMember.expertise && (
                  <div className="expertise-list mt-4 wow fadeInUp" data-wow-delay="1s">
                    <h5 className="mb-3">Areas of Expertise:</h5>
                    <div className="row">
                      {teamMember.expertise.map((skill, index) => (
                        <div key={index} className="col-md-6">
                          <div className="expertise-item">
                            <i className="fa-solid fa-check-circle text-primary me-2"></i>
                            <span>{skill}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {teamMember.skills && (
        <div className="team-simple-history pb-425">
          <div className="container">
            <div className="row">
              <h4 className="title wow fadeInUp" data-wow-delay="1.6s">
                Professional Skills
              </h4>
              <p className="wow fadeInUp" data-wow-delay="1.9s">
                {teamMember.name} has developed expertise across multiple areas with proven track record of delivering exceptional results. The skills below represent proficiency levels based on years of experience and successful project deliveries.
              </p>
              
              <div className="skills">
                <div className="row">
                  <div className="col-lg-6">
                    {Object.entries(teamMember.skills).slice(0, Math.ceil(Object.keys(teamMember.skills).length / 2)).map(([skill, percentage], index) => (
                      <div key={index} className="progress-wrap">
                        <div className="progress-meta">
                          <div className="title">{skill}</div>
                          <div className="percentage">{percentage}%</div>
                        </div>
                        <div className="progress-container">
                          <Progress percentage={percentage} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-lg-6">
                    {Object.entries(teamMember.skills).slice(Math.ceil(Object.keys(teamMember.skills).length / 2)).map(([skill, percentage], index) => (
                      <div key={index} className="progress-wrap">
                        <div className="progress-meta">
                          <div className="title">{skill}</div>
                          <div className="percentage">{percentage}%</div>
                        </div>
                        <div className="progress-container">
                          <Progress percentage={percentage} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="achievement-highlights mt-40 wow fadeInUp" data-wow-delay=".6s">
                  <h5 className="mb-3">Key Achievements:</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="achievement-item">
                        <i className="fa-solid fa-star text-warning me-2"></i>
                        <span>Specializes in {teamMember.expertise?.[0] || teamMember.position}</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="achievement-item">
                        <i className="fa-solid fa-award text-success me-2"></i>
                        <span>{teamMember.experience} of professional experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
