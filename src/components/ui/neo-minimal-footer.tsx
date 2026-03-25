import React from 'react'
import { Github, Twitter, Linkedin, ArrowRight, Hexagon } from 'lucide-react'

export function NeoMinimalFooter() {
  return (
    <footer className="w-full bg-black border-t border-white/10 flex flex-wrap pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Brand Column (Span 4) */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2">
                <Hexagon className="text-primary fill-primary/10 animate-pulse" size={24} />
                <h2 className="text-2xl font-bold tracking-tighter text-foreground">
                    KATALYST
                </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                AI Automation and Marketing Infrastructure for Scalable Businesses. 
                Automate the work that slows your growth.
            </p>
            
            {/* Minimal Input */}
            <div className="flex items-center gap-2 mt-2 group">
                <div className="relative flex-1 max-w-xs">
                    <input 
                        type="email" 
                        placeholder="Enter your signal..." 
                        className="w-full bg-white/5 border border-border/40 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    />
                </div>
                <button className="p-2.5 bg-primary rounded-lg text-primary-foreground hover:bg-primary/90 transition-colors">
                    <ArrowRight size={18} />
                </button>
            </div>
          </div>

          {[
              { title: "Services", links: ["Marketing Infrastructure", "AI Automation", "Internal Systems", "Consulting"] },
            { title: "Company", links: ["About Us", "Careers", "Legal", "Contact"] },
            { title: "Connect", links: ["Twitter", "LinkedIn", "Instagram", "Calendly"] }
          ].map((section, idx) => (
             <div key={idx} className="col-span-6 md:col-span-2 flex flex-col gap-4">
                <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-widest">
                    {section.title}
                </h4>
                <ul className="flex flex-col gap-3">
                    {section.links.map((link) => (
                        <li key={link}>
                            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group w-fit">
                                <span className="w-2 h-2 rounded-full bg-muted-foreground/50
                                group-hover:bg-primary 
                                transition-all group-hover:w-4 duration-200" />
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
             </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
            <p className="text-xs text-muted-foreground">
                {`© 2024 Katalyst. All rights reserved.`}
            </p>

            <div className="flex items-center gap-6">
                 {/* Socials - Integrated Horizontal */}
                 <div className="flex gap-4 border-r border-white/10 pr-6 mr-2">
                    {[Github, Twitter, Linkedin].map((Icon, i) => (
                        <a key={i} href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Icon size={18} />
                        </a>
                    ))}
                 </div>
                 
                 {/* Status */}
                 <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] uppercase font-medium text-primary/80 tracking-wider">All Systems Normal</span>
                 </div>
            </div>
        </div>
      </div>
    </footer>
  )
}
