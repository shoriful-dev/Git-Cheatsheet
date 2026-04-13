import Link from 'next/link';
import { GitBranch, MoveLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-flex p-4 rounded-2xl bg-git-500/10 mb-6">
          <GitBranch size={40} className="text-git-500" />
        </div>
        <h1 className="text-4xl font-bold font-mono text-slate-900 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-slate-800 mb-6">Documentation Not Found</h2>
        <p className="text-slate-600 mb-10 max-w-sm mx-auto leading-relaxed">
          The command or guide you are looking for doesn't exist or has been moved.
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
