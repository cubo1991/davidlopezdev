'use client';
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Aquí puedes agregar la lógica para enviar el formulario
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Contacto</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Información de Contacto</h3>
                        <div className="contact-item">
                            <span>📧 Email:</span>
                            <p>tu-email@ejemplo.com</p>
                        </div>
                        <div className="contact-item">
                            <span>📱 Teléfono:</span>
                            <p>+1 234 567 890</p>
                        </div>
                        <div className="contact-item">
                            <span>📍 Ubicación:</span>
                            <p>Tu Ciudad, País</p>
                        </div>
                    </div>
                    
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        
                        <button type="submit" className="submit-btn">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;