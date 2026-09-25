import React, { useState } from 'react';
import { TabType, SkillNode } from '../types';
import { SKILL_TREE_NODES } from '../data/curriculumData';
import { CoachAvatar } from '../components/CoachAvatar';
import { 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  BookOpen, 
  Compass, 
  Layers, 
  Check, 
  Share2, 
  Download, 
  Award, 
  Play, 
  Zap, 
  Lightbulb, 
  ShieldCheck, 
  ChevronRight,
  Globe
} from 'lucide-react';

interface ProgressViewProps {
  onNavigate: (tab: TabType, id?: string) => void;
  beginnerMode: boolean;
  onOpenCoach: () => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  onNavigate,
  beginnerMode,
  onOpenCoach
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('st-06');
  const selectedNode = SKILL_TREE_NODES.find(n => n.id === selectedNodeId) || SKILL_TREE_NODES[5];

  // Capstone state
  const [selectedPersona, setSelectedPersona] = useState<'finance' | 'language' | 'custom'>('language');
  const [activeCapstoneStep, setActiveCapstoneStep] = useState(1);
  const [capstoneTested, setCapstoneTested] = useState(false);
  const [capstoneLocked, setCapstoneLocked] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [sharedSuccess, setSharedSuccess] = useState(false);

  const handleTestSimulator = () => {
    setCapstoneTested(true);
  };

