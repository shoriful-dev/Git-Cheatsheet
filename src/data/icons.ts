import {
  Flag,
  PlusCircle,
  Edit3,
  GitBranch,
  Users,
  History,
  Layers,
  Cpu,
  Terminal,
  Wrench,
  LucideIcon
} from 'lucide-react';

export const categoryIcons: Record<string, LucideIcon> = {
  "Getting Started": Flag,
  "Creating Projects": PlusCircle,
  "Day-to-Day Workflow": Edit3,
  "Branching & Merging": GitBranch,
  "Remote & Collaboration": Users,
  "Undoing Mistakes": History,
  "Stashing": Layers,
  "Advanced Techniques": Cpu,
  "Inspection & Debugging": Terminal,
  "Cleanup & Maintenance": Wrench,
};
