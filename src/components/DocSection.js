"use client";
import { useState } from 'react';
import { Copy, Check, Lightbulb, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CommandBlock = ({ cmd, desc }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/50 hover:border-slate-700/80 transition-all duration-300">
      <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 border-b border-slate-800/50 bg-slate-900/80">
        <span className="text-xs text-slate-400 font-medium leading-snug pr-4">{desc}</span>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 rounded-lg p-2 hover:bg-slate-800 text-slate-500 hover:text-blue-400 transition-all active:scale-90"
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
      <div className="px-4 sm:px-5 py-4 font-mono text-[13px] sm:text-sm text-blue-300 overflow-x-auto whitespace-nowrap custom-scrollbar">
        <span className="text-slate-600 select-none mr-2">$</span>
        <span className="group-hover:text-blue-200 transition-colors">{cmd}</span>
      </div>
    </div>
  );
};

export default function DocSection({ item }) {
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
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)] flex-shrink-0" />
          {item.name}
        </h3>
        
        {/* Description */}
        <p className="text-slate-400 mb-6 text-[15px] sm:text-base leading-[1.8] max-w-3xl">
          {item.description}
        </p>
        
        {/* Tip Callout */}
        {item.tip && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-950/30 border border-blue-900/30 mb-6">
            <Lightbulb size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
            <p className="text-blue-300/80 text-sm leading-relaxed">
              <span className="font-semibold text-blue-300">Pro Tip: </span>
              {item.tip}
            </p>
          </div>
        )}

        {/* Warning Callout */}
        {item.warning && (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 mb-6">
            <AlertTriangle size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
            <p className="text-amber-300/80 text-sm leading-relaxed">
              <span className="font-semibold text-amber-300">Warning: </span>
              {item.warning}
            </p>
          </div>
        )}
        
        {/* Command Blocks */}
        <div className="grid gap-3">
          {item.commands.map((c, i) => (
            <CommandBlock key={i} {...c} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
