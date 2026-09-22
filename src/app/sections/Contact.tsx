'use client';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import emailjs from 'emailjs-com';
import PopupSuccess from '../components/PopupSuccess';




const Contact = () => {
    const desdeComercios = useSearchParams().get('de') === 'comercios';
    const [showPopup, setShowPopup] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        origen: desdeComercios ? 'soluciones-comercios' : 'sitio'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };



const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setError(false);

    emailjs.send(
        'service_a8up7zb',
        'template_0o77t3c',
        formData,
        'gJ13A5gEjdoEbmU3h'
    ).then(() => {
        setShowPopup(true);
        // se conserva el origen para que una segunda consulta siga atribuida igual
        setFormData({ name: '', email: '', message: '', origen: formData.origen });
    }).catch((err) => {
        console.error('Error al enviar:', err?.text ?? err);
        setError(true);
    }).finally(() => {
        setSending(false);
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
                            <p><a href="mailto:adavidlopezmathez@gmail.com">adavidlopezmathez@gmail.com</a></p>
                        </div>
                        <div className="contact-item">
                            <span>📱 Teléfono:</span>
                            <p><a href="tel:+542616649039">+54 261 664 9039</a></p>
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
                                rows={5}
                                placeholder={desdeComercios
                                    ? 'Contame qué rubro tenés y qué es lo que más tiempo te come hoy.'
                                    : undefined}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        
                        {error && (
                            <p className="form-error" role="alert">
                                No pudimos enviar tu mensaje. Escribime directo a
                                {' '}<a href="mailto:adavidlopezmathez@gmail.com">adavidlopezmathez@gmail.com</a>
                                {' '}o al <a href="tel:+542616649039">+54 261 664 9039</a>.
                            </p>
                        )}

                        <button type="submit" className="submit-btn" disabled={sending}>
                            {sending ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </form>
                </div>
            </div>
            <PopupSuccess visible={showPopup} onClose={() => setShowPopup(false)} />
        </section>
    );
};

export default Contact;
