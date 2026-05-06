import React from 'react';

export const AboutPage = () => {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden bg-black min-h-screen">
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
  );
};
