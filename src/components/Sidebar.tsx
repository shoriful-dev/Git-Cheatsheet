"use client";
import React, { useEffect, useState } from 'react';
import { X, GitBranch } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { categoryIcons } from '@/data/icons';
import { SidebarProps } from '@/types/git';

export default function Sidebar({ items, isOpen, setIsOpen }: SidebarProps) {
  const [activeId, setActiveId] = useState<string>('');

  // Listen to scroll and determine which section is currently visible using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Get all items to observe
    items.forEach(section => {
      section.items.forEach(item => {
        const id = item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, [items]);

  const sidebarContent = (
    <div className="h-full flex flex-col pt-14 lg:pt-0">
      {/* Mobile Header (Only visible when open on mobile) */}
      <div className="flex items-center justify-between px-5 py-4 lg:hidden border-b border-gitgray-200 dark:border-darkbg-50">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-git-500/10">
            <GitBranch className="h-4 w-4 text-git-500" />
          </div>
          <span className="font-bold text-sm text-gitgray-950 dark:text-gitgray-100">GitDocs</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 rounded-lg hover:bg-gitgray-100 dark:hover:bg-darkbg-200 text-gitgray-600 dark:text-gitgray-400 hover:text-gitgray-900 dark:hover:text-gitgray-100 transition-colors outline-none"
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
                <IconComponent size={13} className="text-gitgray-500 dark:text-gitgray-500 flex-shrink-0" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-gitgray-500">
                  {section.category}
                </h4>
              </div>
              <div className="flex flex-col gap-px">
                {section.items.map((item) => {
                  const itemId = item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                  const isActive = activeId === itemId;

                  return (
                    <a
                      key={item.name}
                      href={`#${itemId}`}
                      onClick={() => setIsOpen(false)}
                      className={`group flex w-full items-center rounded-lg px-3 py-[7px] text-[13px] font-medium transition-all duration-150 relative outline-none ${
                        isActive
                          ? 'text-git-500 bg-git-500/[0.08] dark:bg-git-500/[0.12]'
                          : 'text-gitgray-700 dark:text-gitgray-400 hover:text-gitgray-950 dark:hover:text-gitgray-100 hover:bg-gitgray-100/70 dark:hover:bg-darkbg-200/70'
                      }`}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-git-500"
                          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        />
                      )}
                      <span className={`w-1 h-1 rounded-full mr-3 flex-shrink-0 transition-all ${
                        isActive
                          ? 'bg-git-500 shadow-[0_0_6px_rgba(240,80,50,0.5)]'
                          : 'bg-gitgray-300 dark:bg-gitgray-600 group-hover:bg-gitgray-400'
                      }`} />
                      <span className="truncate">{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="p-3 border-t border-gitgray-200 dark:border-darkbg-50">
        <div className="px-3 py-2.5 rounded-lg bg-gitgray-50 dark:bg-darkbg-200 border border-gitgray-200 dark:border-darkbg-50">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gitgray-500">Status</span>
            <span className="text-[10px] font-bold text-git-500">Stable</span>
          </div>
          <div className="h-1 w-full bg-gitgray-100 dark:bg-darkbg-300 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-git-500 to-git-400 w-full rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-14 z-30 hidden h-[calc(100vh-56px)] w-[260px] border-r border-gitgray-200 dark:border-darkbg-50 bg-white dark:bg-darkbg-500 lg:block transition-colors duration-300">
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
              className="fixed left-0 top-0 z-50 h-full w-[280px] bg-white dark:bg-darkbg-500 border-r border-gitgray-200 dark:border-darkbg-50 shadow-2xl lg:hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
