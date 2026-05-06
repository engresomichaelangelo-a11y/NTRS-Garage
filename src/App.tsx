/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Youtube, 
  ChevronRight, Star, Clock, ShieldCheck, Zap, Droplets, 
  Camera, ArrowRight, CheckCircle2, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    id: 'basic',
    name: 'Full Bike Cleaning',
    price: '$199',
    description: 'A comprehensive deep clean for your daily rider.',
    features: ['Snow foam wash', 'Chain cleaning & lube', 'Basic detailing', 'Tire shine', 'Blow dry'],
    icon: <Droplets className="w-6 h-6 text-brand" />
  },
  {
    id: 'paint',
    name: 'Paint Correction',
    price: '$349',
    description: 'Remove swirls and scratches to restore that factory gloss.',
    features: ['Single-stage polish', 'Light scratch removal', 'Decontamination', 'Gloss enhancement'],
    icon: <Zap className="w-6 h-6 text-brand" />
  },
  {
    id: 'ceramic',
    name: 'Ceramic Coating',
    price: '$599',
    description: 'Ultimate long-term protection with 2-year hydrophobic coating.',
    features: ['Prep wash', 'Paint refinement', 'Graphene infusion', 'Water spot protection'],
    icon: <ShieldCheck className="w-6 h-6 text-brand" />
  },
  {
    id: 'engine',
    name: 'Engine Detailing',
    price: '$249',
    description: 'Detailed cleaning of the heart of your machine.',
    features: ['Degreasing', 'Mechanical scrubbing', 'Heat-shield polish', 'Chrome restoration'],
    icon: <ShieldCheck className="w-6 h-6 text-brand" />
  },
  {
    id: 'leather',
    name: 'Leather Care',
    price: '$129',
    description: 'Preserve and condition your seats and saddlebags.',
    features: ['PH neutral cleaning', 'Almond oil conditioning', 'UV protection', 'Soft brush agitation'],
    icon: <CheckCircle2 className="w-6 h-6 text-brand" />
  },
  {
    id: 'showroom',
    name: 'Showroom Package',
    price: '$899',
    description: 'The complete transformation for concourse-level results.',
    features: ['Everything above', 'Disassembly cleaning', 'Full restoration', 'Concours wax finish'],
    icon: <Star className="w-6 h-6 text-brand" />
  }
];

const TESTIMONIALS = [
  {
    name: "James Wilson",
    bike: "Ducati Panigale V4",
    text: "NTRS Garage took my track bike and made it look brand new. The ceramic coating is insane – dust literally just slides off.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    name: "Sarah Chen",
    bike: "BMW R 1250 GS",
    text: "I take my GS off-road frequently. After a session at NTRS, all that grit and mud was gone. The attention to detail in the nooks and crannies is amazing.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Marcus Rodriguez",
    bike: "Harley Davidson Fat Boy",
    text: "The chrome restoration they did on my Fat Boy is unbelievable. It's got that mirror finish again. Highly recommend the engine detailing.",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  }
];

