import React, { useState } from 'react';
import { TabType } from '../types';
import { ROADMAP_MILESTONES } from '../data/curriculumData';
import { CheckCircle2, Circle, Clock, ArrowRight, Zap, Lock, Sparkles, Filter } from 'lucide-react';

interface TasksViewProps {
  onNavigate: (tab: TabType, id?: string) => void;
  beginnerMode: boolean;
  onOpenCoach: () => void;
}

export const TasksView: React.FC<TasksViewProps> = ({ onNavigate, beginnerMode, onOpenCoach }) => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  const filteredTasks = ROADMAP_MILESTONES.filter(t => {
    if (filter === 'completed') return t.status === 'completed';
    if (filter === 'pending') return t.status !== 'completed';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#f8f9ff] pb-24">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
              ROADMAP TASKS • 10 CORE MILESTONES
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Your Daily Tasks & Milestones
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear checklist of foundational exercises and Antigravity builder assignments.
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-bold">
            {(['all', 'completed', 'pending'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg capitalize transition-all cursor-pointer ${
                  filter === f ? 'bg-white text-indigo-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Tasks list */}
        <div className="space-y-3">
          {filteredTasks.map((t) => {
            const isCompleted = t.status === 'completed';
            const isCurrent = t.status === 'current';
            const isNext = t.status === 'next';

            return (
              <div
                key={t.id}
                onClick={() => {
                  if (isCurrent || isNext || isCompleted) {
                    onNavigate('antigravity');
                  }
                }}
                className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 cursor-pointer select-none ${
                  isCurrent
                    ? 'bg-indigo-50/70 border-indigo-500 ring-2 ring-indigo-500/20 shadow-xs'
                    : isCompleted
                    ? 'bg-white border-slate-200/90 hover:border-emerald-300'
                    : 'bg-slate-50/60 border-slate-200 opacity-70'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="shrink-0">
                    {isCompleted && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                    {isCurrent && <Zap className="w-5 h-5 text-indigo-600 fill-indigo-600 animate-pulse" />}
                    {!isCompleted && !isCurrent && <Circle className="w-5 h-5 text-slate-300" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-400">{t.step}</span>
                      <h3 className="text-sm font-bold text-slate-900">{t.title}</h3>
                      {isCurrent && (
                        <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-bold">
                          Current Milestone
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{t.subtitle}</p>
                  </div>
                </div>

                <div className="shrink-0">
                  {isCurrent && (
                    <button className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center gap-1 shadow-2xs">
                      <span>Resume</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                  {isCompleted && (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                      Completed ✓
                    </span>
                  )}
                  {!isCompleted && !isCurrent && (
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Locked
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
