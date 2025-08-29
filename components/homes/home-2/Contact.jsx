"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
             serviceType: fd.get("serviceType") || undefined,
       budget: fd.get("budget") || undefined,
      source: "home",
    };

    // Show immediate loading feedback
    const loadingToast = toast.loading("Sending your message...", {
      position: "bottom-right",
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      
      if (res.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.", { 
          position: "bottom-right",
          autoClose: 5000,
        });
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        toast.error(data.error || "Failed to send message", { position: "bottom-right" });
      }
    } catch (err) {
      // Dismiss loading toast
      toast.dismiss(loadingToast);
      toast.error("Network error", { position: "bottom-right" });
    }
  };
  return (
    <section className="contact-area">
      <div
        className="contact-wrap style1 fix"
        data-bg-src=""
        style={{ backgroundImage: "url(/assets/img/bg/contactBg1_1.png)" }}
      >
        <div
          className="shape1_1 d-none d-xl-block wow fadeInUp"
          data-wow-delay=".3s"
        >
          <Image
            alt="shape"
            src="/assets/img/shape/contactShape1_1.png"
            width="252"
            height="279"
          />
        </div>
        <div
          className="shape1_2 d-none d-xl-block wow fadeInUp"
          data-wow-delay=".6s"
        >
          <Image
            alt="shape"
            src="/assets/img/shape/contactShape1_2.webp"
            width="325"
            height="554"
          />
        </div>
        <div className="container">
          <div className="row gx-0">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="contact-form style1 space-top position-relative">
                <form
                  ref={formRef}
                  className="wow fadeInUp"
                  data-wow-delay=".6s"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div
                      className="title-box mb-40 wow fadeInLeft"
                      data-wow-delay=".5s"
                    >
                      <h3 className="section-title mt-10">
                        Feel Free to Contact Us
                      </h3>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <div className="contact__from-input mb-20">
                          <label>Full name*</label>
                          <input type="text" name="name" placeholder="Your name" required />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <label>Email Address*</label>
                        <div className="contact__from-input mb-20">
                          <input type="email" name="email" placeholder="info@example.com" required />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <label>Type Of Service*</label>
                        <div className="contact__select mb-20">
                          <select name="serviceType">
                            <option value={0}>Select</option>
                            <option value={2}>Web Design</option>
                            <option value={3}>Web Development</option>
                            <option value={1}>Cyber security</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <label>Your Budget*</label>
                        <div className="contact__select mb-20">
                          <select name="budget" required>
                            <option value="">Select Budget</option>
                            <option value="1000">$1,000 - $3,000</option>
                            <option value="3000">$3,000 - $5,000</option>
                            <option value="5000">$5,000 - $10,000</option>
                            <option value="10000">$10,000 - $25,000</option>
                            <option value="25000">$25,000+</option>
                            <option value="unknown">Don't Know Yet</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-12 wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <div className="form-clt">
                        <span>Message*</span>
                        <textarea
                          className="style2"
                          name="message"
                          id="message"
                          placeholder="Write Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                      <button type="submit" className="gt-btn gt-btn-icon">
                        SUBMIT NOW
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="contact-map wow fadeInUp" data-wow-delay=".9s">
                <iframe 
                  src="https://maps.google.com/maps?q=124+City+Road,+London,+United+Kingdom,+EC1V+2NX&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  style={{ border: 0, height: '400px', width: '100%' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="124 City Road, London, United Kingdom, EC1V 2NX"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
