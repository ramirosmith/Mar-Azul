
import type React from 'react';

export interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
  color: {
    bg: string;
    text: string;
    hoverBg: string;
    hoverText: string;
    ring: string;
  };
}
