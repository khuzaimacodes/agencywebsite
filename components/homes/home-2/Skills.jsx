import { progressData } from "@/data/skills";
import React from "react";
import Image from "next/image";
import Progress from "@/components/common/Progress";

export default function Skills() {
  return (
    <section className="skill-area">
      <div
        className="skill-wrap style1 space fix"
        data-bg-src=""
        style={{ backgroundImage: "url(/assets/img/bg/skillBg1_1.png)" }}
      >
        <div className="shape1_1 d-none d-xl-block">
          <Image
            alt="shape"
            src="/assets/img/shape/skillShape1_1.png"
            width="96"
            height="34"
          />
        </div>
        <div className="shape1_2 d-none d-xl-block">
          <Image
            alt="shape"
            src="/assets/img/shape/skillShape1_2.png"
            width="288"
            height="383"
          />
        </div>
        <div className="container">
          <div className="skill-wrapper style1">
            <div
              className="skill-content order-2 order-xl-1 wow fadeInLeft"
              data-wow-delay=".6s"
            >
              <div className="title-area">
                <h5
                  className="subtitle text-start wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <span>
                    <Image
                      alt="icon"
                      src="/assets/img/icon/titleIcon.png"
                      width="28"
                      height="12"
                    />
                  </span>{' '}
                  Our Development Skills{' '}
                  <span>
                    <Image
                      alt="icon"
                      src="/assets/img/icon/titleIcon.png"
                      width="28"
                      height="12"
                    />
                  </span>
                </h5>
                <h2
                  className="title text-start wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  We Build Scalable Software Solutions with Modern Technologies
                </h2>
                <p className="text wow fadeInUp" data-wow-delay=".9s">
                  Our team of expert developers specializes in React, Next.js, Node.js, and cutting-edge web technologies. We create high-performance, scalable applications that drive business growth and deliver exceptional user experiences.
                </p>
              </div>
              <div className="fancy-box-wrapper wow fadeInUp" data-wow-delay=".6s">
                <div className="fancy-box">
                  <div className="checklist mt-0 mb-0">
                    <ul className="ps-0">
                      <li>
                        <Image
                          alt="icon"
                          src="/assets/img/icon/signIcon.png"
                          width="16"
                          height="16"
                        />
                      </li>
                      <li>Branding & Design Identity</li>
                    </ul>
                    <ul className="ps-0">
                      <li>
                        <Image
                          alt="icon"
                          src="/assets/img/icon/signIcon.png"
                          width="16"
                          height="16"
                        />
                      </li>
                      <li>Website Marketing Solutions</li>
                    </ul>
                    <ul className="ps-0">
                      <li>
                        <Image
                          alt="icon"
                          src="/assets/img/icon/signIcon.png"
                          width="16"
                          height="16"
                        />
                      </li>
                      <li>24/7 System Monitoring</li>
                    </ul>
                    <ul className="ps-0">
                      <li>
                        <Image
                          alt="icon"
                          src="/assets/img/icon/signIcon.png"
                          width="16"
                          height="16"
                        />
                      </li>
                      <li>Smart AI Solutions</li>
                    </ul>
                  </div>
                </div>
                <div className="fancy-box d-flex justify-content-start justify-content-md-end">
                  <div className="counter-box style1">
                    <div className="counter-box_icon">
                      <Image
                        alt="icon"
                        src="/assets/img/icon/aboutIcon1_1.png"
                        width="52"
                        height="52"
                      />
                    </div>
                    <div className="counter-box_counter">
                      <div>
                        <span className="counter-number">95</span>
                        <span className="plus">%</span>
                      </div>
                      <span>AI Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
              {progressData.map((item, index) => (
                <div
                  className="progress-wrap wow fadeInUp"
                  data-wow-delay={item.delay}
                  key={index}
                >
                  <div className="progress-meta">
                    <div className="title">{item.title}</div>
                    <div className="percentage">{item.percentage}</div>
                  </div>
                  <div className="progress-container">
                    <Progress percentage={item.percentage} />
                  </div>
                </div>
              ))}
            </div>
            <div
              className="skill-thumb order-1 order-xl-2 wow fadeInRight"
              data-wow-delay="1.2s"
            >
              <div className="shape1_3">
                <Image
                  className="rotate360"
                  alt="shape"
                  src="/assets/img/shape/skillShape1_3.png"
                  width="138"
                  height="138"
                />
              </div>
              <div className="shape1_4 d-none d-xl-block">
                <Image
                  alt="shape"
                  src="/assets/img/shape/skillShape1_4.png"
                  width="247"
                  height="257"
                />
              </div>
              <div
                className="thumb1 wow fadeInLeft"
                data-wow-delay=".3s"
                data-bg-src=""
                style={{
                  backgroundImage: "url(/assets/img/skill/skillThumb1_1.png)",
                }}
                data-tilt=""
                data-tilt-max={10}
              >
                <div className="thumb2 wow fadeInUp" data-wow-delay=".5s">
                  <Image
                    alt="about-img"
                    src="/assets/img/skill/skillThumb1_2.jpg"
                    width="247"
                    height="271"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
