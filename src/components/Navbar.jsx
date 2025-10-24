import React from 'react';
import { Rocket, Code, Users } from 'lucide-react';

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="text-sm text-white/80 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-wide">Nova Tech Club</p>
                <p className="text-[10px] uppercase tracking-widest text-white/60">Build • Learn • Launch</p>
              </div>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              <NavItem href="#projects">
                <span className="inline-flex items-center gap-2"><Code className="h-4 w-4" /> Projects</span>
              </NavItem>
              <NavItem href="#join">
                <span className="inline-flex items-center gap-2"><Users className="h-4 w-4" /> Join</span>
              </NavItem>
              <a
                href="#join"
                className="rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
