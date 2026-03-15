"use client";
import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import DocSection from '@/components/DocSection';
import TableOfContents from '@/components/TableOfContents';
import { gitItems } from '@/data/commands';
import { motion } from 'framer-motion';
import { BookOpen, Rocket, GitBranch, Search } from 'lucide-react';
import { categoryIcons } from '@/data/icons';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (!searchTerm) return gitItems;
    return gitItems.map(category => {
      const matchedItems = category.items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.commands.some(c =>
          c.cmd.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.desc.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      return matchedItems.length > 0 ? { ...category, items: matchedItems } : null;
    }).filter(Boolean);
  }, [searchTerm]);

  const totalCommands = gitItems.reduce((acc, cat) => acc + cat.items.reduce((a, i) => a + i.commands.length, 0), 0);

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onMenuClick={() => setIsSidebarOpen(true)}
      />

      <div className="flex-1 w-full">
        <Sidebar
          items={filteredItems}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        <div className="flex w-full lg:pl-[260px]">
          <main className="flex-1 min-w-0">
            <div className="px-4 sm:px-6 lg:px-12 xl:pl-16 xl:pr-8 py-8 sm:py-12">

            {/* Hero */}
            {!searchTerm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative mb-16 sm:mb-20"
              >
                {/* Background Glow */}
                <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-500/[0.07] blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-4xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-blue-300 text-[11px] font-semibold uppercase tracking-wider">Comprehensive Documentation</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
                    Git & GitHub
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      Complete Reference Guide
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl">
                    Everything you need to master version control — from your very first commit to advanced team workflows.
                    Designed for beginners looking to learn and professionals who need a quick reference.
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <BookOpen size={16} className="text-blue-400" />
                      <span className="text-sm font-semibold text-slate-300">{gitItems.length} Categories</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <GitBranch size={16} className="text-indigo-400" />
                      <span className="text-sm font-semibold text-slate-300">{totalCommands}+ Commands</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800">
                      <Rocket size={16} className="text-purple-400" />
                      <span className="text-sm font-semibold text-slate-300">Copy & Use Instantly</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#what-is-git"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
                    >
                      <Rocket size={16} />
                      Start Learning
                    </a>
                    <a
                      href="#working-with-branches"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-slate-200 text-sm font-semibold hover:bg-slate-700 border border-slate-700 transition-colors"
                    >
                      <BookOpen size={16} />
                      Jump to Branching
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Content Sections */}
            <div className="flex flex-col">
              {filteredItems.map((category, catIdx) => (
                <div key={category.category} className="mb-16 sm:mb-20">
                  {/* Category Header */}
                  {(() => { const CatIcon = categoryIcons[category.category] || GitBranch; return (
                  <div className="flex items-center gap-3 mb-3">
                    <CatIcon size={16} className="text-blue-400" />
                    <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                      {category.category}
                    </h2>
                    <div className="h-px flex-1 bg-slate-800" />
                  </div>
                  ); })()}

                  {/* Category Description */}
                  {category.description && (
                    <p className="text-slate-500 text-sm sm:text-[15px] mb-8 max-w-3xl leading-relaxed pl-9">
                      {category.description}
                    </p>
                  )}

                  {/* Items List */}
                  <div className="pl-4 sm:pl-8 border-l-2 border-slate-800/50 space-y-2">
                    {category.items.map((item) => (
                      <DocSection key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              ))}

              {/* Empty State */}
              {filteredItems.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center rounded-2xl border border-dashed border-slate-800"
                >
                  <Search size={40} className="mx-auto text-slate-700 mb-4" />
                  <h3 className="text-lg font-bold text-slate-400 mb-2">No results found</h3>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    Try searching for keywords like <span className="text-blue-400">"commit"</span>, <span className="text-blue-400">"push"</span>, or <span className="text-blue-400">"rebase"</span>.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </main>

          {/* Right Sidebar Overview */}
          <TableOfContents items={filteredItems} />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-10 sm:py-14 bg-slate-950">
        <div className="px-4 sm:px-6 lg:px-12 xl:px-16 lg:pl-[calc(260px+3rem)]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 max-w-4xl">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-blue-600/10">
                <GitBranch className="h-4 w-4 text-blue-400" />
              </div>
              <span className="font-semibold text-sm text-slate-300">GitDocs Hub</span>
            </div>
            <p className="text-slate-600 text-xs">
              © 2026 Shoriful Islam · Built for the developer community
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/shoriful-dev" target="_blank" className="text-slate-500 hover:text-slate-300 transition-colors text-xs font-medium">GitHub</a>
              <a href="https://github.com/shoriful-dev" target="_blank" className="text-slate-500 hover:text-slate-300 transition-colors text-xs font-medium">Contribute</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
