import { Briefcase, GraduationCap } from 'lucide-react';
import portfolioData from '../../data/portfolio.json';

export default function About() {
  const { summary } = portfolioData.basics;
  const { experience, education } = portfolioData;

  return (
    <div className="flex-grow flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100">Sobre mí</h1>
        <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed">
          {summary}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        {/* Experiencia */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
            <Briefcase className="text-indigo-400" />
            <h2 className="text-2xl font-semibold text-zinc-100 m-0">Experiencia Laboral</h2>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="space-y-2 group">
                <div className="flex justify-between items-start gap-4 flex-col sm:flex-row">
                  <div>
                    <h3 className="text-xl font-medium text-zinc-200">{exp.position}</h3>
                    <p className="text-indigo-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-400">
                  {exp.description.map((desc, j) => (
                    <li key={j} className="leading-relaxed pl-1">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Educación */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
            <GraduationCap className="text-indigo-400" />
            <h2 className="text-2xl font-semibold text-zinc-100 m-0">Educación</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-start gap-4 flex-col sm:flex-row">
                  <div>
                    <h3 className="text-xl font-medium text-zinc-200">{edu.degree}</h3>
                    <p className="text-indigo-400 font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
