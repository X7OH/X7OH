import { Terminal } from 'lucide-react';

export default function Projects() {
  return (
    <div className="flex-grow flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100">Proyectos</h1>
        <p className="text-lg text-zinc-400 max-w-2xl">
          Actualmente me encuentro trabajando en nuevos proyectos. Los proyectos mencionados en mi experiencia profesional pertenecen a entornos empresariales privados y no están disponibles públicamente.
        </p>
      </div>

      <div className="flex-grow flex items-center justify-center p-12 border-2 border-dashed border-zinc-800 rounded-2xl">
        <div className="flex flex-col items-center text-center space-y-4 text-zinc-500">
          <div className="p-4 bg-zinc-900 rounded-full">
            <Terminal size={32} />
          </div>
          <div>
            <h3 className="text-lg font-medium text-zinc-300">Próximamente</h3>
            <p className="mt-1">Nuevos proyectos personales estarán disponibles aquí.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
