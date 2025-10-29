import React from 'react';

const PopupSuccess = ({ visible, onClose }) => {
    if (!visible) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-box">
                <h3>✅ Mensaje enviado</h3>
                <p>Gracias por contactarme. Te responderé pronto.</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        
        </div>
    );
};

export default PopupSuccess;
