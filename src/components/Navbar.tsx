"use client";
import React from 'react';
import { Search, Github, GitBranch, Menu, BookOpen, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { NavbarProps } from '@/types/git';
import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ searchTerm, setSearchTerm, onMenuClick }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gitdark-800 bg-gitdark-950 dark:border-darkbg-50 dark:bg-darkbg-600 transition-colors duration-300">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 w-full gap-3 sm:gap-6">
        {/* Left: Menu + Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-1 rounded-lg hover:bg-gitdark-800 dark:hover:bg-darkbg-200 text-gitdark-300 hover:text-white transition-all outline-none"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          
          <Link 
            href="/" 
            onClick={() => {
              setSearchTerm('');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group outline-none"
          >
            <div className="p-1.5 rounded-lg bg-git-500 shadow-md shadow-git-500/30 group-hover:shadow-git-500/50 transition-shadow">
              <GitBranch className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white hidden sm:block font-heading">GitDocs</span>
            <span className="hidden lg:inline-flex px-2 py-0.5 rounded-md bg-gitdark-800 dark:bg-darkbg-200 text-[10px] font-bold text-gitdark-300 dark:text-gitgray-400 ml-1">HUB</span>
          </Link>
        </div>
        
        {/* Center: Search */}
        <div className="flex-1 flex items-center justify-center max-w-xl">
          <div className="relative w-full group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gitdark-400 group-focus-within:text-git-500 transition-colors pointer-events-none" />
            <input
              type="text"
              placeholder="Search commands (e.g. commit, push)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-10 w-full rounded-xl border border-gitdark-700 dark:border-darkbg-50 bg-gitdark-900 dark:bg-darkbg-300 pl-10 pr-4 text-sm text-gitdark-100 placeholder:text-gitdark-500 dark:placeholder:text-gitgray-600 outline-none ring-0 focus:border-git-500/60 focus:bg-gitdark-800 dark:focus:bg-darkbg-200 transition-all duration-200"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 pointer-events-none">
              <kbd className="px-1.5 py-0.5 rounded border border-gitdark-600 dark:border-darkbg-50 bg-gitdark-800 dark:bg-darkbg-200 text-[10px] text-gitdark-400 font-mono">⌘K</kbd>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-gitdark-700 dark:border-darkbg-50 bg-gitdark-800/50 dark:bg-darkbg-200/50 text-gitdark-300 hover:text-git-400 hover:border-git-500/40 transition-all outline-none"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon size={16} />
                </motion.div>
              ) : (
                <motion.div key="sun" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <Link
            href="https://github.com/shoriful-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-gitdark-700 dark:border-darkbg-50 bg-gitdark-800/50 dark:bg-darkbg-200/50 text-gitdark-300 hover:text-white hover:border-gitdark-500 transition-all hidden sm:flex outline-none"
            aria-label="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="#what-is-git"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-git-500 hover:bg-git-600 text-white text-xs font-semibold transition-all shadow-md shadow-git-500/20 active:scale-95 outline-none"
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline">Learn</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
