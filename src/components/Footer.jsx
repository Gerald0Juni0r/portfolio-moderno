export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} Geraldo Júnior</span>
        <span>Feito com React · geraldo.is-a.dev</span>
      </div>
    </footer>
  );
}
