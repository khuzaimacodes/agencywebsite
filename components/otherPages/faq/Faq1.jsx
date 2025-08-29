import React from "react";

export default function Faq1() {
  return (
    <div className="accordion" id="accordion">
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq1"
            aria-expanded="true"
            aria-controls="faq1"
          >
            What technologies do you specialize in for web development?
          </button>
        </h5>
        <div
          id="faq1"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            We specialize in modern web technologies including React.js, Next.js, Node.js, and TypeScript. Our team is also experienced with cloud platforms like AWS and Azure, and we follow best practices for SEO, performance optimization, and responsive design to deliver high-quality web applications.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq2"
            aria-expanded="false"
            aria-controls="faq2"
          >
            How long does it typically take to develop a custom web application?
          </button>
        </h5>
        <div
          id="faq2"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            Development timelines vary based on project complexity. A simple website typically takes 4-6 weeks, while complex web applications can take 3-6 months. We use agile methodologies and provide regular updates throughout the development process to ensure transparency and timely delivery.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq3"
            aria-expanded="false"
            aria-controls="faq3"
          >
            Do you provide ongoing support and maintenance after project completion?
          </button>
        </h5>
        <div
          id="faq3"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance monitoring, and feature enhancements. We provide 24/7 system monitoring and can create custom maintenance packages tailored to your specific needs and budget.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".9s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq4"
            aria-expanded="false"
            aria-controls="faq4"
          >
            Can you help with AI integration in our existing applications?
          </button>
        </h5>
        <div
          id="faq4"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            Absolutely! We specialize in AI integration and can enhance your existing applications with intelligent features like chatbots, recommendation engines, data analytics, and automation. Our AI solutions are designed to be scalable, secure, and seamlessly integrated with your current systems.
          </div>
        </div>
      </div>
      <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay="1.1s">
        <h5 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq5"
            aria-expanded="false"
            aria-controls="faq5"
          >
            What is your approach to project management and communication?
          </button>
        </h5>
        <div
          id="faq5"
          className="accordion-collapse collapse"
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">
            We use agile project management with regular client meetings, progress reports, and milestone reviews. Our team maintains open communication through dedicated project channels, weekly updates, and direct access to project managers. We believe transparency and collaboration are key to successful project delivery.
          </div>
        </div>
      </div>
    </div>
  );
}
