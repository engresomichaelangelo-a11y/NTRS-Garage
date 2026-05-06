import React from 'react';

export const Footer = () => {
  return (
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
  );
};
