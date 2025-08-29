"use client";
import { services } from "@/data/services";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <section className="service-area services-section-fixed" id="service-area">
      <div className="service-wrap style3 space-bottom pt-226 fix">
        <div className="shape3_1">
          <Image
            alt="shape"
            src="/assets/img/shape/aboutShape3_1.png"
            width="645"
            height="395"
          />
        </div>
        <div className="container">
          <div className="title-wrap mb-50">
            <div className="title-area">
              <h6
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
                Our Feathered Services{' '}
                <span>
                  <Image
                    alt="icon"
                    src="/assets/img/icon/titleIcon.png"
                    width="28"
                    height="12"
                  />
                </span>
              </h6>
              <h2
                className="title text-start wow fadeInUp"
                data-wow-delay=".6s"
              >
                How can we help you?
              </h2>
            </div>
          </div>
          <div className="services-grid-fixed">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="service-card-fixed wow fadeInUp"
                data-wow-delay={`${(index + 1) * 0.2}s`}
              >
                <div className="card-icon-fixed">
                  <Image
                    src={service.imageSrc}
                    width={40}
                    height={40}
                    alt="icon"
                  />
                </div>
                <div className="card-content-fixed">
                  <h3>
                    <Link
                      scroll={false}
                      href={`/service-details/${service.id}`}
                      className="card-title-fixed"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="card-description-fixed">{service.description}</p>
                </div>
                <div className="link-wrap-fixed">
                  <Link
                    scroll={false}
                    href={`/service-details/${service.id}`}
                    className="more-details-link-fixed"
                  >
                    More Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
