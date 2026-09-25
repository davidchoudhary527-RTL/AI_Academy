import React, { useState } from 'react';
import { TabType } from '../types';
import { GLOSSARY_ITEMS } from '../data/curriculumData';
import { Search, Sparkles, BookOpen, Layers, Terminal } from 'lucide-react';

interface GlossaryViewProps {
  onNavigate: (tab: TabType, id?: string) => void;
  beginnerMode: boolean;
  onOpenCoach: () => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ onNavigate, beginnerMode, onOpenCoach }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Core', 'Platform', 'Architecture', 'Engineering', 'Safety', 'LLM Parameters', 'Outputs'];

  const filtered = GLOSSARY_ITEMS.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(search.toLowerCase()) ||
                          item.definition.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen bg-[#f8f9ff] pb-24">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        <div className="space-y-2 pb-4 border-b border-slate-200">
          <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
            AGENTIC AI DICTIONARY
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Key Agentic Terms & Antigravity Concepts
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Plain-English explanations designed specifically for beginners entering the autonomous agent space.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search concepts (e.g. 'ReAct', 'Guardrail', 'Tool')..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-2xs"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto text-xs font-semibold scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Glossary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs space-y-2 hover:border-indigo-300 transition-colors"
            >
              <div className="flex items-center justify-between text-xs">
                <h3 className="text-base font-bold text-slate-900">{item.term}</h3>
                <span className="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
