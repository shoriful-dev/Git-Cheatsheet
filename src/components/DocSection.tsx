"use client";
import React, { useState } from 'react';
import { Copy, Check, Lightbulb, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DocSectionProps, GitCommand } from '@/types/git';

const CommandBlock: React.FC<GitCommand> = ({ cmd, desc }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window === 'undefined') return;
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50/50 hover:border-slate-300/80 transition-all duration-300">
      <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 border-b border-slate-200/50 bg-slate-50/80">
        <span className="text-xs text-slate-600 font-medium leading-snug pr-4">{desc}</span>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 rounded-lg p-2 hover:bg-slate-100 text-slate-600 hover:text-git-500 transition-all active:scale-90 outline-none"
          aria-label="Copy command"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Check size={14} className="text-emerald-400" />
              </motion.div>
            ) : (
              <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                <Copy size={14} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
      <div className="px-4 sm:px-5 py-4 font-mono text-[13px] sm:text-sm text-git-600 overflow-x-auto whitespace-nowrap custom-scrollbar selection:bg-git-500/20">
        <span className="text-slate-600 select-none mr-2">$</span>
        <span className="group-hover:text-git-700 transition-colors">{cmd}</span>
      </div>
    </div>
  );
};

export default function DocSection({ item }: DocSectionProps) {
  const id = item.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  
  return (
    <motion.section 
      id={id} 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="scroll-mt-24 py-8 sm:py-12"
    >
      <div className="max-w-4xl">
        {/* Section Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-3 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-git-500 shadow-[0_0_8px_rgba(59,130,246,0.4)] flex-shrink-0" />
          {item.name}
        </h3>
        
        {/* Description */}
        <p className="text-slate-600 mb-6 text-[15px] sm:text-base leading-[1.8] max-w-3xl">
          {item.description}
        </p>
        
        {/* Tip Callout */}
        {item.tip && (
          <div className="flex items-start gap-4 p-4 rounded-xl bg-git-50 border border-git-200 mb-6">
            <Lightbulb size={20} className="text-git-500 mt-0.5 flex-shrink-0" />
            <div className="text-git-600/80 text-[14px] leading-relaxed">
              <span className="font-bold text-git-600 uppercase text-[10px] tracking-wider block mb-0.5">Pro Tip</span>
              {item.tip}
            </div>
          </div>
        )}

        {/* Warning Callout */}
        {item.warning && (
          <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-950/20 border border-amber-900/20 mb-6">
            <AlertTriangle size={20} className="text-amber-400 mt-0.5 flex-shrink-0" />
            <div className="text-amber-300/80 text-[14px] leading-relaxed">
              <span className="font-bold text-amber-300 uppercase text-[10px] tracking-wider block mb-0.5">Warning</span>
              {item.warning}
            </div>
          </div>
        )}
        
        {/* Command Blocks */}
        <div className="grid gap-3">
          {item.commands?.map((c, i) => (
            <CommandBlock key={`${id}-cmd-${i}`} {...c} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
