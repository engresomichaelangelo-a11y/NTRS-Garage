import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'Contact', path: '/#contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-2xl font-black tracking-tighter text-white">
            NTRS<span className="text-brand">.</span>GARAGE
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            item.path.startsWith('/#') && isHomePage ? (
              <a 
                key={item.name} 
                href={item.path.substring(1)} 
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`text-[11px] font-bold uppercase tracking-[0.2em] hover:text-white transition-colors ${location.pathname === item.path ? 'text-white' : 'text-white/60'}`}
              >
                {item.name}
              </Link>
            )
          ))}
          <Link 
            to="/#booking"
            className="px-6 py-2 border border-brand text-brand hover:bg-brand hover:text-black transition-all duration-300 font-bold uppercase tracking-[0.2em] text-[11px]"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                item.path.startsWith('/#') && isHomePage ? (
                  <a 
                    key={item.name} 
                    href={item.path.substring(1)} 
                    className="text-lg font-medium tracking-wide border-b border-white/5 pb-2"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    className="text-lg font-medium tracking-wide border-b border-white/5 pb-2"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link 
                to="/#booking"
                className="mt-4 px-6 py-4 bg-brand text-black font-bold text-center uppercase tracking-widest rounded-sm"
                onClick={toggleMenu}
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
