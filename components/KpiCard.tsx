
import React from 'react';
import { Card } from './Card';
import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string | number;
  unit: string;
  icon: LucideIcon;
  subtext: string;
  statusColor?: string;
}

export const KpiCard: React.FC<KpiCardProps> = ({ title, value, unit, icon, subtext, statusColor = "text-emerald-400" }) => (
  <Card title={title} icon={icon}>
    <div className="flex items-baseline gap-2">
      <span className="text-4xl font-bold text-white tracking-tight">{typeof value === 'number' ? value.toLocaleString() : value}</span>
      <span className="text-slate-500 font-medium">{unit}</span>
    </div>
    <div className={`mt-3 text-xs font-semibold ${statusColor} flex items-center gap-1`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
      {subtext}
    </div>
  </Card>
);
