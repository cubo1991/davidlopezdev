'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PopupSuccess from '../components/PopupSuccess';




const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
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

    emailjs.send(
        'service_a8up7zb',
        'template_0o77t3c',
        formData,
        'gJ13A5gEjdoEbmU3h'
    ).then((result) => {
        console.log('Email enviado:', result.text);
          setShowPopup(true);
        setFormData({ name: '', email: '', message: '' }); // opcional: limpiar campos
    }).catch((error) => {
        console.error('Error al enviar:', error.text);
    });
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
                            <p>adavidlopezmathez@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <span>📱 Teléfono:</span>
                            <p>+54 261 664 9039</p>
                        </div>
                        <div className="contact-item">
                            <span>📍 Ubicación:</span>
                            <p>Mendoza, Argentina</p>
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
            <PopupSuccess visible={showPopup} onClose={() => setShowPopup(false)} />
        </section>
    );
};

export default Contact;
