export interface GitCommand {
  cmd: string;
  desc: string;
}

export interface GitItem {
  name: string;
  description: string;
  tip?: string;
  warning?: string;
  commands: GitCommand[];
}

export interface GitCategory {
  category: string;
  icon: string;
  description?: string;
  items: GitItem[];
}

// Prop Interfaces for Components
export interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  onMenuClick: () => void;
}

export interface SidebarProps {
  items: GitCategory[];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export interface DocSectionProps {
  item: GitItem;
}

export interface TableOfContentsProps {
  items: GitCategory[];
}
