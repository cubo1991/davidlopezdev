import Link from "next/link";
import services from "../data/servicesData";

const Services = () => {
    return (
        <section className="services-section">
            <div className="container">
                <h1 className="services-title">Qué hago</h1>
                <p className="services-intro">
                    Áreas de trabajo, con el stack que uso en cada una y los proyectos que las respaldan.
                </p>
                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.title} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <div className="tech-stack">
                                {service.stack.map((tech) => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <ul className="service-features">
                                {service.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                            <p className="service-proyectos">
                                Respaldado por: {service.proyectos}.{" "}
                                <Link href="/proyectos" className="verMas-link">
                                    Ver proyectos
                                </Link>
                            </p>
                        </div>
                    ))}
                </div>
                {/* Reusa el estilo del CTA de comercios (.comercios-cta / .comercios-btn) */}
                <div className="comercios-cta">
                    <Link href="/contacto" className="comercios-btn">
                        Contactame
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
