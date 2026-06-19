import { Link } from 'react-router-dom';
import { ExternalLink, Terminal } from 'lucide-react';
import portfolioData from '../../data/portfolio.json';

interface Project {
  id?: string;
  name: string;
  image?: string;
  video?: string;
  notes?: string;
  overview?: string[];
  technologies?: string[];
  link?: string;
}

export default function Projects() {
  const projects = portfolioData.projects;

  return (
    <div className="flex-grow flex flex-col pt-12 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 mb-4">My projects</h1>
        <p className="text-zinc-400 max-w-2xl leading-relaxed">
          These are some of the projects I have created and worked on. Each project reflects a unique challenge and a valuable learning experience.
        </p>
      </div>

      {projects && projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: Project, index: number) => (
            <div key={index} className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="w-full h-48 bg-zinc-950 relative border-b border-zinc-800 overflow-hidden">
                {project.video ? (
                  <video 
                    src={project.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-700">
                    <Terminal size={40} />
                  </div>
                )}
              </div>
              
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-zinc-100 mb-2">{project.name}</h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.notes || (project.overview && project.overview[0])}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies && project.technologies.map((tech: string, i: number) => (
                    <span key={i} className="px-2.5 py-1 bg-zinc-800/80 text-zinc-300 text-[11px] font-semibold tracking-wide uppercase rounded-md border border-zinc-700/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex justify-end gap-3">
                  {project.id && (
                    <Link 
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-300 hover:text-zinc-100 text-xs font-medium rounded transition-colors border border-zinc-700/30"
                    >
                      Details
                    </Link>
                  )}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 text-xs font-medium rounded transition-colors border border-indigo-500/20"
                    >
                      View App
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
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
