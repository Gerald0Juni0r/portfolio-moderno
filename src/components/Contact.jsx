import { IconLinkedIn, IconGitHub } from './Icons';

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="contact">
          <div>
            <h2>Vamos conversar?</h2>
            <p>Estou aberto a estágio, vagas júnior e projetos em desenvolvimento web ou Python.</p>
          </div>
          <div className="contact__btns">
            <a href="https://www.linkedin.com/in/gerald0juni0r/" className="fill" target="_blank" rel="noreferrer">
              <IconLinkedIn /> LinkedIn
            </a>
            <a href="https://github.com/Gerald0Juni0r" className="out" target="_blank" rel="noreferrer">
              <IconGitHub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
