import React, { useState } from 'react';
import { TabType, AgentBlueprint } from '../types';
import { AGENT_BLUEPRINTS } from '../data/curriculumData';
import { 
  Sparkles, 
  Layers, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Copy, 
  Check, 
  Code, 
  Play, 
  X, 
  ExternalLink,
  Bot,
  Zap,
  Cpu,
  FileText,
  Search,
  SlidersHorizontal,
  ChevronRight,
  Terminal
} from 'lucide-react';

interface ExamplesViewProps {
  onNavigate: (tab: TabType, id?: string) => void;
  beginnerMode: boolean;
  onOpenCoach: () => void;
}

export const ExamplesView: React.FC<ExamplesViewProps> = ({
  onNavigate,
  beginnerMode,
  onOpenCoach
}) => {
  const [filterCategory, setFilterCategory] = useState<'All' | 'Beginner' | 'Intermediate' | 'Productivity' | 'Study'>('All');
  const [activeModalBlueprint, setActiveModalBlueprint] = useState<AgentBlueprint | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const filteredBlueprints = AGENT_BLUEPRINTS.filter(b => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'Beginner') return b.level === 'Beginner';
    if (filterCategory === 'Intermediate') return b.level === 'Intermediate';
    return b.category === filterCategory;
  });

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] pb-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        {/* HEADER AREA */}
        <div className="relative p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          {/* Faint background watermark / shape */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-100/60 pointer-events-none hidden md:block">
            <Bot className="w-56 h-56" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>READY-TO-DEPLOY BLUEPRINTS // CURATED SUITE v2.4</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Learn by Building
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Explore 5 practical, production-ready AI agents. Learn what each agent does <strong>AND</strong> how to build it in Antigravity step-by-step with zero fluff.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-bold">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                5 Blueprints
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-indigo-600" />
                Avg. Build Time: 16m
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                Antigravity Compatible
              </span>
            </div>
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-bold scrollbar-none">
            {['All', 'Beginner', 'Intermediate', 'Productivity', 'Study'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat as any)}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  filterCategory === cat
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Agents' : cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <span>ⓘ</span>
            <span>Click any card to inspect prompt logic & flow</span>
          </div>
        </div>

        {/* AGENTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Agent 01: Research Agent */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    Level 1: Beginner
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">10 mins</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Search className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="font-mono text-xs font-bold text-indigo-600">#AGENT-01</div>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">Research Agent</h3>
                <p className="text-xs text-slate-600 italic mt-1">
                  “Research a topic and create a structured summary with verifiable facts.”
                </p>
              </div>

              {/* Flow Pipeline Chips */}
              <div className="p-2 bg-slate-50 rounded-xl flex items-center justify-between text-[11px] font-mono text-slate-600">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  Query Intake
                </span>
                <span>→</span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  Web Scraping Loop
                </span>
                <span>→</span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Markdown Synthesis
                </span>
              </div>

              {/* What you'll master */}
              <div className="space-y-2 pt-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  WHAT YOU'LL MASTER:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>Defining explicit research goals</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>Breaking down multi-query subtasks</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>Equipping web search tools</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>Formatting factual reports</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => onNavigate('antigravity')}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-2xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Learn How to Build It</span>
              </button>
              <button
                onClick={() => setActiveModalBlueprint(AGENT_BLUEPRINTS[0])}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Antigravity Prompt</span>
              </button>
              <button
                onClick={() => setActiveModalBlueprint(AGENT_BLUEPRINTS[0])}
                className="px-3 py-2 text-slate-500 hover:text-slate-800 text-xs font-semibold"
              >
                Architecture
              </button>
            </div>
          </div>

          {/* Agent 02: Study Assistant Agent (Most Popular) */}
          <div className="p-6 bg-white rounded-2xl border-2 border-indigo-200 shadow-sm space-y-4 flex flex-col justify-between relative">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                    Level 1: Beginner
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">15 mins</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white font-extrabold text-[10px] tracking-wide uppercase shadow-2xs">
                  Most Popular
                </span>
              </div>

              <div>
                <div className="font-mono text-xs font-bold text-indigo-600">#AGENT-02</div>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">Study Assistant Agent</h3>
                <p className="text-xs text-slate-600 italic mt-1">
                  “Teach me any topic from scratch, give real-world analogies, and test my knowledge with 5 adaptive questions.”
                </p>
              </div>

              {/* Core Learnings */}
              <div className="p-3.5 bg-indigo-50/50 rounded-xl border border-indigo-100 space-y-2">
                <div className="text-[10px] font-bold text-indigo-900 uppercase tracking-wider">
                  CORE LEARNINGS
                </div>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600 font-bold">💬</span>
                    <span>Interactive multi-turn dialogues</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600 font-bold">💡</span>
                    <span>Context framing & real-world analogies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600 font-bold">📝</span>
                    <span>Dynamic 5-question test logic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-600 font-bold">🎯</span>
                    <span>Iterative answer grading & feedback</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={() => setActiveModalBlueprint(AGENT_BLUEPRINTS[1])}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Inspect Blueprint & Prompt</span>
              </button>

              <div 
                onClick={onOpenCoach}
                className="flex items-center justify-between p-2 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 text-xs font-semibold cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                  <span>Antigravity Coach • Stuck on an agent loop? Click for hints</span>
                </div>
                <ChevronRight className="w-4 h-4 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Agent 03: Resume Review & Optimizer */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold text-[10px]">
                    Level 2: Intermediate
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">20 mins</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="font-mono text-xs font-bold text-indigo-600">#AGENT-03</div>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">Resume Review & Optimizer</h3>
                <p className="text-xs text-slate-600 italic mt-1">
                  “Compare my resume with a job description and suggest missing skills and bullet point improvements.”
                </p>
              </div>

              {/* Bullets */}
              <div className="p-3.5 bg-slate-50 rounded-xl space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-600 font-bold">📄</span>
                  <span><strong>Dual-Input Architecture:</strong> Resume + Target Job Spec</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-600 font-bold">🔍</span>
                  <span>Semantic gap analysis & keyword matching metrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-600 font-bold">✍</span>
                  <span>Action-oriented bullet rewriting rules</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => onNavigate('antigravity')}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-2xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Learn How to Build It</span>
              </button>
              <button
                onClick={() => setActiveModalBlueprint(AGENT_BLUEPRINTS[2])}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Prompt</span>
              </button>
            </div>
          </div>

          {/* Agent 04: Coding Assistant & Debugger */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-bold text-[10px]">
                    Level 2: Intermediate
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">25 mins</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                  <Code className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="font-mono text-xs font-bold text-indigo-600">#AGENT-04</div>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">Coding Assistant & Debugger</h3>
                <p className="text-xs text-slate-600 italic mt-1">
                  “Help beginners understand error messages, explain code line-by-line, and suggest tested fixes.”
                </p>
              </div>

              {/* Bullets */}
              <div className="p-3.5 bg-slate-50 rounded-xl space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-600 font-bold">💻</span>
                  <span><strong>REPL Environment:</strong> Safe sandbox execution & linting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-600 font-bold">🛠</span>
                  <span>Demystifying cryptic traceback stacks for novices</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-600 font-bold">🧪</span>
                  <span>Automated test assertion generation</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => onNavigate('antigravity')}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-2xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Learn How to Build It</span>
              </button>
              <button
                onClick={() => setActiveModalBlueprint(AGENT_BLUEPRINTS[3])}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Prompt</span>
              </button>
            </div>
          </div>

          {/* Agent 05: Goal to Task Productivity Agent (Span 2 cols on lg) */}
          <div className="lg:col-span-2 p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4 hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                  Level 1: Beginner
                </span>
                <span className="font-mono text-slate-400 text-[11px]">12 mins</span>
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[10px]">
                  Top Rated Workflow
                </span>
              </div>
            </div>

            <div>
              <div className="font-mono text-xs font-bold text-indigo-600">#AGENT-05</div>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">Goal to Task Productivity Agent</h3>
              <p className="text-xs text-slate-600 italic mt-1">
                “Turn broad ideas (e.g. 'Launch a podcast') into prioritized daily actionable checklist tasks.”
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="text-indigo-600">❖</span> Decomposition
                </div>
                <div className="text-[11px] text-slate-500">
                  Splits macro targets into atomic 25-minute tasks
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="text-indigo-600">☰</span> Dependency Order
                </div>
                <div className="text-[11px] text-slate-500">
                  Auto-detects blockers and sequences execution logically
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <span className="text-indigo-600">✓</span> Action Items
                </div>
                <div className="text-[11px] text-slate-500">
                  Exports directly to Markdown or task manager schema
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('antigravity')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Learn How to Build</span>
              </button>
              <button
                onClick={() => setActiveModalBlueprint(AGENT_BLUEPRINTS[4])}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Antigravity Prompt</span>
              </button>
            </div>
          </div>
        </div>

        {/* AGENT ARCHITECTURE COMPARISON TABLE (Bottom of Image 12) */}
        <section className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                QUICK REFERENCE
              </div>
              <h2 className="text-lg font-bold text-slate-900">Agent Architecture Comparison</h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              All 5 blueprints run natively inside the Antigravity Engine
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-mono text-[11px]">
                  <th className="py-2.5 px-3 font-semibold">Agent Name</th>
                  <th className="py-2.5 px-3 font-semibold">Input Type</th>
                  <th className="py-2.5 px-3 font-semibold">Tools Required</th>
                  <th className="py-2.5 px-3 font-semibold">Loop Mechanism</th>
                  <th className="py-2.5 px-3 font-semibold">Output Format</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {AGENT_BLUEPRINTS.map((agent) => (
                  <tr key={agent.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-600" />
                      <span>{agent.title}</span>
                    </td>
                    <td className="py-3 px-3 font-mono text-slate-600">
                      {agent.inputType}
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex flex-wrap gap-1">
                        {agent.tools.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-3 font-medium text-slate-700">
                      {agent.loopMechanism}
                    </td>
                    <td className="py-3 px-3 font-medium text-slate-700">
                      {agent.outputFormat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* INSPECT BLUEPRINT MODAL */}
      {activeModalBlueprint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded font-mono font-bold bg-indigo-100 text-indigo-700 text-xs">
                  {activeModalBlueprint.code}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{activeModalBlueprint.title} Blueprint</h3>
              </div>
              <button
                onClick={() => setActiveModalBlueprint(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-xs font-bold text-slate-700 mb-1">Agent Directive (System Prompt):</div>
                <pre className="p-3.5 rounded-xl bg-slate-950 text-emerald-400 font-mono text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {activeModalBlueprint.fullPrompt}
                </pre>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-700 mb-1">Sample Execution Input:</div>
                <div className="p-2.5 rounded-lg bg-slate-100 font-mono text-xs text-slate-800">
                  {activeModalBlueprint.sampleInput}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-700 mb-1">Expected Output Artifact:</div>
                <div className="p-3 rounded-lg bg-indigo-50/50 border border-indigo-100 font-mono text-xs text-slate-800 whitespace-pre-line leading-relaxed">
                  {activeModalBlueprint.simulatedOutput}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-200">
              <button
                onClick={() => handleCopyPrompt(activeModalBlueprint.fullPrompt)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedCode ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCode ? 'Prompt Copied!' : 'Copy System Prompt'}</span>
              </button>

              <button
                onClick={() => {
                  setActiveModalBlueprint(null);
                  onNavigate('antigravity');
                }}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Wire in Antigravity Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

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
