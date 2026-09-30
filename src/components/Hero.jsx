import { useRef, useEffect } from 'react';
import foto from '../assets/img/foto.jpg';
import { IconArrow, IconLinkedIn, IconGitHub } from './Icons';

const codeHtml = [
  '<span class="tk-kw">class</span> <span class="tk-cls">Geraldo</span>(<span class="tk-fn">Dev</span>):',
  '    stack = [<span class="tk-str">"Python"</span>, <span class="tk-str">"React"</span>,',
  '             <span class="tk-str">"TypeScript"</span>, <span class="tk-str">"Supabase"</span>]',
  '    foco = <span class="tk-str">"IA aplicada + web"</span>',
  '    base = <span class="tk-str">"Recife, PE"</span>',
  '',
  '    <span class="tk-kw">def</span> <span class="tk-fn">busca</span>(self):',
  '        <span class="tk-kw">return</span> [<span class="tk-str">"estágio"</span>, <span class="tk-str">"júnior"</span>]',
].join('\n');

export default function Hero() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduce || !fine) return;

    const section = sectionRef.current;
    const bg = bgRef.current;
    const card = tiltRef.current;

    // brilhos seguem o mouse (parallax suave)
    const onSectionMove = (e) => {
      const r = section.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      if (bg) bg.style.transform = `translate(${px * 40}px, ${py * 40}px)`;
    };
    const onSectionLeave = () => {
      if (bg) bg.style.transform = '';
    };

    // tilt 3D no cartão de código
    const onCardMove = (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`;
    };
    const onCardLeave = () => {
      card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
    };

    section.addEventListener('mousemove', onSectionMove);
    section.addEventListener('mouseleave', onSectionLeave);
    if (card) {
      card.addEventListener('mousemove', onCardMove);
      card.addEventListener('mouseleave', onCardLeave);
    }
    return () => {
      section.removeEventListener('mousemove', onSectionMove);
      section.removeEventListener('mouseleave', onSectionLeave);
      if (card) {
        card.removeEventListener('mousemove', onCardMove);
        card.removeEventListener('mouseleave', onCardLeave);
      }
    };
  }, []);

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero__bg" ref={bgRef} aria-hidden="true">
        <div className="hero__glow"></div>
        <div className="hero__glow2"></div>
      </div>

      <div className="container hero__grid">
        <div className="hero__col">
          <span className="hero__badge"><i></i>Aberto a estágio e vagas júnior</span>
          <p className="hero__greet">Olá, eu sou</p>
          <h1 className="hero__name highlight">Geraldo Júnior</h1>
          <p className="hero__role">Desenvolvedor Python &amp; Web</p>
          <p className="hero__desc">
            Crio aplicações web com React e TypeScript e soluções em Python com
            inteligência artificial. Baseado em Recife, PE.
          </p>
          <div className="hero__buttons">
            <a href="#projetos" className="btn btn--primary">Ver projetos <IconArrow /></a>
            <a href="#contato" className="btn btn--ghost">Entre em contato</a>
          </div>
          <div className="hero__socials">
            <a href="https://www.linkedin.com/in/gerald0juni0r/" className="icon-btn" target="_blank" rel="noreferrer" aria-label="LinkedIn"><IconLinkedIn /></a>
            <a href="https://github.com/Gerald0Juni0r" className="icon-btn" target="_blank" rel="noreferrer" aria-label="GitHub"><IconGitHub /></a>
          </div>
        </div>

        <div className="codecard" ref={tiltRef}>
          <div className="codecard__window">
            <div className="codecard__bar">
              <i className="r"></i><i className="y"></i><i className="g"></i>
              <span>geraldo.py</span>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: codeHtml }} />
          </div>
          <img className="codecard__photo" src={foto} alt="Foto de Geraldo Júnior" />
        </div>
      </div>
    </section>
  );
}
