import Image from 'next/image';
import React from 'react';
import profilePic from '../../../public/david.png';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>Sobre Mí</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            Soy David López, desarrollador full-stack en Mendoza, Argentina. Trabajo de punta a punta: modelo de datos y API con FastAPI y PostgreSQL, interfaz con React, Next.js y TypeScript, y despliegue en Vercel o Render. Mis proyectos más completos son un tracker de postulaciones con backend con JWT y tests, y una app de gestión de torneos sobre Firebase.
          </p>

          <p>
            Me importa que la interfaz sea estable y fluida, y que los casos que importan tengan tests: en TrackFolio, por ejemplo, los de autenticación y aislamiento entre usuarios. El código de la mayoría de mis proyectos está a la vista en GitHub (cubo1991).
          </p>

          <p>
            Además de desarrollar, coordino equipos y entrego soluciones completas: desde la estructura técnica hasta el producto claro y listo para el cliente. Me gusta iterar, refinar y encontrar el punto justo entre lo técnico y lo humano. No vendo humo: entrego resultados.
          </p>

          <div className="skills-grid">
            <div className="skill-item"><span>React</span></div>
            <div className="skill-item"><span>JavaScript</span></div>
            <div className="skill-item"><span>PostgreSQL</span></div>
            <div className="skill-item"><span>Next.js</span></div>
            <div className="skill-item"><span>TypeScript</span></div>
            <div className="skill-item"><span>FastAPI</span></div>
            <div className="skill-item"><span>Team coordination</span></div>
            <div className="skill-item"><span>Documentación técnica</span></div>
          </div>
        </div>

        <div className="about-image">
          <div className="about-photo" style={{ position: 'relative', overflow: 'hidden' }}>
  {/* @ts-ignore: layout/objectFit son props legacy de next/image, se preserva el comportamiento actual */}
  <Image
    src={profilePic}
    alt="David López"
    layout="fill"
    objectFit="cover"
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