  const handleDownloadBadge = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  const handleShare = () => {
    setSharedSuccess(true);
    setTimeout(() => setSharedSuccess(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] pb-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        {/* HEADER AREA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="space-y-1">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              LEARNER JOURNEY • LEVEL 3 • ID: AG-8842-STUDENT
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              My Progress & Skill Tree
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Track your journey from complete novice to certified Antigravity Agent Builder.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-2xs">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>4 Days Daily Streak</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs font-bold shadow-2xs">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>1,850 XP Mastery Rank</span>
            </div>
          </div>
        </div>

        {/* OVERALL COURSE PROGRESS & METRICS GRID */}
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* 42% Circle Gauge */}
            <div className="lg:col-span-4 flex items-center gap-5 sm:border-r border-slate-100 pr-4">
              <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-100"
                    strokeWidth="3.2"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-indigo-600"
                    strokeDasharray="42, 100"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="font-extrabold text-xl text-slate-900">42%</span>
                  <span className="text-[9px] font-bold text-slate-400">COMPLETE</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900">Overall Course Progress</h3>
                  <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-mono text-[10px] font-bold">
                    On Track
                  </span>
                </div>
                <div className="text-xs text-slate-500">12 of 22 Core Units</div>
                <div className="flex items-center gap-3 pt-1 text-[11px]">
                  <span className="text-slate-600">Antigravity Skills: <strong className="text-indigo-600">35% lvl 2</strong></span>
                  <span>•</span>
                  <span className="text-slate-600">Avg Accuracy: <strong className="text-emerald-700">94% top 8%</strong></span>
                </div>
              </div>
            </div>

            {/* 4 Metrics Tiles */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Units</span>
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                </div>
                <div className="text-lg font-black text-slate-900">12 <span className="text-xs font-normal text-slate-500">/ 22</span></div>
                <div className="text-[11px] text-slate-500 mt-0.5">Lessons Completed</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Quests</span>
                  <Compass className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <div className="text-lg font-black text-slate-900">8 <span className="text-xs font-normal text-slate-500">/ 15</span></div>
                <div className="text-[11px] text-slate-500 mt-0.5">Practice Challenges</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Live</span>
                  <Layers className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div className="text-lg font-black text-slate-900">2 <span className="text-xs font-normal text-slate-500">/ 5</span></div>
                <div className="text-[11px] text-slate-500 mt-0.5">Agents Built</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                  <span>Micro-runs</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                </div>
                <div className="text-lg font-black text-slate-900">17</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Tasks Completed</div>
              </div>
            </div>
          </div>

          {/* Recommended Next Lesson Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-700 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase text-indigo-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                RECOMMENDED NEXT LESSON
              </div>
              <h4 className="text-base sm:text-lg font-bold">
                Lesson 13: Learn How to Give Antigravity Better Instructions
              </h4>
              <p className="text-xs text-indigo-100">
                You're 2 lessons away from building your first autonomous study assistant!
              </p>
            </div>

            <button
              onClick={() => onNavigate('antigravity', 'l-13')}
              className="px-5 py-2.5 rounded-xl bg-white text-indigo-900 hover:bg-indigo-50 font-bold text-xs shadow-xs flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              <span>Continue Learning</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* AGENTIC SKILL TREE SECTION */}
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                Agentic Skill Tree
              </h2>
              <p className="text-xs text-slate-500">
                Click any node to inspect syllabus depth, prerequisites, unlocked tools, and XP rewards.
              </p>
            </div>

            {/* Tree Legend */}
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Mastered (5)
              </span>
              <span className="flex items-center gap-1.5 text-indigo-700">
                <span className="w-2 h-2 rounded-full bg-indigo-600" /> Active Loop (1)
              </span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-slate-300" /> Locked (6)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* SKILL TREE TIERS (LEFT) */}
            <div className="lg:col-span-8 space-y-6">
              {/* TIER 1: Foundations */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-slate-500 uppercase">TIER 1 • FOUNDATIONS OF AUTONOMY</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">100% Cleared</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SKILL_TREE_NODES.filter(n => n.tier === 1).map(node => (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedNodeId === node.id
                          ? 'border-indigo-600 bg-indigo-50/40 ring-2 ring-indigo-500/20'
                          : 'border-emerald-200 bg-white hover:border-emerald-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span className="font-mono text-[10px] text-emerald-800 font-bold">+{node.xp} XP</span>
                      </div>
                      <div className="text-xs font-bold text-slate-900">{node.title}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{node.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TIER 2: Reasoning Loops */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-slate-500 uppercase">TIER 2 • REASONING LOOPS & TOOL ARCHITECTURE</span>
                  <span className="text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">In Progress</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SKILL_TREE_NODES.filter(n => n.tier === 2).map(node => {
                    const isActive = node.status === 'active';
                    return (
                      <div
                        key={node.id}
                        onClick={() => setSelectedNodeId(node.id)}
                        className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                          selectedNodeId === node.id
                            ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-500/30 shadow-xs'
                            : isActive
                            ? 'border-indigo-400 bg-indigo-50/20'
                            : 'border-emerald-200 bg-white hover:border-emerald-300'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs mb-1">
                          {isActive ? (
                            <Zap className="w-4 h-4 text-indigo-600 fill-indigo-600 animate-pulse" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          )}
                          <span className={`font-mono text-[10px] font-bold ${isActive ? 'text-indigo-700' : 'text-emerald-800'}`}>
                            {isActive ? 'ACTIVE • ' : ''}+{node.xp} XP
                          </span>
                        </div>
                        <div className="text-xs font-bold text-slate-900">{node.title}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{node.description}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* TIER 3: Antigravity Runtime */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-slate-500 uppercase">TIER 3 • ANTIGRAVITY RUNTIME MASTERY</span>
                  <span className="text-slate-400">Locked Branch</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SKILL_TREE_NODES.filter(n => n.tier === 3).map(node => (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedNodeId === node.id
                          ? 'border-indigo-600 bg-indigo-50/40 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 bg-slate-50/70 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <Lock className="w-3.5 h-3.5 text-slate-400" />
                        <span className="font-mono text-[10px] text-slate-400">+{node.xp} XP</span>
                      </div>
                      <div className="text-xs font-bold text-slate-800">{node.title}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{node.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TIER 4: Production Readiness */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-slate-500 uppercase">TIER 4 • PRODUCTION READINESS & CERTIFICATION</span>
                  <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Capstone Arc</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SKILL_TREE_NODES.filter(n => n.tier === 4).map(node => (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedNodeId === node.id
                          ? 'border-indigo-600 bg-indigo-50/40 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 bg-slate-50/70 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <Lock className="w-3.5 h-3.5 text-slate-400" />
                        <span className="font-mono text-[10px] text-slate-400">+{node.xp} XP</span>
                      </div>
                      <div className="text-xs font-bold text-slate-800">{node.title}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{node.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* NODE INSPECTOR (RIGHT) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-5 bg-white rounded-2xl border border-indigo-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
                    CURRENT FOCUS
                  </span>
                  <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-mono font-bold text-[10px]">
                    +{selectedNode.xp} XP Value
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{selectedNode.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {selectedNode.description}
                  </p>
                </div>

                {/* Prerequisites */}
                <div className="space-y-1.5">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    PREREQUISITES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNode.prerequisites.map((p, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold flex items-center gap-1"
                      >
                        ✓ {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Concepts */}
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    KEY CONCEPTS
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {selectedNode.keyConcepts.map((kc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-indigo-600 font-bold leading-none mt-0.5">›</span>
                        <span>{kc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coach Tip bubble */}
                <div 
                  onClick={onOpenCoach}
                  className="p-3 bg-purple-50/70 rounded-xl border border-purple-200 text-xs text-purple-950 space-y-1 cursor-pointer hover:bg-purple-100 transition-colors"
                >
                  <div className="flex items-center gap-2 font-bold text-[11px] text-purple-900">
                    <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                    <span>Antigravity Coach • Stuck on an agent loop? Click for hints</span>
                  </div>
                  <p className="text-[11px] text-purple-900/80 leading-relaxed">
                    {selectedNode.coachTip}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onNavigate('antigravity', 'l-13')}
                  className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Enter Current Lesson (13)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Pro-tip for Beginners */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1 shadow-2xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Pro-tip for Beginners</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {selectedNode.proTip}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CAPSTONE: BUILD YOUR OWN AGENT (Requirement #21) */}
        <section className="p-6 bg-white rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                MILESTONE PROJECT • Requirement #21
              </div>
              <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                Final Capstone: Build Your Own Agent
              </h2>
              <p className="text-xs text-slate-500">
                Execute the full 10-step autonomous pipeline. Design, connect live tools, test in the simulator, and claim your credential.
              </p>
            </div>

            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Capstone Status: Ready to Configure
            </span>
          </div>

          {/* 10-Step Wizard Indicator */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs font-semibold text-slate-600 scrollbar-none">
            {[
              { n: 1, label: 'Problem' },
              { n: 2, label: 'Goal' },
              { n: 3, label: 'Inputs' },
              { n: 4, label: 'Actions' },
              { n: 5, label: 'Tools' },
              { n: 6, label: 'Output' },
              { n: 7, label: 'Antigravity' },
              { n: 8, label: 'Test' },
              { n: 9, label: 'Improve' },
              { n: 10, label: 'Complete' }
            ].map((s, idx) => (
              <React.Fragment key={s.n}>
                <button
                  onClick={() => setActiveCapstoneStep(s.n)}
                  className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                    activeCapstoneStep === s.n
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white/20 text-center text-[10px] font-bold flex items-center justify-center">
                    {s.n}
                  </span>
                  <span>{s.label}</span>
                </button>
                {idx < 9 && <span className="text-slate-300 text-xs">→</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Step 1: Choose Persona */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                  STEP 1: CHOOSE YOUR CAPSTONE PERSONA
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div
                    onClick={() => setSelectedPersona('finance')}
                    className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                      selectedPersona === 'finance'
                        ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-500/20'
                        : 'border-slate-200 bg-white hover:border-indigo-200'
                    }`}
                  >
                    <div className="text-indigo-600 mb-1">💳</div>
                    <div className="text-xs font-bold text-slate-900">Personal Finance</div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Categorizes receipts & calculates monthly budgets.
                    </div>
                  </div>

                  <div
                    onClick={() => setSelectedPersona('language')}
                    className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                      selectedPersona === 'language'
                        ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-500/20'
                        : 'border-slate-200 bg-white hover:border-indigo-200'
                    }`}
                  >
                    <div className="text-indigo-600 mb-1">🗣</div>
                    <div className="text-xs font-bold text-slate-900">Language Partner</div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Corrects mistakes gently with cultural context.
                    </div>
                  </div>

                  <div
                    onClick={() => setSelectedPersona('custom')}
                    className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                      selectedPersona === 'custom'
                        ? 'border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-500/20'
                        : 'border-slate-200 bg-white hover:border-indigo-200'
                    }`}
                  >
                    <div className="text-indigo-600 mb-1">✨</div>
                    <div className="text-xs font-bold text-slate-900">Custom Agent</div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Invent your own multi-step micro workflow.
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Agent Instruction Prompt */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">INTERACTIVE AGENT INSTRUCTION PROMPT</span>
                  <span className="font-mono text-slate-400 text-[10px]">Antigravity Format v2</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs space-y-2 leading-relaxed">
                  <div className="text-indigo-400 font-bold">
                    <span className="bg-indigo-900/60 px-1.5 py-0.5 rounded text-[10px] mr-1.5">ROLE</span>
                    Spanish Conversation Tutor for Beginners
                  </div>
                  <div className="text-slate-300 text-[11px]">
                    You are an empathetic, patient language tutor named Sol. If the user makes a grammar mistake in Spanish, do NOT fail them. First mirror the intended meaning, provide a 1-sentence tip in English, and ask an open follow-up question in beginner-friendly Spanish.
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400">Enabled Tools:</span>
                      <span className="text-emerald-400 font-semibold">dictionary_lookup, level_assessor</span>
                    </div>

                    <button
                      onClick={handleTestSimulator}
                      className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>Test in Simulator</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Simulator Output Preview */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="font-bold text-slate-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    SIMULATOR OUTPUT PREVIEW
                  </span>
                  <span>Latency: 280ms • 0 Errors</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-800 italic leading-relaxed">
                  “¡Muy bien! Tu frase 'Yo tener hambre' se entiende perfectamente. Tip: con 'Yo' usamos el verbo 'tengo' → 'Yo tengo hambre'. ¿Qué te gustaría comer hoy?”
                </div>
              </div>
            </div>

            {/* CERTIFICATE PREVIEW (RIGHT) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 border border-indigo-200 text-center space-y-4 shadow-sm relative overflow-hidden">
                <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest flex items-center justify-center gap-1">
                  <Award className="w-3.5 h-3.5 text-indigo-600" />
                  Final Capstone Credential Preview
                </div>

                {/* Certificate Diploma Card */}
                <div className="p-4 bg-white rounded-xl border border-indigo-100 shadow-2xs space-y-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white mx-auto flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      OFFICIAL CERTIFICATE
                    </div>
                    <div className="text-base font-extrabold text-slate-900 mt-0.5">
                      Antigravity Agent Builder
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    Conferred upon deploying an autonomous multi-step reasoning agent with verified tool guardrails.
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[9px]">
                        AL
                      </span>
                      <span>Alex Rivera</span>
                    </div>
                    <span className="font-mono">Issued Dec 2026</span>
                  </div>
                </div>

                <button
                  onClick={() => setCapstoneLocked(!capstoneLocked)}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs shadow-xs flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                    capstoneLocked
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>{capstoneLocked ? 'Capstone Submitted! ✓' : 'Lock In Capstone Project'}</span>
                </button>
                <div className="text-[10px] text-slate-400">
                  Unlocks final exam review upon submission
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CELEBRATION BADGE BANNER (Bottom of Image 14) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg shrink-0">
              🎉
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                You Built Your First Agent!
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Completed prerequisite micro-loop "Weather + Calculator Bot". Share with your peer circle!
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={handleDownloadBadge}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {downloadSuccess ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Download className="w-3.5 h-3.5" />}
              <span>{downloadSuccess ? 'Downloaded!' : 'Download Badge PNG'}</span>
            </button>

            <button
              onClick={handleShare}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{sharedSuccess ? 'Link Copied!' : 'Share to LinkedIn'}</span>
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900">Agentic AI Academy</span>
            <span>— Master autonomous agents with simulated micro-loops</span>
          </div>

          <div className="flex items-center gap-6 font-medium">
            <button onClick={() => onNavigate('learn')} className="hover:text-indigo-600">Curriculum</button>
            <button onClick={() => onNavigate('antigravity')} className="hover:text-indigo-600">Simulator</button>
            <button onClick={() => onNavigate('examples')} className="hover:text-indigo-600">Agent Recipes</button>
            <button onClick={() => onNavigate('glossary')} className="hover:text-indigo-600">Glossary</button>
          </div>

          <div>
            © 2026 Agentic AI Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
