import React from "react";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import Footer1 from "@/components/footers/Footer1";
import ScrollTop from "@/components/common/ScrollTop";

export default function TermsPage() {
  return (
    <>
      <HeaderTop />
      <Header1 />
      <main className="main position-relative" id="mains">
        {/* Breadcrumb Section */}
        <section className="breadcrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-content text-center">
                  <h1 className="breadcrumb-title">Terms & Conditions</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Terms & Conditions
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content Section */}
        <section className="terms-section section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="terms-content">
                  <div className="content-block">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                      By accessing and using kzwebstudio.com ("Website"), you accept and agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our services. These Terms apply to all visitors, users, and customers of our Website.
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>2. Company Information</h2>
                    <p>
                      KZWebSolutions is a professional software development company specializing in web development, UI/UX design, and related technology services. We operate as a professional software development agency serving clients worldwide.
                    </p>
                    <p>
                      <strong>Company Details:</strong><br />
                      KZWebSolutions<br />
                      124 City Road, London, United Kingdom, EC1V 2NX
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>3. Services and Deliverables</h2>
                    <p>
                      Our services include but are not limited to:
                    </p>
                    <ul>
                      <li>Custom web application development</li>
                      <li>Mobile application development (iOS and Android)</li>
                      <li>UI/UX design and prototyping</li>
                      <li>Software consulting and architecture</li>
                      <li>API development and integration</li>
                      <li>Website maintenance and support</li>
                      <li>Cloud infrastructure and DevOps services</li>
                    </ul>
                  </div>

                  <div className="content-block">
                    <h2>4. Project Terms and Payment</h2>
                    <p>
                      All projects are subject to written agreements that specify:
                    </p>
                    <ul>
                      <li>Project scope, deliverables, and timeline</li>
                      <li>Payment terms and milestones</li>
                      <li>Intellectual property rights</li>
                      <li>Confidentiality obligations</li>
                      <li>Acceptance criteria and testing procedures</li>
                    </ul>
                    <p>
                      Payment is required according to the agreed schedule. Late payments may result in project suspension or termination.
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>5. Intellectual Property Rights</h2>
                    <p>
                      Upon full payment, clients receive full ownership of custom-developed software and designs. KZWebSolutions retains rights to:
                    </p>
                    <ul>
                      <li>Proprietary frameworks and tools developed internally</li>
                      <li>Reusable code libraries and components</li>
                      <li>Portfolio rights to showcase completed work</li>
                    </ul>
                  </div>

                  <div className="content-block">
                    <h2>6. Client Responsibilities</h2>
                    <p>
                      Clients are responsible for:
                    </p>
                    <ul>
                      <li>Providing accurate project requirements and feedback</li>
                      <li>Timely communication and decision-making</li>
                      <li>Providing necessary access to systems and resources</li>
                      <li>Testing and accepting deliverables within agreed timeframes</li>
                      <li>Ensuring compliance with applicable laws and regulations</li>
                    </ul>
                  </div>

                  <div className="content-block">
                    <h2>7. Limitation of Liability</h2>
                    <p>
                      KZWebSolutions's total liability for any claims arising from our services shall not exceed the total amount paid by the client for the specific project. We are not liable for:
                    </p>
                    <ul>
                      <li>Indirect, incidental, or consequential damages</li>
                      <li>Loss of data, profits, or business opportunities</li>
                      <li>Third-party actions or failures</li>
                      <li>Issues arising from client-provided content or requirements</li>
                    </ul>
                  </div>

                  <div className="content-block">
                    <h2>8. Confidentiality and Data Protection</h2>
                    <p>
                      We maintain strict confidentiality regarding client information and project details. We implement appropriate security measures to protect sensitive data and comply with applicable data protection regulations.
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>9. Service Level and Support</h2>
                    <p>
                      Post-launch support is provided according to the agreed maintenance plan. Emergency support is available during business hours, with response times specified in the service agreement.
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>10. Termination</h2>
                    <p>
                      Either party may terminate a project with written notice according to the terms specified in the project agreement. Upon termination, clients are responsible for payment of completed work and any applicable cancellation fees.
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>11. Governing Law and Disputes</h2>
                    <p>
                      These Terms are governed by the laws of England and Wales. Any disputes shall be resolved through good faith negotiation, and if necessary, through appropriate legal channels in the United Kingdom.
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>12. Changes to Terms</h2>
                    <p>
                      KZWebSolutions reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting on our Website. Continued use of our services constitutes acceptance of the updated Terms.
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>13. Contact Information</h2>
                    <p>
                      For questions about these Terms and Conditions, please contact us:
                    </p>
                    <div className="contact-info">
                      <p><strong>Company:</strong> KZWebSolutions</p>
                      <p><strong>Email:</strong> khuzaima@kzwebsoulutions.com</p>
                      <p><strong>Phone:</strong> +44 7575 842908</p>
                      <p><strong>Address:</strong> 124 City Road, London, United Kingdom, EC1V 2NX</p>
                      <p><strong>Website:</strong> https://kzwebstudio.com</p>
                    </div>
                  </div>

                  <div className="content-block">
                    <p className="last-updated">
                      <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer1 />
      <ScrollTop />
    </>
  );
}

