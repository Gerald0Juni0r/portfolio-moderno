const data = [
  {
    tag: 'Atual', now: true,
    role: 'Bolsista de Pesquisa e Desenvolvimento',
    desc: 'Soluções em Python com inteligência artificial para um projeto de pesquisa aplicada.',
    tags: ['Python', 'Visão Computacional', 'Deep Learning'],
  },
  {
    tag: 'Estágio', now: false,
    role: 'Engenharia de Sistemas',
    desc: 'Modelagem baseada em modelos (MBSE), análise de riscos e documentação técnica.',
    tags: ['MBSE', 'Análise de riscos', 'Documentação'],
  },
  {
    tag: 'Estágio', now: false,
    role: 'Engenharia de Dados na Nuvem',
    desc: 'Análise de dados com serviços da AWS, em equipe e com metodologias ágeis.',
    tags: ['AWS', 'Análise de dados', 'Ágil'],
  },
];

export default function Experience() {
  return (
    <section id="trajetoria" className="section">
      <div className="container">
        <div className="section__head reveal">
          <span className="eyebrow">02 · Trajetória</span>
          <h2 className="section__title">Por onde passei</h2>
        </div>

        <div className="timeline reveal">
          {data.map((it) => (
            <div className="tl-item" key={it.role}>
              <span className={`tl-dot ${it.now ? 'now' : 'past'}`}></span>
              <div className={`card tl-card ${it.now ? 'now' : ''}`}>
                <em>{it.tag}</em>
                <h3>{it.role}</h3>
                <p>{it.desc}</p>
                <div className="tags">
                  {it.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
