"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, GitBranch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categoryIcons } from '@/data/icons';
import { SidebarProps } from '@/types/git';

export default function Sidebar({ items, isOpen, setIsOpen }: SidebarProps) {
  const [activeId, setActiveId] = useState<string>('');

  // Listen to scroll and determine which section is currently visible
  useEffect(() => {
    const allIds = items.flatMap(section =>
      section.items.map(item =>
        item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
      )
    );

    const handleScroll = () => {
      let currentId = '';
      for (const id of allIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold for activation
          if (rect.top <= 120) {
            currentId = id;
          }
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const sidebarContent = (
    <div className="h-full flex flex-col pt-14 lg:pt-0">
      {/* Mobile Header (Only visible when open on mobile) */}
      <div className="flex items-center justify-between px-5 py-4 lg:hidden border-b border-slate-800/50">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-blue-500/10">
            <GitBranch className="h-4 w-4 text-blue-400" />
          </div>
          <span className="font-bold text-sm">GitDocs</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors outline-none"
          aria-label="Close sidebar"
        >
          <X size={18} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto custom-scrollbar px-3 py-4 lg:py-6 space-y-5">
        {items.map((section) => {
          const IconComponent = categoryIcons[section.category] || GitBranch;
          return (
            <div key={section.category}>
              <div className="flex items-center gap-2 px-3 mb-2">
                <IconComponent size={13} className="text-slate-500 flex-shrink-0" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                  {section.category}
                </h4>
              </div>
              <div className="flex flex-col gap-px">
                {section.items.map((item) => {
                  const itemId = item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                  const isActive = activeId === itemId;

                  return (
                    <Link
                      key={item.name}
                      href={`#${itemId}`}
                      onClick={() => setIsOpen(false)}
                      className={`group flex w-full items-center rounded-lg px-3 py-[7px] text-[13px] font-medium transition-all duration-150 relative outline-none ${
                        isActive
                          ? 'text-blue-400 bg-blue-500/[0.08]'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-blue-500"
                          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        />
                      )}
                      <span className={`w-1 h-1 rounded-full mr-3 flex-shrink-0 transition-all ${
                        isActive
                          ? 'bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.5)]'
                          : 'bg-slate-700 group-hover:bg-slate-500'
                      }`} />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="p-3 border-t border-slate-800/50">
        <div className="px-3 py-2.5 rounded-lg bg-slate-900/50 border border-slate-800/50">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Status</span>
            <span className="text-[10px] font-bold text-blue-400">Stable</span>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-full rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-14 z-30 hidden h-[calc(100vh-56px)] w-[260px] border-r border-slate-800/50 bg-slate-950 lg:block">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 z-50 h-full w-[280px] bg-slate-950 border-r border-slate-800 shadow-2xl lg:hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
