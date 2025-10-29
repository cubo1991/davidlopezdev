import React from 'react';
import service from "../data/servicesData";


const Services = () => {
    console.log(service);

    return (
        <section className="services-section">
            <div className="container">
                <h2 className="services-title">Mis Servicios</h2>
                <div className="services-grid">
                    {service.map((service) => (
                        
                        <div key={service.id} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            {service.features && (
                                <ul className="service-features">
                                    {service.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;