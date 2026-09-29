import { IconCode, IconServer, IconCpu, IconTool } from './Icons';

const groups = [
  { title: 'Frontend', icon: <IconCode />, items: ['HTML e CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'] },
  { title: 'Backend & Dados', icon: <IconServer />, items: ['Python', 'Node.js', 'Java', 'PostgreSQL', 'Supabase'] },
  { title: 'IA & Dados', icon: <IconCpu />, items: ['Visão Computacional', 'Deep Learning', 'OpenCV', 'Jupyter'] },
  { title: 'Ferramentas', icon: <IconTool />, items: ['Git e GitHub', 'Docker', 'Linux', 'AWS', 'Figma'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Skills</span>
          <h2 className="section__title">Minhas skills</h2>
        </div>

        <div className="skills">
          {groups.map((g) => (
            <div className="card skill" key={g.title}>
              <div className="skill__head">{g.icon}<h3>{g.title}</h3></div>
              <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
