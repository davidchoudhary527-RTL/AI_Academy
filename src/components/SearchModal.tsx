import React, { useState } from 'react';
import { COURSE_LESSONS, AGENT_BLUEPRINTS, GLOSSARY_ITEMS } from '../data/curriculumData';
import { TabType } from '../types';
import { Search, X, BookOpen, Layers, Terminal, Sparkles, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: TabType, id?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const filteredLessons = COURSE_LESSONS.filter(
    (l) => l.title.toLowerCase().includes(q) || l.summary?.toLowerCase().includes(q)
  );

  const filteredBlueprints = AGENT_BLUEPRINTS.filter(
    (b) => b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q)
  );

  const filteredGlossary = GLOSSARY_ITEMS.filter(
    (g) => g.term.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-slate-900/50 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[75vh] animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Search Input Bar */}
        <div className="p-3.5 border-b border-slate-200 flex items-center gap-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-indigo-600 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lessons, tools, agents, concepts (e.g. 'prompt', 'ReAct', 'research')..."
            className="flex-1 text-sm bg-transparent outline-hidden text-slate-800 placeholder-slate-400 font-medium"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-slate-500 bg-slate-200/60 rounded-md hover:bg-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Blueprints Section */}
          {filteredBlueprints.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-500" />
                Agent Blueprints ({filteredBlueprints.length})
              </div>
              <div className="space-y-1.5">
                {filteredBlueprints.map((b) => (
                  <div
                    key={b.id}
                    onClick={() => {
                      onNavigate('examples', b.id);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 flex items-center justify-between cursor-pointer transition-all group"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-indigo-700 flex items-center gap-2">
                        <span>{b.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                          {b.code}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {b.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lessons Section */}
          {filteredLessons.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                Curriculum Lessons ({filteredLessons.length})
              </div>
              <div className="space-y-1.5">
                {filteredLessons.slice(0, 6).map((l) => (
                  <div
                    key={l.id}
                    onClick={() => {
                      onNavigate('antigravity', l.id);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 flex items-center justify-between cursor-pointer transition-all group"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-indigo-700 flex items-center gap-2">
                        <span className="font-mono text-indigo-600">{l.number}</span>
                        <span>{l.title}</span>
                        <span className="text-[10px] font-medium text-slate-400">Phase {l.phase}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {l.summary}
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                      +{l.xp} XP
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Glossary Section */}
          {filteredGlossary.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                Glossary Terms ({filteredGlossary.length})
              </div>
              <div className="space-y-1.5">
                {filteredGlossary.map((g, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      onNavigate('glossary');
                      onClose();
                    }}
                    className="p-2.5 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 cursor-pointer transition-all group"
                  >
                    <div className="text-xs font-bold text-slate-800 group-hover:text-indigo-700">
                      {g.term}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                      {g.definition}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredLessons.length === 0 && filteredBlueprints.length === 0 && filteredGlossary.length === 0 && (
            <div className="text-center py-10 text-slate-400 text-sm">
              No matching modules or terms found for "{query}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
