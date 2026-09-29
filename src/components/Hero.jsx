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
  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true"></div>
      <div className="hero__glow2" aria-hidden="true"></div>

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

        <div className="codecard">
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
