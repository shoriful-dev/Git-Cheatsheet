import {
  Rocket, FolderOpen, Code, GitBranch, Globe, Undo2, Archive, Zap, Search, Trash2, LucideIcon
} from 'lucide-react';

export const categoryIcons: Record<string, LucideIcon> = {
  "Getting Started": Rocket,
  "Creating Projects": FolderOpen,
  "Day-to-Day Workflow": Code,
  "Branching & Merging": GitBranch,
  "Remote & Collaboration": Globe,
  "Undoing Mistakes": Undo2,
  "Stashing": Archive,
  "Advanced Techniques": Zap,
  "Inspection & Debugging": Search,
  "Cleanup & Maintenance": Trash2,
};
