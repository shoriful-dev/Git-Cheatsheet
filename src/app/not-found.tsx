import Link from 'next/link';
import { GitBranch, MoveLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-darkbg-500 flex items-center justify-center px-4 transition-colors duration-300">
      <div className="text-center">
        <div className="inline-flex p-4 rounded-2xl bg-git-500/10 mb-6">
          <GitBranch size={40} className="text-git-500" />
        </div>
        <h1 className="text-4xl font-bold font-mono text-gitgray-950 dark:text-gitgray-100 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gitgray-800 dark:text-gitgray-200 mb-6">Documentation Not Found</h2>
        <p className="text-gitgray-500 mb-10 max-w-sm mx-auto leading-relaxed">
          The command or guide you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-git-500 text-white text-sm font-semibold hover:bg-git-600 transition-all active:scale-95"
        >
          <MoveLeft size={16} />
          Back to Cheatsheet
        </Link>
      </div>
    </div>
  );
}
