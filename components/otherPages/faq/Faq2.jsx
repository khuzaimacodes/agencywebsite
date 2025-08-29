import React from "react";

export default function Faq2() {
  return (
    <div className="accordion" id="accordion1">
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq5"
            aria-expanded="true"
            aria-controls="faq5"
          >
            Do you offer mobile app development services?
          </button>
        </h5>
        <div
          id="faq5"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion1"
        >
          <div className="accordion-body">
            Yes, we develop both iOS and Android applications using React Native and native technologies. Our mobile apps are designed for performance, user experience, and scalability. We also provide cross-platform solutions to maximize your reach across different devices and platforms.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq6"
            aria-expanded="false"
            aria-controls="faq6"
          >
            What cloud services do you provide?
          </button>
        </h5>
        <div
          id="faq6"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion1"
        >
          <div className="accordion-body">
            We offer comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform services. Our expertise covers cloud migration, infrastructure setup, CI/CD pipelines, containerization with Docker and Kubernetes, and 24/7 monitoring and optimization for optimal performance and cost efficiency.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq7"
            aria-expanded="false"
            aria-controls="faq7"
          >
            How do you ensure the security of web applications?
          </button>
        </h5>
        <div
          id="faq7"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion1"
        >
          <div className="accordion-body">
            Security is our top priority. We implement industry-standard security practices including HTTPS, data encryption, secure authentication, regular security audits, and compliance with GDPR and other regulations. Our applications undergo thorough security testing before deployment to ensure protection against common vulnerabilities.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".9s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq8"
            aria-expanded="false"
            aria-controls="faq8"
          >
            Can you help with digital marketing and SEO optimization?
          </button>
        </h5>
        <div
          id="faq8"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion1"
        >
          <div className="accordion-body">
            Absolutely! We provide comprehensive digital marketing services including SEO optimization, content marketing, social media management, and PPC campaigns. Our team ensures your web applications are built with SEO best practices and can help drive traffic and increase conversions through strategic marketing campaigns.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay="1.1s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq9"
            aria-expanded="false"
            aria-controls="faq9"
          >
            What is your pricing structure for development projects?
          </button>
        </h5>
        <div
          id="faq9"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion1"
        >
          <div className="accordion-body">
            We offer flexible pricing models including fixed-price projects, time and materials, and monthly retainers. Pricing depends on project scope, complexity, and timeline. We provide detailed proposals with transparent cost breakdowns and can work within your budget while ensuring quality delivery. Contact us for a personalized quote.
          </div>
        </div>
      </div>
    </div>
  );
}
