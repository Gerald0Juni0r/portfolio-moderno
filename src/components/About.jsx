import foto from '../assets/img/foto.jpg';
import { IconPin } from './Icons';

const stack = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML e CSS'] },
  { title: 'Backend & Dados', items: ['Python', 'Node.js', 'Java', 'PostgreSQL', 'Supabase'] },
  { title: 'IA', items: ['Visão Computacional', 'Deep Learning', 'OpenCV', 'Jupyter'] },
  { title: 'Ferramentas', items: ['Git e GitHub', 'Docker', 'Linux', 'AWS', 'Figma'] },
];

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">01 · Sobre</span>
          <h2 className="section__title">Quem sou</h2>
        </div>

        <div className="bento">
          <div className="card bento__about">
            <p className="lead">Sou desenvolvedor de Recife, bacharel em Ciência da Computação e estudante de Análise e Desenvolvimento de Sistemas na CESAR School.</p>
            <p>Hoje atuo em pesquisa e desenvolvimento, criando soluções em Python com inteligência artificial. Em paralelo, construo aplicações web com React, TypeScript e Supabase, do layout ao banco de dados.</p>
            <p>Já passei por estágios em engenharia de sistemas e em dados na nuvem, o que me deu base em documentação técnica, análise de dados e metodologias ágeis.</p>
          </div>

          <div className="bento__photo">
            <img src={foto} alt="Geraldo Júnior" />
            <span><IconPin /> Recife, PE</span>
          </div>

          <div className="card bento__stack">
            <h3>Stack</h3>
            <div className="stackgrid">
              {stack.map((c) => (
                <div key={c.title}>
                  <h4>{c.title}</h4>
                  <div className="tags">
                    {c.items.map((i) => <span key={i} className="chip">{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card bento__edu">
            <h3>Formação</h3>
            <div className="edu-item">
              <strong>Análise e Desenvolvimento de Sistemas</strong>
              <span>CESAR School · em andamento</span>
            </div>
            <hr />
            <div className="edu-item">
              <strong>Ciência da Computação</strong>
              <span>UNINASSAU · bacharelado concluído</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
