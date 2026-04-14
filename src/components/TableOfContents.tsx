"use client";
import React, { useEffect, useState } from 'react';
import { TableOfContentsProps } from '@/types/git';

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0% -80% 0%' }
    );

    items.forEach((category) => {
      category.items.forEach((item) => {
        const id = item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="hidden xl:block w-64 flex-shrink-0">
      <div className="sticky top-24 pl-4">
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gitgray-500 mb-4">
          On This Page
        </h4>
        <nav className="space-y-3 border-l border-gitgray-200 dark:border-darkbg-50">
          {items.map((category) => (
            <div key={`${category.category}-toc`} className="space-y-3">
              {category.items.map((item) => {
                const id = item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                const isActive = activeId === id;
                return (
                  <a
                    key={`${id}-toc-link`}
                    href={`#${id}`}
                    className={`block pl-4 text-[13px] font-medium transition-all relative outline-none ${
                      isActive 
                        ? 'text-git-500 border-l border-git-500 -ml-px' 
                        : 'text-gitgray-500 dark:text-gitgray-500 hover:text-gitgray-800 dark:hover:text-gitgray-300 border-l border-transparent -ml-px'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
