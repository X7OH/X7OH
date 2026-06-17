import { NavLink } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-zinc-100 hover:text-indigo-400 transition-colors">
          <Terminal size={24} className="text-indigo-500" />
          <span className="font-bold tracking-tight">Stitch Dev</span>
        </NavLink>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  'text-sm font-medium transition-colors hover:text-indigo-400',
                  isActive ? 'text-indigo-400' : 'text-zinc-400'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
