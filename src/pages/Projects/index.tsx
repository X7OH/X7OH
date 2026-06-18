import { ExternalLink, Terminal } from 'lucide-react';
import portfolioData from '../../data/portfolio.json';

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <div className="flex-grow flex flex-col pt-12 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      {projects && projects.length > 0 ? (
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
                  {project.name}
                </h1>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 text-sm font-medium rounded-md transition-colors border border-zinc-700/50"
                  >
                    Go to website
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              
              <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-auto object-cover border-b border-zinc-800"
                />
              </div>

              {project.notes && (
                <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/40">
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
          ))}
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center p-12 border-2 border-dashed border-zinc-800 rounded-2xl mt-12">
          <div className="flex flex-col items-center text-center space-y-4 text-zinc-500">
            <div className="p-4 bg-zinc-900 rounded-full">
              <Terminal size={32} />
            </div>
            <div>
              <h3 className="text-lg font-medium text-zinc-300">Coming soon</h3>
              <p className="mt-1">New personal projects will be available here.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
