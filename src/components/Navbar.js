"use client";
import { Search, Github, GitBranch, Menu, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function Navbar({ searchTerm, setSearchTerm, onMenuClick }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/50 bg-slate-950/90 backdrop-blur-lg">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 w-full gap-3 sm:gap-6">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="p-1.5 rounded-lg bg-blue-600 shadow-md shadow-blue-600/20 group-hover:shadow-blue-600/40 transition-shadow">
              <GitBranch className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-base tracking-tight hidden sm:block">GitDocs</span>
            <span className="hidden lg:inline-flex px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-semibold text-slate-400 ml-1">Hub</span>
          </Link>
        </div>
        
        {/* Center: Search */}
        <div className="flex-1 flex items-center justify-center max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search commands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-9 w-full rounded-lg border border-slate-800 bg-slate-900/80 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 outline-none ring-0 focus:border-blue-500/40 focus:bg-slate-900 transition-colors"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded border border-slate-700 bg-slate-800 text-[10px] text-slate-500 font-mono">⌘K</kbd>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Link
            href="https://github.com/shoriful-dev"
            target="_blank"
            className="p-2 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-700 transition-all hidden sm:flex"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="#what-is-git"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-md shadow-blue-600/15"
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline">Learn</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
