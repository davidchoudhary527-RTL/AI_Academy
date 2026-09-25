import React from 'react';
import { TabType } from '../types';
import { BrandLogo } from './BrandLogo';
import { 
  Network, 
  Terminal, 
  Map, 
  BookOpenCheck, 
  ListTodo, 
  GitFork, 
  HelpCircle,
  Activity
} from 'lucide-react';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { key: 'antigravity', label: 'Antigravity Canvas', icon: Network },
    { key: 'practice', label: 'Prompt Testbed', icon: Terminal },
    { key: 'learn', label: 'Curriculum Map', icon: Map },
    { key: 'examples', label: '5 Agent Recipes', icon: BookOpenCheck },
    { key: 'tasks', label: 'Roadmap Tasks', icon: ListTodo },
    { key: 'progress', label: 'Mastery & Tree', icon: GitFork },
    { key: 'glossary', label: 'Glossary', icon: HelpCircle }
  ];

  return (
    <aside className="w-64 bg-slate-50/80 border-r border-slate-200 flex flex-col justify-between shrink-0 select-none min-h-[calc(100vh-4rem)]">
      {/* Top Header & Navigation */}
      <div className="p-4">
        {/* Workspace Brand Mini Header */}
        <div className="flex items-center gap-2.5 px-2 py-2 mb-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
          <BrandLogo size={28} />
          <div>
            <div className="text-xs font-black text-slate-900 tracking-tight">Agentic AI</div>
            <div className="text-[10px] text-slate-500 font-medium">Simulator Workspace</div>
          </div>
        </div>

        {/* Sidebar Nav Items */}
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isSelected = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key as TabType)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Telemetry Card */}
      <div className="p-4 border-t border-slate-200/80 space-y-3">
        <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
              Active Loop: <strong className="text-slate-900">ReAct</strong>
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
              Live
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
              <span>Token limit:</span>
              <span className="font-bold text-slate-700">1,420 / 4,000</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full" 
                style={{ width: '35.5%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
