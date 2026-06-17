import { Mail, MapPin, Phone } from 'lucide-react';
import portfolioData from '../../data/portfolio.json';

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Contact() {
  const { email, phone, linkedin } = portfolioData.basics;

  const contacts = [
    {
      icon: <Mail className="text-indigo-400" size={24} />,
      label: 'Email',
      value: email,
      href: `mailto:${email}`
    },
    {
      icon: <Phone className="text-indigo-400" size={24} />,
      label: 'Teléfono',
      value: phone,
      href: `tel:${phone.replace(/\s+/g, '')}`
    },
    {
      icon: <LinkedinIcon className="text-indigo-400" size={24} />,
      label: 'LinkedIn',
      value: 'david-allan-arias',
      href: linkedin
    },
    {
      icon: <MapPin className="text-indigo-400" size={24} />,
      label: 'Ubicación',
      value: 'Ecuador',
      href: null
    }
  ];

  return (
    <div className="flex-grow flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      <div className="space-y-4 mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100">Contacto</h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          ¿Interesado en colaborar o tienes alguna pregunta? No dudes en contactarme a través de cualquiera de los siguientes medios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((contact, i) => (
          contact.href ? (
            <a 
              key={i}
              href={contact.href}
              target={contact.label === 'LinkedIn' ? '_blank' : undefined}
              rel={contact.label === 'LinkedIn' ? 'noreferrer' : undefined}
              className="flex items-center gap-6 p-6 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 rounded-2xl transition-all group"
            >
              <div className="p-4 bg-zinc-950 rounded-xl group-hover:scale-110 transition-transform">
                {contact.icon}
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-medium mb-1">{contact.label}</p>
                <p className="text-lg text-zinc-200 group-hover:text-indigo-400 transition-colors">{contact.value}</p>
              </div>
            </a>
          ) : (
            <div 
              key={i}
              className="flex items-center gap-6 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl"
            >
              <div className="p-4 bg-zinc-950 rounded-xl">
                {contact.icon}
              </div>
              <div>
                <p className="text-sm text-zinc-500 font-medium mb-1">{contact.label}</p>
                <p className="text-lg text-zinc-200">{contact.value}</p>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
