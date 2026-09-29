import foliumImg from '../assets/img/folium.jpg';
import locarenasImg from '../assets/img/locarenas.jpg';
import { IconCheck, IconExternal, IconSearch } from './Icons';

const quitoBullets = [
  'Painel do mês com quanto ainda falta pagar',
  'Entradas, saídas e contas parceladas',
  'Assistente de IA que sugere o que quitar primeiro',
  'Modo compartilhado para dividir as contas da casa',
];

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container projects">
        <div className="section__head">
          <span className="eyebrow">03 · Projetos</span>
          <h2 className="section__title">O que eu construí</h2>
        </div>

        {/* Destaque: Quitô */}
        <article className="card featured">
          <div className="featured__col">
            <span className="featured__badge">Projeto em destaque</span>
            <h3 className="featured__title">Quitô</h3>
            <p>App de finanças pessoais: você anota as contas do mês, enxerga para onde vai o dinheiro e recebe ajuda de uma IA para priorizar o que pagar primeiro.</p>
            <ul>
              {quitoBullets.map((b) => (
                <li key={b}><IconCheck />{b}</li>
              ))}
            </ul>
            <div className="tags">
              <span className="tag">React</span><span className="tag">TypeScript</span>
              <span className="tag">Supabase</span><span className="tag">IA</span>
            </div>
            <div>
              <a href="https://quito.lovable.app/" className="btn btn--primary" target="_blank" rel="noreferrer">
                Ver online <IconExternal />
              </a>
            </div>
          </div>

          {/* mock do painel (dados de exemplo) */}
          <div className="qmock" aria-hidden="true">
            <div className="qmock__bar">
              <span className="qmock__logo"><IconCheck /></span>
              <span className="qmock__name"><b>Quitô</b><span>Dívidas</span></span>
              <span className="qmock__nav"><span className="on">Início</span><span>Contas</span><span>Assistente</span></span>
            </div>
            <div className="qmock__body">
              <div className="qmock__hero">
                <small>Falta pagar neste mês</small>
                <b>R$ 480,00</b>
                <div className="qbar"><i style={{ width: '90%' }}></i></div>
                <small>Já quitado: R$ 4.320 de R$ 4.800 (90%)</small>
                <div className="qmock__io">
                  <div><small>Entra</small><b>R$ 5.000</b></div>
                  <div><small>Sai</small><b>R$ 4.800</b></div>
                </div>
              </div>
              <div className="qmock__row">
                <div><div className="t">Aluguel</div><div className="s">vence 05/10</div></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span className="t">R$ 1.200</span><span className="q">Quitei</span></div>
              </div>
              <div className="qmock__row">
                <div><div className="t">Cartão</div><div className="s">parcela 2 de 6</div></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span className="t">R$ 300</span><span className="q">Quitei</span></div>
              </div>
            </div>
          </div>
        </article>

        {/* Grade */}
        <div className="pgrid">
          {/* MarkusApp */}
          <article className="card pcard">
            <div className="mk" aria-hidden="true">
              <div className="mk__top"><b>Padaria</b><span>4 itens</span></div>
              <div className="mk__budget">
                <div className="l"><span>Orçamento</span><b>76%</b></div>
                <div className="mkbar"><i style={{ width: '76%' }}></i></div>
                <div className="v"><strong>R$ 38,00</strong><span style={{ color: 'var(--muted)' }}>/ R$ 50,00</span></div>
              </div>
              <div className="mk__row">
                <span className="mk__ck"><IconCheck /></span>
                <span className="done">pão</span><span className="val">R$ 7,00</span>
              </div>
              <div className="mk__row">
                <span className="mk__ck off"></span>
                <span>café</span><span className="val b">R$ 13,00</span>
              </div>
            </div>
            <div className="pcard__body">
              <h3>MarkusApp</h3>
              <p>Lista de compras com orçamento, busca editável, entrada por voz e aviso de item repetido.</p>
              <div className="tags"><span className="tag">React</span><span className="tag">TypeScript</span></div>
              <div className="pcard__links">
                <a href="https://markusapp.lovable.app/" target="_blank" rel="noreferrer">Ver online ↗</a>
              </div>
            </div>
          </article>

          {/* Folium */}
          <article className="card pcard">
            <div className="pcard__thumb"><img src={foliumImg} alt="Tela do Folium" loading="lazy" /></div>
            <div className="pcard__body">
              <h3>Folium</h3>
              <p>Biblioteca pessoal para organizar livros em listas de lidos, quero ler e favoritos.</p>
              <div className="tags"><span className="tag">React</span><span className="tag">TypeScript</span></div>
              <div className="pcard__links">
                <a href="https://folium-library.vercel.app/" target="_blank" rel="noreferrer">Ver online ↗</a>
                <a href="https://github.com/Gerald0Juni0r/folium-library" className="muted" target="_blank" rel="noreferrer">Código</a>
              </div>
            </div>
          </article>

          {/* Cinezy */}
          <article className="card pcard">
            <div className="cz" aria-hidden="true">
              <div className="cz__top">
                <b>cine<i>zy</i></b>
                <span className="cz__pills"><span className="on">Todos</span><span className="off">Filmes</span></span>
              </div>
              <div className="cz__search"><IconSearch /> Buscar filmes e séries</div>
              <div className="cz__grid">
                <i style={{ background: 'linear-gradient(160deg,#3F2A6B,#1B1330)' }}></i>
                <i style={{ background: 'linear-gradient(160deg,#7C2D12,#2A1206)' }}></i>
                <i style={{ background: 'linear-gradient(160deg,#0E4C63,#07202B)' }}></i>
                <i style={{ background: 'linear-gradient(160deg,#3F6212,#16250A)' }}></i>
                <i style={{ background: 'linear-gradient(160deg,#7A1733,#2C0713)' }}></i>
              </div>
            </div>
            <div className="pcard__body">
              <h3>Cinezy</h3>
              <p>App para descobrir filmes e séries, montar listas, avaliar e acompanhar episódios com amigos.</p>
              <div className="tags"><span className="tag">React</span><span className="tag">Supabase</span></div>
              <span className="pcard__note">Projeto pessoal, de uso privado</span>
            </div>
          </article>

          {/* LocArenas */}
          <article className="card pcard">
            <div className="pcard__thumb"><img src={locarenasImg} alt="Tela do LocArenas" loading="lazy" /></div>
            <div className="pcard__body">
              <h3>LocArenas</h3>
              <p>Plataforma para reservar e alugar campos de futebol society.</p>
              <div className="tags"><span className="tag">React</span><span className="tag">Supabase</span></div>
              <div className="pcard__links">
                <a href="https://locarenas.lovable.app/" target="_blank" rel="noreferrer">Ver online ↗</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
