import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import portfolioData from '../../data/portfolio.json';

export default function Home() {
  const { name, title, summary, picture } = portfolioData.basics;
  const skills = portfolioData.skills;

  return (
    <div className="flex-grow flex flex-col justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      <div className="flex flex-col-reverse md:flex-row gap-12 items-center justify-between">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-100">
              Hola, soy <span className="text-indigo-400">{name.split(' ')[0]}</span>.
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-400">
              {title}
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
              {summary}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/cv.pdf" 
              download="CV_Moris_David_Allan_Arias.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors"
            >
              <Download size={20} />
              Descargar CV
            </a>
            <Link 
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium rounded-lg transition-colors"
            >
              Ver Proyectos
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="pt-8 border-t border-zinc-800/50">
            <p className="text-sm text-zinc-500 font-medium mb-4 uppercase tracking-wider">Tecnologías Principales</p>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 relative group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img 
            src={picture} 
            alt={name} 
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-zinc-800 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
