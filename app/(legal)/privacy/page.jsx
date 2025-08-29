import React from "react";
import Header1 from "@/components/headers/Header1";
import HeaderTop from "@/components/headers/HeaderTop";
import Footer1 from "@/components/footers/Footer1";
import ScrollTop from "@/components/common/ScrollTop";

export default function PrivacyPage() {
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
                  <h1 className="breadcrumb-title">Privacy Policy</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Privacy Policy
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content Section */}
        <section className="privacy-section section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="privacy-content">
                  <div className="content-block">
                    <h2>1. Introduction</h2>
                    <p>
                      KHUZAIMA DIGISPHERE LTD ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our software development services.
                    </p>
                    <p>
                      This policy applies to all visitors, clients, and users of kzwebstudio.com and our services. By using our services, you consent to the data practices described in this policy.
                    </p>
                    <p>
                      <strong>Company Details:</strong><br />
                      KHUZAIMA DIGISPHERE LTD<br />
                      124 City Road, London, United Kingdom, EC1V 2NX
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>2. Information We Collect</h2>
                    <p>
                      We collect information you provide directly to us and information collected automatically when you use our services:
                    </p>
                    <h3>2.1 Information You Provide</h3>
                    <ul>
                      <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                      <li><strong>Project Details:</strong> Requirements, specifications, feedback, and communications</li>
                      <li><strong>Account Information:</strong> Login credentials, preferences, and settings</li>
                      <li><strong>Payment Information:</strong> Billing details, payment history, and financial information</li>
                      <li><strong>Communication Records:</strong> Emails, chat logs, and support tickets</li>
                    </ul>
                    <h3>2.2 Automatically Collected Information</h3>
                    <ul>
                      <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage analytics</li>
                      <li><strong>Website Usage:</strong> Pages visited, time spent, and navigation patterns</li>
                      <li><strong>Cookies and Tracking:</strong> Session data, preferences, and performance metrics</li>
                    </ul>
                  </div>

                  <div className="content-block">
                    <h2>3. How We Use Your Information</h2>
                    <p>
                      We use the collected information for the following purposes:
                    </p>
                    <ul>
                      <li><strong>Service Delivery:</strong> To provide, maintain, and improve our software development services</li>
                      <li><strong>Project Management:</strong> To communicate about projects, track progress, and deliver results</li>
                      <li><strong>Client Support:</strong> To respond to inquiries, provide technical support, and resolve issues</li>
                      <li><strong>Business Operations:</strong> To process payments, manage accounts, and maintain records</li>
                      <li><strong>Communication:</strong> To send updates, newsletters, and marketing materials (with consent)</li>
                      <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                      <li><strong>Security:</strong> To protect against fraud, abuse, and unauthorized access</li>
                    </ul>
                  </div>

                  <div className="content-block">
                    <h2>4. Information Sharing and Disclosure</h2>
                    <p>
                      We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:
                    </p>
                    <ul>
                      <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in delivering our services</li>
                      <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                      <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                      <li><strong>Protection of Rights:</strong> To protect our rights, property, safety, or the public</li>
                      <li><strong>Client Consent:</strong> When you explicitly authorize us to share specific information</li>
                    </ul>
                  </div>

                  <div className="content-block">
                    <h2>5. Data Security and Protection</h2>
                    <p>
                      We implement comprehensive security measures to protect your information:
                    </p>
                    <ul>
                      <li><strong>Technical Safeguards:</strong> Encryption, firewalls, and secure data transmission</li>
                      <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis</li>
                      <li><strong>Regular Monitoring:</strong> Continuous security monitoring and threat detection</li>
                      <li><strong>Employee Training:</strong> Regular security awareness training for our team</li>
                      <li><strong>Incident Response:</strong> Procedures for detecting and responding to security incidents</li>
                    </ul>
                    <p>
                      While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but commit to maintaining industry-standard protection measures.
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>6. Data Retention and Deletion</h2>
                    <p>
                      We retain your information for as long as necessary to:
                    </p>
                    <ul>
                      <li>Provide our services and maintain your account</li>
                      <li>Comply with legal obligations and contractual requirements</li>
                      <li>Resolve disputes and enforce agreements</li>
                      <li>Improve our services and business operations</li>
                    </ul>
                    <p>
                      You may request deletion of your personal information, subject to legal and contractual obligations. We will respond to deletion requests within 30 days.
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>7. Your Rights and Choices</h2>
                    <p>
                      Depending on your location, you may have the following rights regarding your personal information:
                    </p>
                    <ul>
                      <li><strong>Access:</strong> Request a copy of your personal information</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                      <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                      <li><strong>Objection:</strong> Object to certain processing activities</li>
                      <li><strong>Restriction:</strong> Request limitation of processing activities</li>
                      <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                    </ul>
                    <p>
                      To exercise these rights, contact us at privacy@kzwebstudio.com. We will respond to your request within 30 days.
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>8. International Data Transfers</h2>
                    <p>
                      Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards, including:
                    </p>
                    <ul>
                      <li>Standard contractual clauses approved by data protection authorities</li>
                      <li>Adequacy decisions for countries with equivalent protection</li>
                      <li>Certification schemes and codes of conduct</li>
                      <li>Binding corporate rules for multinational operations</li>
                    </ul>
                  </div>

                  <div className="content-block">
                    <h2>9. Cookies and Tracking Technologies</h2>
                    <p>
                      We use cookies and similar technologies to enhance your experience:
                    </p>
                    <ul>
                      <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
                      <li><strong>Performance Cookies:</strong> Help us understand how visitors use our website</li>
                      <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                      <li><strong>Marketing Cookies:</strong> Deliver relevant content and advertisements</li>
                    </ul>
                    <p>
                      You can control cookie settings through your browser preferences. Disabling certain cookies may affect website functionality.
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>10. Third-Party Services and Links</h2>
                    <p>
                      Our website may contain links to third-party services and websites. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
                    </p>
                    <p>
                      We may use third-party services for:
                    </p>
                    <ul>
                      <li>Payment processing (2checkout, Payoneer, etc.)</li>
                      <li>Analytics and performance monitoring</li>
                      <li>Customer support and communication tools</li>
                      <li>Project management and collaboration platforms</li>
                    </ul>
                  </div>

                  <div className="content-block">
                    <h2>11. Children's Privacy</h2>
                    <p>
                      Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>12. Changes to This Privacy Policy</h2>
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
                    </p>
                    <ul>
                      <li>Posting the updated policy on our website</li>
                      <li>Sending email notifications to registered users</li>
                      <li>Displaying prominent notices on our website</li>
                    </ul>
                    <p>
                      Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.
                    </p>
                  </div>

                  <div className="content-block">
                    <h2>13. Contact Information</h2>
                    <p>
                      If you have questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="contact-info">
                      <p><strong>Company:</strong> KHUZAIMA DIGISPHERE LTD</p>
                      <p><strong>Email:</strong> khuzaima@kzwebsoulutions.com</p>
                      <p><strong>Phone:</strong> +44 7575 842908</p>
                      <p><strong>Address:</strong> 124 City Road, London, United Kingdom, EC1V 2NX</p>
                      <p><strong>Website:</strong> https://kzwebstudio.com</p>
                      <p><strong>Data Protection Officer:</strong> khuzaima@kzwebsoulutions.com</p>
                    </div>
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

