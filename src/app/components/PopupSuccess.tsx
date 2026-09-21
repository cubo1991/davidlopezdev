'use client';
import React, { useEffect, useRef } from 'react';

interface PopupSuccessProps {
    visible: boolean;
    onClose: () => void;
}

const PopupSuccess = ({ visible, onClose }: PopupSuccessProps) => {
    const closeRef = useRef<HTMLButtonElement>(null);
    // El padre pasa una función nueva en cada render; la guardo en ref para no reiniciar el efecto.
    const onCloseRef = useRef(onClose);
    onCloseRef.current = onClose;

    // Al abrir: foco al botón; Escape cierra; al cerrar el foco vuelve a donde estaba.
    useEffect(() => {
        if (!visible) return;
        const previo = document.activeElement as HTMLElement | null;
        closeRef.current?.focus();
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onCloseRef.current();
            // ponytail: el diálogo tiene un solo control, Tab se queda en él (trampa de foco mínima).
            if (e.key === 'Tab') e.preventDefault();
        };
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('keydown', onKey);
            previo?.focus();
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div className="popup-overlay">
            <div
                className="popup-box"
                role="dialog"
                aria-modal="true"
                aria-labelledby="popup-titulo"
                aria-describedby="popup-texto"
            >
                <h3 id="popup-titulo">✅ Mensaje enviado</h3>
                <p id="popup-texto">Gracias por contactarme. Te responderé pronto.</p>
                <button ref={closeRef} onClick={onClose}>Cerrar</button>
            </div>
        
        </div>
    );
};

export default PopupSuccess;
