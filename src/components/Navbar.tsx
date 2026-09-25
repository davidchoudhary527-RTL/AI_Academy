import React from 'react';
import { BrandLogo } from './BrandLogo';
import { CoachAvatar } from './CoachAvatar';
import { TabType } from '../types';
import { Search, Sparkles, Flame, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  beginnerMode: boolean;
  setBeginnerMode: (val: boolean) => void;
  onOpenCoach: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  beginnerMode,
  setBeginnerMode,
  onOpenCoach,
  onOpenSearch
}) => {
  const tabs: { key: TabType; label: string }[] = [
    { key: 'learn', label: 'Learn' },
    { key: 'antigravity', label: 'Antigravity' },
    { key: 'practice', label: 'Practice' },
    { key: 'examples', label: 'Examples' },
    { key: 'tasks', label: 'My Tasks' },
    { key: 'progress', label: 'Progress' },
    { key: 'glossary', label: 'Glossary' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div 
          onClick={() => setActiveTab('learn')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <BrandLogo size={38} />
          <div className="flex flex-col">
            <span className="font-extrabold text-[15px] sm:text-base leading-tight tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              Agentic AI Academy
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-tight">
              Learn Antigravity & Agentic AI <span className="text-indigo-500 font-semibold">• v2.4 Engine</span>
            </span>
          </div>
        </div>

        {/* Center Nav Tabs */}
        <nav className="hidden lg:flex items-center space-x-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all relative ${
                  isActive
                    ? 'text-indigo-700 bg-indigo-50/80 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-indigo-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Tools / User Profile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 text-xs text-slate-500 bg-slate-100/80 hover:bg-slate-100 border border-slate-200/70 rounded-lg transition-colors cursor-pointer group"
            title="Search syllabus, tools, nodes (⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600" />
            <span className="hidden xl:inline text-slate-600 font-medium">Search syllabus & tools...</span>
            <kbd className="hidden sm:inline-block font-mono text-[10px] font-semibold bg-white border border-slate-200 text-slate-500 px-1.5 py-0.5 rounded shadow-2xs">
              ⌘K
            </kbd>
          </button>

          {/* Beginner Mode Toggle */}
          <button
            onClick={() => setBeginnerMode(!beginnerMode)}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              beginnerMode
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-slate-100 border-slate-200 text-slate-600'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${beginnerMode ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
            <span>Beginner Mode: <strong className={beginnerMode ? 'text-emerald-700' : 'text-slate-700'}>{beginnerMode ? 'ON' : 'OFF'}</strong></span>
          </button>

          {/* Ask AI Coach Button */}
          <button
            onClick={onOpenCoach}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-sm hover:shadow transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
            <span className="hidden sm:inline">Ask AI Coach</span>
            <span className="sm:hidden">Coach</span>
          </button>

          {/* Streak Badge */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>4 days</span>
          </div>

          {/* User Profile Pill */}
          <div 
            onClick={() => setActiveTab('progress')}
            className="flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-full bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200 cursor-pointer transition-colors"
          >
            <CoachAvatar size={24} />
            <span className="hidden sm:inline text-xs font-bold text-slate-700">Lvl 3 Explorer</span>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer Row */}
      <div className="lg:hidden flex items-center overflow-x-auto px-4 py-2 border-t border-slate-100 space-x-1 scrollbar-none bg-slate-50/50">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                isActive
                  ? 'text-indigo-700 bg-indigo-100 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
