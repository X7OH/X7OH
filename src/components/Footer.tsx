import portfolioData from '../data/portfolio.json';

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/50 py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} {portfolioData.basics.name}. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href={portfolioData.basics.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
          <a href={`mailto:${portfolioData.basics.email}`} className="hover:text-indigo-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
