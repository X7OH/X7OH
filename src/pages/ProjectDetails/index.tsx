import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Terminal, ArrowLeft } from 'lucide-react';
import portfolioData from '../../data/portfolio.json';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center p-12 text-zinc-500">
        <Terminal size={48} className="mb-4 text-zinc-700" />
        <h2 className="text-2xl font-bold text-zinc-300">Project not found</h2>
        <Link to="/projects" className="mt-4 text-indigo-400 hover:text-indigo-300">
          Return to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col pt-12 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      <div className="mb-8">
        <Link to="/projects" className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-200 transition-colors text-sm font-medium">
          <ArrowLeft size={16} />
          Back to projects
        </Link>
      </div>

      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
            {project.name}
          </h1>
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 text-sm font-medium rounded-md transition-colors border border-zinc-700/50 whitespace-nowrap"
            >
              Go to website
              <ExternalLink size={14} />
            </a>
          )}
        </div>
        
        <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
          {project.video ? (
            <video 
              src={project.video} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto max-h-[600px] object-contain border-b border-zinc-800"
            />
          ) : project.image ? (
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-auto max-h-[600px] object-cover border-b border-zinc-800"
            />
          ) : null}
        </div>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech: string, i: number) => (
              <span key={i} className="px-3 py-1.5 bg-zinc-800 text-zinc-200 text-xs font-semibold tracking-wide uppercase rounded-md border border-zinc-700">
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.notes && (
          <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40 mt-8">
            <h3 className="text-xl font-semibold text-zinc-100 mb-2">Notes</h3>
            <p className="text-zinc-400 leading-relaxed text-[15px]">
              {project.notes}
            </p>
          </div>
        )}

        {project.overview && project.overview.length > 0 && (
          <div className="space-y-6 pt-4">
            <h2 className="text-2xl font-bold text-zinc-100">Overview</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              {(project.overview as string[]).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
