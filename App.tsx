
import React, { useState } from 'react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Cell, PieChart, Pie, Legend 
} from 'recharts';
import { 
  Server, Activity, AlertCircle, Zap, ShieldCheck, 
  Clock, Maximize, Database, RefreshCw, Layers, 
  Target, Info, ChevronRight, CheckCircle2,
  LayoutDashboard, BarChart3, HeartPulse, HardDrive, 
  Search, PanelLeftOpen, PanelLeftClose, Menu
} from 'lucide-react';

import { Card } from './components/Card';
import { KpiCard } from './components/KpiCard';
import { 
  DASHBOARD_META, 
  PERFORMANCE_DATA, 
  CAPACITY_DATA, 
  ERROR_DATA, 
  PROJECT_CONTEXT 
} from './constants';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'performance', label: 'Performance', icon: BarChart3 },
    { id: 'health', label: 'System Health', icon: HeartPulse },
    { id: 'capacity', label: 'Capacity', icon: HardDrive },
    { id: 'bottlenecks', label: 'Bottlenecks', icon: Search },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex overflow-x-hidden selection:bg-indigo-500/30">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 bg-[#070b1d] border-r border-slate-800 transition-all duration-300 ease-in-out shadow-2xl ${
          isSidebarOpen ? 'w-60 translate-x-0' : 'w-0 -translate-x-full lg:w-0'
        }`}
      >
        <div className={`flex flex-col h-full overflow-hidden ${isSidebarOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
          {/* Sidebar Header */}
          <div className="p-6 pb-4">
            <div className="flex items-center gap-3.5 mb-1">
              <div className="w-9 h-9 bg-indigo-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <Zap size={18} className="text-white fill-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white leading-none">SyncMe</h2>
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1.5">Ops Dashboard</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-800/40 mx-4 mt-4 mb-4"></div>

          {/* Navigation */}
          <nav className="flex-1 px-3 space-y-0.5">
            <p className="px-4 py-3 text-[10px] font-bold text-slate-600 uppercase tracking-[0.25em]">Monitoring</p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center gap-3.5 px-4 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/30 transition-all group"
              >
                <item.icon size={18} className="group-hover:text-indigo-400 transition-colors opacity-80" />
                <span className="text-[13.5px] font-medium tracking-normal">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Sidebar Footer Info Card */}
          <div className="p-4 mt-auto">
            <div className="p-4 bg-slate-900/40 border border-slate-800/50 rounded-xl">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Cloud Engine</span>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] text-slate-500 font-medium">Region: <span className="text-slate-400 font-mono">ap-northeast-2</span></p>
                <p className="text-[11px] text-slate-500 font-medium">Stack: <span className="text-slate-400 font-mono">Lambda / DynamoDB</span></p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main 
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'lg:pl-60' : 'pl-0'} relative`}
      >
        {/* Toggle Button - Flush with left edge when closed */}
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className={`fixed top-6 z-[60] p-2.5 transition-all duration-300 ease-in-out shadow-2xl flex items-center justify-center ${
            isSidebarOpen 
              ? 'left-60 rounded-r-md bg-slate-900 border border-l-0 border-slate-800 text-slate-400 hover:text-white' 
              : 'left-0 rounded-r-md bg-indigo-500 text-white hover:bg-indigo-600'
          }`}
          title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        >
          {isSidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
        </button>

        <div className="p-4 lg:p-10 max-w-7xl mx-auto space-y-12">
          {/* Header Section - Increased mt-12 to mt-24 for better vertical spacing */}
          <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800 pb-8 mt-24 lg:mt-12">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-white to-slate-400 bg-clip-text text-transparent">
                  <span className="text-indigo-400 font-bold">Systems Health & Scale</span>
                </h1>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse"></span>
                  Operational
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                <span>Env: <strong className="text-slate-300 uppercase tracking-wider">{DASHBOARD_META.environment}</strong></span>
                <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-700"></span>
                <span className="hidden sm:inline">Traffic: <strong className="text-slate-300">{DASHBOARD_META.trafficType}</strong></span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800 backdrop-blur-sm self-start lg:self-center">
              <div className="space-y-1 text-right">
                <div className="flex items-center justify-end gap-2 text-[11px] text-slate-500 uppercase font-bold tracking-widest">
                  <Database size={12} className="text-indigo-400" /> Source: {DASHBOARD_META.dataSource}
                </div>
                <div className="flex items-center justify-end gap-2 text-xs text-slate-400 font-mono">
                  <RefreshCw size={12} className="text-emerald-400" /> {DASHBOARD_META.updatedAt}
                </div>
              </div>
            </div>
          </header>

          {/* Section: Overview */}
          <section id="overview" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            <Card title="Product Vision Context" icon={Target} className="md:col-span-8 bg-gradient-to-br from-slate-900/60 to-slate-900/20">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-4">
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {PROJECT_CONTEXT.problem}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_CONTEXT.solution.map((item, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-medium">
                        <CheckCircle2 size={10} /> {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden md:block w-px bg-slate-800"></div>
                <div className="md:w-48 space-y-3">
                  <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Priority Objectives</h4>
                  <ul className="space-y-2 text-xs text-slate-400">
                    <li className="flex items-center gap-2"><ChevronRight size={12} className="text-indigo-500" /> p95 &lt; 100ms</li>
                    <li className="flex items-center gap-2"><ChevronRight size={12} className="text-indigo-500" /> Error Rate &lt; 0.1%</li>
                    <li className="flex items-center gap-2"><ChevronRight size={12} className="text-indigo-500" /> Max RPS 10k+</li>
                  </ul>
                </div>
              </div>
            </Card>
            <div className="md:col-span-4 grid grid-cols-1 gap-6">
               <KpiCard 
                title="Global Error Rate" 
                value="0.00" 
                unit="%" 
                icon={AlertCircle} 
                subtext="Healthy Status" 
              />
            </div>
          </section>

          {/* Section: Performance */}
          <section id="performance" className="scroll-mt-24 space-y-6">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] flex items-center gap-2">
               <Activity size={14} className="text-indigo-400" /> Performance Metrics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <KpiCard 
                title="Avg Latency" 
                value={PERFORMANCE_DATA[0].value} 
                unit="ms" 
                icon={Clock} 
                subtext="Target: <50ms" 
              />
              <KpiCard 
                title="P95 Latency" 
                value={PERFORMANCE_DATA[1].value} 
                unit="ms" 
                icon={Activity} 
                subtext="Within SLA" 
                statusColor={PERFORMANCE_DATA[1].value < 100 ? "text-emerald-400" : "text-amber-400"}
              />
               <KpiCard 
                title="Theoretical Max" 
                value={CAPACITY_DATA.maxRps} 
                unit="rps" 
                icon={Zap} 
                subtext="Concurrency: 400" 
                statusColor="text-indigo-400"
              />
              <KpiCard 
                title="Integration" 
                value={PERFORMANCE_DATA[3].value} 
                unit="ms" 
                icon={Layers} 
                subtext="Lambda Exec Time" 
              />
            </div>

            <Card title="Latency Percentiles" icon={Activity}>
              <div className="h-72 w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={PERFORMANCE_DATA} layout="vertical" margin={{ left: 40, right: 30, top: 10 }}>
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity={1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} vertical={true} />
                    <XAxis type="number" stroke="#475569" fontSize={11} tickFormatter={(v) => `${v}ms`} />
                    <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={11} width={80} />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', color: '#f8fafc' }}
                      itemStyle={{ color: '#818cf8', fontSize: '12px' }}
                    />
                    <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={28}>
                      {PERFORMANCE_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 2 ? '#ef4444' : index === 1 ? '#f59e0b' : 'url(#barGradient)'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </section>

          {/* Section: System Health */}
          <section id="health" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card title="Health Index" icon={ShieldCheck} className="lg:col-span-1">
              <div className="h-72 w-full flex flex-col items-center justify-center relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={ERROR_DATA}
                      innerRadius={75}
                      outerRadius={95}
                      paddingAngle={8}
                      dataKey="value"
                      stroke="none"
                    >
                      {ERROR_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                    />
                    <Legend 
                      verticalAlign="bottom" 
                      iconType="circle" 
                      formatter={(value) => <span className="text-[10px] text-slate-400 uppercase tracking-tighter ml-1">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-center absolute translate-y-[-10%]">
                  <span className="block text-3xl font-black text-white">100<span className="text-xl text-slate-500 font-normal">%</span></span>
                  <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-full">Optimal</span>
                </div>
              </div>
            </Card>

            <Card title="Performance Distribution" icon={Activity} className="lg:col-span-2">
              <div className="h-72 flex items-center justify-center text-slate-600 italic text-sm">
                Detailed cluster performance telemetry loading...
              </div>
            </Card>
          </section>

          {/* Section: Capacity */}
          <section id="capacity" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card title="Capacity & Throttling" icon={Maximize}>
              <div className="space-y-3 mt-2">
                {[
                  { label: "Safe RPS (Estimate)", value: `${CAPACITY_DATA.safeRps.toLocaleString()} / sec`, color: "text-emerald-400" },
                  { label: "Concurrency Pool", value: `${CAPACITY_DATA.concurrencyLimit} units`, color: "text-slate-200" },
                  { label: "Avg Execution", value: `${CAPACITY_DATA.avgExecTime} ms`, color: "text-slate-200" },
                  { label: "Calculated Peak", value: `${CAPACITY_DATA.maxRps.toLocaleString()} rps`, color: "text-indigo-400" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-slate-800/30 border border-slate-800/50 rounded-xl group hover:border-slate-700 transition-all">
                    <span className="text-slate-400 text-sm font-medium">{item.label}</span>
                    <span className={`${item.color} font-mono font-bold tracking-tight`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Section: Bottlenecks (ID inside capacity or separate) */}
            <div id="bottlenecks" className="scroll-mt-24">
              <Card title="Bottleneck Analysis" icon={Database} titleAction={<Info size={14} className="text-slate-600" />} className="h-full">
                <div className="flex flex-col justify-between h-full space-y-4 py-2">
                  <div className="bg-amber-500/5 border border-amber-500/20 p-5 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:scale-110 transition-transform">
                      <AlertCircle size={40} className="text-amber-500" />
                    </div>
                    <h4 className="text-amber-400 font-bold mb-2 flex items-center gap-2 text-sm">
                      <AlertCircle size={16} /> Hot Partition Risk Detected
                    </h4>
                    <p className="text-slate-100 text-lg font-bold leading-tight">
                      {CAPACITY_DATA.bottleneck}
                    </p>
                    <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                      Traffic patterns suggest specific shard keys in DynamoDB are seeing disproportionate load.
                    </p>
                  </div>
                  <div className="bg-indigo-500/5 border border-indigo-500/10 p-4 rounded-xl">
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      <span className="text-indigo-400 font-bold uppercase tracking-wider mr-2">Recommendation:</span> 
                      Implement partition key random suffixing or monitor GSI propagation lag during peak write bursts (10k+ rps events).
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Footer Data Quality Signal */}
          <footer className="pt-8 text-center border-t border-slate-800/50">
            <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2">
              <ShieldCheck size={12} className="text-emerald-500/50" /> SyncMe Internal Telemetry • End-to-end verified
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;
