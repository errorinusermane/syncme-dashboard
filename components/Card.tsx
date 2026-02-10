
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
  titleAction?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children, icon: Icon, className = "", titleAction }) => (
  <div className={`bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-xl p-6 shadow-xl hover:border-slate-700 transition-colors ${className}`}>
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
        {Icon && <Icon size={16} className="text-indigo-400" />}
        {title}
      </h3>
      {titleAction}
    </div>
    {children}
  </div>
);