const GALLERY_IMAGES = [
  { id: 1, category: 'Transformation', url: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80', title: 'Before & After' },
  { id: 2, category: 'Detailing', url: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=800&q=80', title: 'Close-up Detail' },
  { id: 3, category: 'Paint', url: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80', title: 'Gloss Enhancement' },
  { id: 4, category: 'Engine', url: 'https://images.unsplash.com/photo-1558380838-04ff54289066?w=800&q=80', title: 'Engine Restoration' },
  { id: 5, category: 'Workshop', url: 'https://images.unsplash.com/photo-1563814419166-d4ac1e0ac553?w=800&q=80', title: 'NTRS Studio' },
  { id: 6, category: 'Ceramic', url: 'https://images.unsplash.com/photo-1621259182978-f09e5e2ca93e?w=800&q=80', title: 'Ceramic Protection' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const categories = ['All', ...new Set(GALLERY_IMAGES.map(img => img.category))];
  const filteredImages = activeCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-black tracking-tighter text-white">
              NTRS<span className="text-brand">.</span>GARAGE
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
                id={`nav-${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
            <a 
              href="#booking"
              className="px-6 py-2 border border-brand text-brand hover:bg-brand hover:text-black transition-all duration-300 font-bold uppercase tracking-[0.2em] text-[11px]"
              id="nav-book-now"
            >
              BOOK NOW
            </a>
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
                {['Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-lg font-medium tracking-wide border-b border-white/5 pb-2"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                ))}
                <a 
                  href="#booking"
                  className="mt-4 px-6 py-4 bg-brand text-black font-bold text-center uppercase tracking-widest rounded-sm"
                  onClick={toggleMenu}
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070"
            alt="Premium Detailing Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50"></div>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start text-left max-w-5xl"
          >
            <div className="absolute top-0 right-0 text-[180px] font-black text-white/5 select-none leading-none -translate-y-1/2 md:block hidden">
              PREMIUM<br/>EST. 2019
            </div>
            
            <span className="section-title">
              Est. 2019 / Premium Studio
            </span>
            <h1 className="heading-huge mb-8">
              ELEVATE<br/>YOUR <span className="text-brand">RIDE.</span>
            </h1>
            <p className="max-w-md text-white/60 text-lg md:text-xl mb-12 leading-relaxed">
              The highest standard in motorcycle detailing. From ceramic coatings to full restoration, we treat every machine as a masterpiece.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              <a 
                href="#booking" 
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3"
                id="hero-cta-book"
              >
                BOOK APPOINTMENT
              </a>
              <a 
                href="#services" 
                className="btn-secondary w-full sm:w-auto"
                id="hero-cta-services"
              >
                EXPLORE SERVICES
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }} 
              transition={{ repeat: Infinity, duration: 2 }} 
              className="absolute top-0 left-0 w-full h-1/4 bg-brand"
            />
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 border-y border-white/5 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Bikes Detailed', value: '1,200+' },
              { label: 'Five Star Rating', value: '5.0' },
              { label: 'Year Warranty', value: '8+' },
              { label: 'Ceramic Coatings', value: '300+' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center md:flex-row md:gap-12 w-full">
                <div className="text-center md:text-left">
                  <div className="text-4xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</div>
                </div>
                {i < 3 && <div className="hidden md:block h-10 w-px bg-white/20 mx-4"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 mb-20 text-left">
          <span className="section-title">Exclusive Mastery</span>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter">FEATURED SERVICES<span className="text-brand">.</span></h2>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-white/10">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-10 border-r border-b border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 group relative"
              id={`service-card-${service.id}`}
            >
              <div className="mb-10 flex justify-between items-start">
                <div className="p-3 border border-white/10 group-hover:border-brand/40 transition-colors">
                  {service.icon}
                </div>
                <div className="text-xl font-bold font-mono text-brand italic">{service.price}</div>
              </div>
              <h3 className="text-2xl font-black italic tracking-tight mb-4 group-hover:text-brand transition-colors uppercase">{service.name}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8 h-12">
                {service.description}
              </p>
              <ul className="space-y-3 mb-10">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-white/30">
                    <div className="w-1 h-1 bg-brand" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand hover:text-black hover:border-brand transition-all">
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=1200&q=80" 
                  alt="Detailer at work" 
                  className="grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-6 -left-6 text-[120px] font-black text-white/5 select-none leading-none pointer-events-none">
                  PASSION
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="section-title">History & Ethos</span>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-10 leading-tight">THE ART OF<br/>PRESERVATION<span className="text-brand">.</span></h2>
              <div className="space-y-8 text-white/60 leading-relaxed text-lg font-medium">
                <p>
                  NTRS Garage started with a simple belief: every motorcycle is a masterpiece that deserves to look its absolute best. Founded by riders for riders, we understand the emotional connection you have with your machine.
                </p>
                <p>
                  We don't just "wash" bikes. We perform mechanical surgery on the aesthetics. Using industry-leading chemicals from Japan and the UK, coupled with hours of meticulous hand-finishing.
                </p>
              </div>
              <div className="flex gap-12 mt-16 pt-8 border-t border-white/10">
                  <div>
                    <div className="font-black text-2xl italic tracking-tighter uppercase mb-1">Certified</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Authorized Coating Center</div>
                  </div>
                  <div className="h-12 w-px bg-white/10"></div>
                  <div>
                    <div className="font-black text-2xl italic tracking-tighter uppercase mb-1">8+ Years</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Master Level Technicians</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 text-left mb-20 relative">
          <div className="absolute right-0 top-0 text-[100px] font-black text-white/[0.03] select-none leading-none -translate-x-12 translate-y-8 hidden md:block uppercase">Portfolio</div>
          <span className="section-title">Visual Results</span>
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase">GALLERY ARCHIVE<span className="text-brand">.</span></h2>
          
          <div className="flex flex-wrap justify-start gap-4 mt-12 border-b border-white/10 pb-8">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all border ${activeCategory === cat ? 'bg-brand text-black border-brand' : 'bg-transparent text-white/40 border-white/10 hover:border-white/30'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-white/10">
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative cursor-pointer aspect-square overflow-hidden border-r border-b border-white/10"
                onClick={() => setSelectedImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-10 text-center">
                  <div className="w-12 h-12 border border-brand/50 flex items-center justify-center mb-4">
                    <Camera className="w-5 h-5 text-brand" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 text-brand">{img.category}</span>
                  <span className="text-xl font-black italic tracking-tight">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="section-title">Client Log</span>
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-16 uppercase leading-tight">VERIFIED<br/>RIDER FEEDBACK<span className="text-brand">.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-white/10">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white/[0.01] border-r border-b border-white/10 p-10 hover:bg-white/[0.03] transition-all duration-500">
                <div className="flex gap-4 items-center mb-8">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 relative p-1 shrink-0 overflow-hidden">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-black italic text-lg tracking-tight uppercase">{t.name}</div>
                    <div className="text-[10px] text-brand font-black uppercase tracking-widest">{t.bike}</div>
                  </div>
                </div>
                <p className="text-white/50 font-medium italic text-sm leading-relaxed border-l-2 border-brand/20 pl-4">"{t.text}"</p>
                <div className="flex gap-2 mt-10">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-brand" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 bg-[#0a0a0a] border-t border-white/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white/[0.01] border border-white/10 p-10 md:p-20 relative overflow-hidden">
            <div className="text-left mb-16 relative">
              <div className="absolute right-0 top-0 text-[100px] font-black text-white/[0.03] select-none leading-none -translate-y-4 hidden md:block">RESERVE</div>
              <span className="section-title">Inquiry Portal</span>
              <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6">SECURE YOUR SLOT<span className="text-brand">.</span></h2>
              <p className="text-white/40 text-sm max-w-xl font-medium">Appointments are highly restricted. Please provide detailed information about your machine for a custom project quote.</p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10" id="appointment-form">
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-[0.3em] text-white/40">Full Rider Name</label>
                <input type="text" placeholder="REQUIRED" className="w-full bg-transparent border-b border-white/20 focus:border-brand py-2 focus:outline-none text-sm font-bold uppercase tracking-widest placeholder:text-white/10 transition-colors" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-[0.3em] text-white/40">Email Protocol</label>
                <input type="email" placeholder="NAME@DOMAIN.COM" className="w-full bg-transparent border-b border-white/20 focus:border-brand py-2 focus:outline-none text-sm font-bold uppercase tracking-widest placeholder:text-white/10 transition-colors" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-[0.3em] text-white/40">Machine Spec</label>
                <input type="text" placeholder="MODEL / YEAR" className="w-full bg-transparent border-b border-white/20 focus:border-brand py-2 focus:outline-none text-sm font-bold uppercase tracking-widest placeholder:text-white/10 transition-colors" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase font-black tracking-[0.3em] text-white/40">Service Category</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-white/20 focus:border-brand py-2 focus:outline-none text-sm font-bold uppercase tracking-widest appearance-none cursor-pointer transition-colors">
                    <option value="" className="bg-black">SELECT PATHWAY</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id} className="bg-black">{s.name}</option>)}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                </div>
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="text-[10px] uppercase font-black tracking-[0.3em] text-white/40">Project Summary</label>
                <textarea rows={3} placeholder="TELL US ABOUT THE CONDITION..." className="w-full bg-transparent border-b border-white/20 focus:border-brand py-2 focus:outline-none text-sm font-bold uppercase tracking-widest placeholder:text-white/10 transition-all resize-none h-24"></textarea>
              </div>
              <div className="md:col-span-1 pt-6">
                <button 
                  type="submit" 
                  className="btn-primary w-full md:w-auto"
                >
                  SEND REQUEST
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-10 uppercase">Connect With Us</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm shrink-0 border border-white/10">
                    <MapPin className="text-brand" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 uppercase tracking-wide">Our Studio</div>
                    <div className="text-gray-500 leading-relaxed italic">77 Industrial Way, Suite A-4, Los Angeles, CA 90210</div>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm shrink-0 border border-white/10">
                    <Phone className="text-brand" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 uppercase tracking-wide">Call Support</div>
                    <div className="text-gray-500 leading-relaxed">+1 (555) DET-AILR</div>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm shrink-0 border border-white/10">
                    <Mail className="text-brand" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1 uppercase tracking-wide">General Inquiries</div>
                    <div className="text-gray-500 leading-relaxed">studio@ntrsgarage.com</div>
                  </div>
                </div>
                <div className="pt-8">
                  <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500 mb-6">Stay Connected</div>
                  <div className="flex gap-4">
                    {[Instagram, Facebook, Youtube].map((Icon, i) => (
                      <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand hover:text-black transition-all border border-white/10">
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] bg-white/5 rounded-sm border border-white/10 relative overflow-hidden">
               {/* Mock Map View */}
               <div className="absolute inset-0 grayscale contrast-[1.2] opacity-40">
                  <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80" alt="Map mockup" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-4 h-4 bg-brand rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-brand rounded-full relative"></div>
                  <div className="mt-4 px-4 py-2 bg-black border border-brand/50 text-[10px] uppercase font-bold tracking-widest">NTRS GARAGE HQ</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="text-3xl font-black tracking-tighter text-white">
                  NTRS<span className="text-brand">.</span>GARAGE
                </div>
              </div>
              <p className="text-white/30 text-[11px] font-bold uppercase tracking-widest max-w-sm leading-loose">
                Premier motorcycle aesthetics preserving studio. Treatment by appointment only. Los Angeles — Tokyo — London.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="text-[10px] uppercase font-black tracking-[0.5em] text-white/40 mb-8">Join the Archive</div>
              <div className="flex">
                <input type="email" placeholder="RIDERS@LIST.COM" className="bg-white/5 border border-white/10 px-6 py-4 rounded-none focus:outline-none focus:border-brand text-[10px] font-black uppercase tracking-widest w-full sm:w-80" />
                <button className="bg-brand text-black px-8 py-4 font-black text-[10px] uppercase tracking-widest hover:bg-brand-light transition-colors">Join</button>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 italic">
              © 2026 NTRS GARAGE — PREMIUM MOTO AESTHETICS
            </div>
            <div className="flex gap-10 text-[10px] uppercase font-black tracking-[0.4em] text-white/40">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Gallery Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-brand">
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage} 
              alt="Gallery Preview" 
              className="max-w-full max-h-full object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
