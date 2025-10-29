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
            Soy David López, consultor técnico y desarrollador full-stack. Me especializo en crear soluciones web claras, modulares y profesionales, con foco en la experiencia del usuario y la calidad estructural del código. Cada proyecto que entrego está pensado para escalar, integrarse fácilmente y mantenerse en el tiempo.
          </p>

          <p>
            Trabajo tanto en frontend como en backend, combinando diseño responsivo, jerarquía visual y lógica robusta. Me obsesiona la estabilidad visual, la navegación fluida y los detalles que hacen que una interfaz se sienta profesional. No me conformo con que “funcione”: tiene que sentirse bien.
          </p>

          <p>
            Además de desarrollar, coordino equipos y entrego soluciones completas: desde la estructura técnica hasta el producto claro y listo para el cliente. Me gusta iterar, refinar y encontrar el punto justo entre lo técnico y lo humano. No vendo humo: entrego resultados.
          </p>

          <div className="skills-grid">
            <div className="skill-item"><span>React</span></div>
            <div className="skill-item"><span>JavaScript</span></div>
            <div className="skill-item"><span>Node.js</span></div>
            <div className="skill-item"><span>PostgreSQL</span></div>
            <div className="skill-item"><span>Next.js</span></div>           
            <div className="skill-item"><span>Team coordination</span></div>
            <div className="skill-item"><span>Documentación técnica</span></div>
          </div>
        </div>

        <div className="about-image">
          <div className="about-photo" style={{ position: 'relative', overflow: 'hidden' }}>
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
