import "./ServicePage.scss";

import ServiceContact from "../../components/ServiceContact/ServiceContact";
import { services } from "../../assets/data";
import { allServices, whyChoose, features } from "../../data/mainData";

import { useRef } from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import SEO from "../../SEO/SEO";
import {
  FaArrowRight,
  FaPlay,
  FaFilm,
  FaRing,
  FaBirthdayCake,
  FaGraduationCap,
  FaBaby,
  FaHandHoldingHeart,
  FaCameraRetro,
  FaHeart,
  FaCamera,
} from "react-icons/fa";

const ServicePage = () => {
  const contentRef = useRef(null);
  const location = useLocation();
  const { slug } = useParams();

  const baseUrl =
    import.meta.env.VITE_BASE_URL || "https://tkproductionfilm.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  // Get service data by slug
  const getServiceBySlug = (slug) => {
    const serviceKey = Object.keys(allServices).find(
      (key) => allServices[key].slug === slug,
    );
    return serviceKey ? allServices[serviceKey] : null;
  };

  const serviceData = getServiceBySlug(slug);

  // If no service found, show 404 or redirect
  if (!serviceData) {
    return <div className="service-not-found">Service not found</div>;
  }

  // Get icon component from serviceData
  const BannerIcon = serviceData.banner.icon;

  // Icon mapping for services
  const getServiceIcon = (serviceName) => {
    if (serviceName.includes("Wedding Photography")) return <FaCameraRetro />;
    if (serviceName.includes("Cinematography")) return <FaFilm />;
    if (serviceName.includes("Pre-Wedding")) return <FaHeart />;
    if (serviceName.includes("Civil Marriage")) return <FaRing />;
    if (serviceName.includes("Engagement")) return <FaHandHoldingHeart />;
    if (serviceName.includes("Birthday")) return <FaBirthdayCake />;
    if (serviceName.includes("Baby Shower")) return <FaBaby />;
    if (serviceName.includes("Graduation")) return <FaGraduationCap />;
    return <FaCamera />;
  };

  return (
    <div className="service">
      <SEO
        title={`${serviceData.banner.title} | TK Production Film`}
        description={`Discover the magic of ${serviceData.banner.title} with TK Production Film's expert services.`}
        keywords={`${serviceData.banner.title}, professional photography, TK Production Film`}
        url={fullUrl}
      />

      {/* Banner */}
      <div className="service-top-banner">
        <div className="service-banner">
          <div className="banner-pattern"></div>
          <div className="service-banner-desc">
            <div className="banner-icon">
              <BannerIcon />
            </div>
            <h1>{serviceData.banner.title}</h1>
            <p>{serviceData.banner.subtitle}</p>
            <div className="banner-stats">
              <div className="stat">
                <span>16+</span>
                <p>Years Experience</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span>800+</span>
                <p>Events Covered</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span>1000+</span>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="banner-cta">
              <Link to="/contact-us" className="banner-btn primary">
                Book Now
              </Link>
              <Link to="/portfolio" className="banner-btn secondary">
                <FaPlay /> View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="service-container">
        <div className="service-container-content" ref={contentRef}>
          {/* About Section */}
          <div className="service-about-section">
            <div className="service-about-header">
              <h1>{serviceData.about.title}</h1>
              <div className="title-underline"></div>
            </div>
            <div className="service-about-content">
              {serviceData.about.description.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="service-why-choose">
            <div className="section-header">
              <span className="section-tag">{whyChoose.tag}</span>
              <h2>{whyChoose.title}</h2>
              <div className="title-underline"></div>
            </div>
            <div className="why-choose-grid">
              {whyChoose.items.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div className="why-choose-card" key={index}>
                    <div className="card-icon">
                      <IconComponent />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features Section */}
          <div className="service-features-section">
            <div className="section-header">
              <span className="section-tag">{features.tag}</span>
              <h2>{features.title}</h2>
              <div className="title-underline"></div>
              <p>{features.subtitle}</p>
            </div>
            <div className="features-grid">
              {features.items.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div className="feature-card" key={index}>
                    <div className="feature-icon-wrapper">
                      <IconComponent />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How It Works Section */}
          <div className="service-process-section">
            <div className="section-header">
              <span className="section-tag">{serviceData.process.tag}</span>
              <h2>{serviceData.process.title}</h2>
              <div className="title-underline"></div>
              <p>{serviceData.process.subtitle}</p>
            </div>

            <div className="process-timeline">
              {serviceData.process.steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div className="process-item" key={step.id}>
                    <div className="process-number">
                      <span>{String(step.id).padStart(2, "0")}</span>
                    </div>
                    <div className="process-content">
                      <div className="process-icon">
                        <IconComponent />
                      </div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                    {index < serviceData.process.steps.length - 1 && (
                      <div className="process-connector"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Explore Other Services Section */}
          <div className="service-explore-section">
            <div className="section-header">
              <span className="section-tag">Explore More</span>
              <h2>Our Other Services</h2>
              <div className="title-underline"></div>
              <p>Discover our complete range of photography services</p>
            </div>
            <div className="explore-grid">
              {services.map((service, index) => (
                <Link to={service.link} className="explore-card" key={index}>
                  <div className="explore-icon-wrapper">
                    {getServiceIcon(service.service_name)}
                  </div>
                  <h3>{service.service_name}</h3>
                  <div className="explore-arrow">
                    <FaArrowRight />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="service-cta-section">
            <div className="cta-content">
              <h2>Ready to Capture Your Special Moments?</h2>
              <p>Let's create beautiful memories together</p>
              <Link to="/contact-us" className="cta-button">
                Book Now <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="service-contact">
        <ServiceContact />
      </div>
    </div>
  );
};

export default ServicePage;
