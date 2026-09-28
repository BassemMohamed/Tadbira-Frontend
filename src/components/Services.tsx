import type { ReactElement } from "react";
import { services } from "../data/services";


// ✅ أيقونات SVG
const icons: Record<string, ReactElement> = {
  megaphone: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 20V28C6 28 8 30 12 30H16L28 38V10L16 18H12C8 18 6 20 6 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 30V38C16 40 18 42 20 42H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 18C35 19 36 21 36 24C36 27 35 29 34 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 14C42 17 42 22 42 24C42 26 42 31 40 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 14L6 24L16 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 14L42 24L32 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 8L20 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  finance: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="6"
        y="10"
        width="36"
        height="28"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M6 18H42" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="28" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M22 30H32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 26H36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const Services = () => {
  return (
    <section className="section services-section" id="services">
      <div className="container">

        <div className="services-header">
          <div className="services-heading">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>
              Built Around
              <span> Your Goals.</span>
            </h2>
          </div>

          <div className="services-intro">
            <p>
              From strategy to execution, we combine business thinking,
              technology, and practical solutions to help organizations
              move forward.
            </p>
            <div className="services-line">
              <span />
              <span>03 CORE SERVICES</span>
            </div>
          </div>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <article className="service-item" key={service.id}>
              <div className="service-number">0{index + 1}</div>

              <div className="service-icon-large">
                {icons[service.icon]}
              </div>

              <div className="service-main">
                <div className="service-label">{service.label}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;