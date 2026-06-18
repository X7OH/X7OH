import { Link } from 'react-router-dom';
import { Download, ArrowRight, Briefcase, Building, Package, ArrowUpRight } from 'lucide-react';
import portfolioData from '../../data/portfolio.json';
import { FaJava, FaPython, FaDocker, FaLinux, FaGitAlt, FaGithub, FaDatabase, FaCogs, FaBox, FaChartBar, FaProjectDiagram } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';

export default function Home() {
  const { name, title, summary, picture } = portfolioData.basics;
  const experience = portfolioData.experience;

  const skillsList = [
    { name: "Java (Java EE)", icon: <FaJava className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-lg" /> },
    { name: "Python", icon: <FaPython className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-lg" /> },
    { name: "SQL", icon: <FaDatabase className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-lg" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-lg" /> },
    { name: "Openbravo", icon: <FaBox className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-lg" /> },
    { name: "Odoo", icon: <FaCogs className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-lg" /> },
    { name: "Docker", icon: <FaDocker className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-lg" /> },
    { name: "Linux", icon: <FaLinux className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-lg" /> },
    { name: "Git", icon: <FaGitAlt className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-lg" /> },
    { name: "GitHub", icon: <FaGithub className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-lg" /> },
    { name: "N8N", icon: <FaProjectDiagram className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-lg" /> },
    { name: "Metabase", icon: <FaChartBar className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-lg" /> }
  ];

  return (
    <div className="flex-grow flex flex-col pt-12 pb-24">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row gap-12 items-center justify-between mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-100">
              Hi, I'm <span className="text-indigo-400">{name.split(' ')[0]}</span>.
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
              Download CV
            </a>
            <Link 
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium rounded-lg transition-colors"
            >
              View Projects
              <ArrowRight size={20} />
            </Link>
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

      {/* Work Experience Section */}
      <div className="space-y-8 mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
        <h2 className="text-2xl font-bold text-zinc-100">Work experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10">
          {experience.map((exp, i) => (
            <div key={i} className="flex gap-5 group">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 bg-zinc-800/40 rounded flex items-center justify-center border border-zinc-700/50 group-hover:border-zinc-600 transition-colors">
                  {i === 0 ? <Briefcase className="text-indigo-400" size={20} /> : i === 1 ? <Building className="text-emerald-400" size={20} /> : <Package className="text-amber-400" size={20} />}
                </div>
              </div>
              <div>
                <h3 className="text-zinc-100 font-semibold text-[17px] mb-1">{exp.company}</h3>
                <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-3">{exp.period}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  <span className="text-zinc-300">{exp.position}</span>. {exp.description[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl font-bold text-zinc-100">Technologies I work with</h2>
          <Link to="/about" className="text-zinc-500 hover:text-zinc-300 text-sm flex items-center gap-1 transition-colors mt-1">
            More <ArrowUpRight size={14} />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-8">
          {skillsList.map((skill, i) => (
            <div key={i} className="flex items-center gap-3 group cursor-default">
              {skill.icon}
              <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors text-[15px] font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
