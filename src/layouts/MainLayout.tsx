import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-indigo-500/30">
      <Navbar />
      <main className="flex-grow w-full max-w-5xl mx-auto px-6 py-8 sm:py-12 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
