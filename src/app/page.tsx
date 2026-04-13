"use client";
import React, { useState, useMemo, useDeferredValue } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import DocSection from '@/components/DocSection';
import TableOfContents from '@/components/TableOfContents';
import { gitItems } from '@/data/commands';
import { motion } from 'framer-motion';
import { BookOpen, Rocket, GitBranch, Search } from 'lucide-react';
import { categoryIcons } from '@/data/icons';
import { GitCategory, GitItem, GitCommand } from '@/types/git';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const deferredSearchTerm = useDeferredValue(searchTerm);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [currentYear, setCurrentYear] = useState<number>(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    // Auto scroll to top on refresh if no hash is present
    if (window.location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, []);

  const filteredItems = useMemo<GitCategory[]>(() => {
    if (!deferredSearchTerm) return gitItems;
    
    const searchLower = deferredSearchTerm.toLowerCase();
    
    return gitItems.map(category => {
      const matchedItems = category.items.filter((item: GitItem) =>
        item.name.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.commands.some((c: GitCommand) =>
          c.cmd.toLowerCase().includes(searchLower) ||
          c.desc.toLowerCase().includes(searchLower)
        )
      );
      return matchedItems.length > 0 ? { ...category, items: matchedItems } : null;
    }).filter((cat): cat is GitCategory => cat !== null);
  }, [searchTerm]);

  const totalCommands = useMemo(() => 
    gitItems.reduce((acc: number, cat: GitCategory) => 
      acc + cat.items.reduce((a: number, i: GitItem) => a + i.commands.length, 0)
    , 0)
  , []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onMenuClick={() => setIsSidebarOpen(true)}
      />

      <div className="flex-1 w-full flex">
        <Sidebar
          items={filteredItems}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        <div className="flex-1 flex w-full lg:pl-[260px]">
          <main className="flex-1 min-w-0">
            <div className="px-4 sm:px-6 lg:px-12 xl:pl-16 xl:pr-8 py-8 sm:py-12">

            {/* Hero Section */}
            {!searchTerm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative mb-16 sm:mb-20"
              >
                {/* Background Glow */}
                <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-git-500/[0.07] blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-4xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-git-500/10 border border-git-500/20 mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-git-600 text-[11px] font-semibold uppercase tracking-wider">Comprehensive Documentation</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.15]">
                    Git & GitHub
                    <br />
                    <span className="bg-gradient-to-r from-git-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      Complete Reference Guide
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
                    Everything you need to master version control — from your very first commit to advanced team workflows.
                    Designed for beginners looking to learn and professionals who need a quick reference.
                  </p>

                  {/* Stats Bar */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <BookOpen size={16} className="text-git-500" />
                      <span className="text-sm font-semibold text-slate-700">{gitItems.length} Categories</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <GitBranch size={16} className="text-indigo-400" />
                      <span className="text-sm font-semibold text-slate-700">{totalCommands}+ Commands</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <Rocket size={16} className="text-purple-400" />
                      <span className="text-sm font-semibold text-slate-700">Copy & Use Instantly</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#what-is-git"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-git-500 text-white text-sm font-semibold hover:bg-git-600 transition-all shadow-lg shadow-git-500/20 active:scale-95 outline-none"
                    >
                      <Rocket size={16} />
                      Start Learning
                    </a>
                    <a
                      href="#working-with-branches"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-800 text-sm font-semibold hover:bg-slate-700 border border-slate-300 transition-all active:scale-95 outline-none"
                    >
                      <BookOpen size={16} />
                      Jump to Branching
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Documentation Sections */}
            <div className="flex flex-col">
              {filteredItems.map((category) => {
                const CatIcon = categoryIcons[category.category] || GitBranch;
                return (
                  <div key={`${category.category}-section`} className="mb-16 sm:mb-20">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <CatIcon size={16} className="text-git-500 flex-shrink-0" />
                      <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-git-500">
                        {category.category}
                      </h2>
                      <div className="h-px flex-1 bg-slate-100" />
                    </div>

                    {/* Category Description */}
                    {category.description && (
                      <p className="text-slate-600 text-sm sm:text-[15px] mb-8 max-w-3xl leading-relaxed pl-7 sm:pl-9">
                        {category.description}
                      </p>
                    )}

                    {/* Items List Rendering */}
                    <div className="pl-4 sm:pl-8 border-l-2 border-slate-200/50 space-y-2">
                      {category.items.map((item) => (
                        <DocSection key={`${item.name}-doc-section`} item={item} />
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Search Empty State */}
              {filteredItems.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/10"
                >
                  <Search size={40} className="mx-auto text-slate-700 mb-4" />
                  <h3 className="text-lg font-bold text-slate-600 mb-2">No results found</h3>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    Try searching for keywords like <span className="text-git-500">"commit"</span>, <span className="text-git-500">"push"</span>, or <span className="text-git-500">"rebase"</span>.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
          </main>

          {/* Persistent Table of Contents (Right Sidebar) */}
          <TableOfContents items={filteredItems} />
        </div>
      </div>

      {/* Shared Site Footer */}
      <footer className="border-t border-slate-200/50 py-10 sm:py-14 bg-white">
        <div className="px-4 sm:px-6 lg:px-12 xl:px-16 lg:pl-[calc(260px+3rem)]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 max-w-4xl">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-git-500/10">
                <GitBranch className="h-4 w-4 text-git-500" />
              </div>
              <span className="font-semibold text-sm text-slate-700">GitDocs Hub</span>
            </div>
            <p className="text-slate-600 text-xs">
              © {currentYear} Shoriful Islam · Built for the developer community
            </p>
            <div className="flex gap-6">
              <Link href="https://github.com/shoriful-dev" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-700 transition-colors text-xs font-medium outline-none">GitHub</Link>
              <Link href="https://github.com/shoriful-dev" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-700 transition-colors text-xs font-medium outline-none">Contribute</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
