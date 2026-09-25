import React, { useState } from 'react';
import { TabType } from '../types';
import { ROADMAP_MILESTONES } from '../data/curriculumData';
import { CoachAvatar } from '../components/CoachAvatar';
import { 
  Sparkles, 
  ArrowRight, 
  Flame, 
  CheckCircle2, 
  Play, 
  Lock, 
  Layers, 
  Cpu, 
  Terminal, 
  Check, 
  Copy, 
  AlertTriangle, 
  HelpCircle,
  RefreshCw,
  Search,
  BookOpen,
  Send,
  Zap,
  ChevronRight,
  Info
} from 'lucide-react';

interface LearnViewProps {
  onNavigate: (tab: TabType, id?: string) => void;
  beginnerMode: boolean;
  onOpenCoach: () => void;
}

export const LearnView: React.FC<LearnViewProps> = ({ onNavigate, beginnerMode, onOpenCoach }) => {
  // Step-by-step interactive playground state
  const [activeExerciseStep, setActiveExerciseStep] = useState(1);
  const [userPromptInput, setUserPromptInput] = useState(
    'Create a study assistant that explains quantum physics to a high schooler with 3 practice quiz questions.'
  );
  const [copiedSuccess, setCopiedSuccess] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  const [evaluationScores, setEvaluationScores] = useState({
    clarity: 95,
    context: 88,
    output: 92,
    grade: 'A+ (92/100)'
  });

  // Simulated Antigravity Tour step
  const [tourStep, setTourStep] = useState(3);
  const [simTestRunning, setSimTestRunning] = useState(false);
  const [simTestLogs, setSimTestLogs] = useState<string[]>([
    '[0.12s] Initializing nodes A, B, C',
    '[0.35s] Fetching analogy store...',
    '[0.80s] Agent formulated draft explanation',
    '[1.04s] Ready: 3 quiz items formatted'
  ]);

  const handleRunEvaluation = () => {
    setEvaluating(true);
    setTimeout(() => {
      // Dynamic calculation based on length and keywords
      const hasNumbers = /\d/.test(userPromptInput);
      const hasAudience = /student|high school|beginner|user|engineer/i.test(userPromptInput);
      const clarityScore = Math.min(98, Math.max(70, Math.floor(userPromptInput.length * 0.8) + (hasNumbers ? 15 : 0)));
      const contextScore = hasAudience ? 92 : 74;
      const outputScore = /format|quiz|markdown|table|bullet/i.test(userPromptInput) ? 94 : 80;
      const avg = Math.round((clarityScore + contextScore + outputScore) / 3);

      setEvaluationScores({
        clarity: clarityScore,
        context: contextScore,
        output: outputScore,
        grade: avg >= 90 ? `A+ (${avg}/100)` : avg >= 80 ? `B+ (${avg}/100)` : `C (${avg}/100)`
      });
      setEvaluating(false);
    }, 450);
  };

  const handleCopyInstruction = () => {
    navigator.clipboard.writeText(userPromptInput);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  const runSimulatorTest = () => {
    setSimTestRunning(true);
    setSimTestLogs(['[0.01s] Starting test payload dispatch...']);
    setTimeout(() => {
      setSimTestLogs(prev => [...prev, '[0.14s] Node A extracted audience: "High School"']);
    }, 400);
    setTimeout(() => {
      setSimTestLogs(prev => [...prev, '[0.42s] Node B queried "Qubit superposition analogy"']);
    }, 800);
    setTimeout(() => {
      setSimTestLogs(prev => [
        ...prev, 
        '[0.95s] Node C emitted 3-question diagnostic rubric',
        '[1.18s] ✓ Test Passed without hallucination'
      ]);
      setSimTestRunning(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] pb-24">
      {/* Beginner Mode Active Top Strip */}
      {beginnerMode && (
        <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-4 py-2 text-xs text-emerald-900 font-medium">
          <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                <strong>Beginner Mode active:</strong> Complex agent concepts are simplified into plain English. Hover over terms with dotted underlines for instant plain-language definitions.
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="bg-emerald-100/90 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                Zero-Code Track
              </span>
              <span className="bg-white/80 text-emerald-800 px-2 py-0.5 rounded-full font-bold border border-emerald-200">
                Demo Simplifier
              </span>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold tracking-tight">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>From Absolute Zero to Agentic Creator</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Learn AI. Learn Antigravity.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-800">
                Build Your First Agent.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              A beginner-friendly, step-by-step interactive academy. Master autonomous micro-loops, demystify agent orchestration, and harness the Antigravity studio to build reliable, helpful agents with zero guesswork.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('antigravity')}
                className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('antigravity')}
                className="px-5 py-3 rounded-full bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Learn Antigravity</span>
                <span className="text-sm">🪄</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('simulated-interface');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-3 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Try Interactive Tour</span>
              </button>
            </div>

            {/* Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 mb-0.5">
                  <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>4-Day Streak</span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Top 12% Consistency</div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 mb-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>30% Overall Progress</span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">3 of 10 Milestones</div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-800 mb-0.5">
                  <Cpu className="w-4 h-4 text-indigo-600" />
                  <span>2 Agents Built</span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Research & Summary</div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-purple-800 mb-0.5">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>Level 3 Explorer</span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">850 XP Earned</div>
              </div>
            </div>
          </div>

          {/* Right Live Simulation Widget & Floating Coach Dialog */}
          <div className="lg:col-span-5 relative space-y-4">
            {/* Top Interactive Canvas Micro-Cycle */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-[11px] text-slate-500">antigravity.run::sim-canvas</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Agent Active
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-slate-800">Live Agent Micro-Cycle</div>
                <span className="text-[10px] font-mono text-indigo-600 font-semibold">State: ITERATION_02</span>
              </div>

              {/* 3 Step Micro-Cycle Visual */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-indigo-50/80 border border-indigo-200">
                  <div className="text-indigo-600 mb-1 flex justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-slate-800 text-[11px]">Goal</div>
                  <div className="text-[10px] text-indigo-600 font-mono">Parsed</div>
                </div>

                <div className="p-2.5 rounded-xl bg-violet-50/80 border border-violet-200">
                  <div className="text-violet-600 mb-1 flex justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-slate-800 text-[11px]">Tool</div>
                  <div className="text-[10px] text-violet-600 font-mono">Web Search</div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200">
                  <div className="text-emerald-600 mb-1 flex justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="font-bold text-slate-800 text-[11px]">Verify</div>
                  <div className="text-[10px] text-emerald-600 font-mono">96% Conf.</div>
                </div>
              </div>

              {/* Code trace strip */}
              <div className="p-2 bg-slate-900 rounded-lg text-[10px] font-mono text-emerald-400 overflow-x-auto">
                <code>SYSTEM_STREAM: &gt; User: "Explain quantum qubits" &gt; Agent: Invoking tool &lt;web_search&gt;... loop[1/3] &gt; Result: Validated.</code>
              </div>
            </div>

            {/* Coach Nova Floating Chat Preview */}
            <div className="bg-white rounded-2xl border border-indigo-200/90 shadow-lg p-4 space-y-3 relative">
              <div className="flex items-center justify-between pb-2 border-b border-indigo-50">
                <div className="flex items-center gap-2.5">
                  <CoachAvatar size={30} />
                  <div>
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      Antigravity Coach
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <div className="text-[10px] text-slate-500">Patient Teacher Mode • Level 1-3</div>
                  </div>
                </div>
                <button 
                  onClick={onOpenCoach}
                  className="text-indigo-600 hover:text-indigo-700 text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Open Chat</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Chat bubble demo */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-900 text-[11px] leading-relaxed">
                  Hi! I'm your Antigravity coach. Think of me as your patient peer programmer. You're currently on <strong>Milestone 04 (AI Workflows)</strong>. What concept can I make crystal clear for you right now?
                </div>

                <div className="flex justify-end">
                  <div className="p-2.5 rounded-xl bg-indigo-600 text-white font-medium text-[11px] max-w-[85%]">
                    What is the difference between a prompt and an agent?
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 text-[11px] leading-relaxed">
                  💬 <strong>Prompt:</strong> Like asking a friend a single question. They give an answer, and that's it.<br/>
                  🤖 <strong>Agent:</strong> Like giving an assistant an objective. If they run into an obstacle, they use tools, retry, and report back when finished!
                </div>
              </div>

              {/* Interactive quick ask bar */}
              <div 
                onClick={onOpenCoach}
                className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-400 text-xs cursor-pointer hover:border-indigo-300 transition-colors"
              >
                <span>Ask anything in plain English...</span>
                <Send className="w-3.5 h-3.5 text-indigo-600" />
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP SECTION */}
        <section className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Structured Learning Pathway
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Your Journey Roadmap</h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Ten tactile milestones designed to take you from foundational understanding to constructing real, production-ready AI agents inside Antigravity.
              </p>
            </div>
            <button
              onClick={() => onNavigate('tasks')}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>View All 10 Tasks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Active Assignment Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-950 text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-4">
              <button 
                onClick={() => onNavigate('antigravity', 'l-04')}
                className="w-12 h-12 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white flex items-center justify-center shrink-0 shadow-md transition-transform hover:scale-105 cursor-pointer"
              >
                <Play className="w-5 h-5 fill-white ml-0.5" />
              </button>
              <div>
                <div className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">
                  ACTIVE ASSIGNMENT
                </div>
                <div className="text-base sm:text-lg font-bold">
                  Continue where you left off: Lesson 04 — What is a Prompt?
                </div>
                <p className="text-xs text-indigo-200 mt-0.5 max-w-xl">
                  Explore how clear instructions steer agent logic before invoking tool loops.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCoach}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <CoachAvatar size={20} />
                <span>Ask Coach Nova</span>
              </button>
              <button
                onClick={() => onNavigate('antigravity', 'l-04')}
                className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
              >
                Resume Lesson
              </button>
            </div>
          </div>

          {/* 10 Milestone Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5">
            {ROADMAP_MILESTONES.map((m) => {
              const isCompleted = m.status === 'completed';
              const isCurrent = m.status === 'current';
              const isNext = m.status === 'next';
              const isCapstone = m.status === 'capstone';

              return (
                <div
                  key={m.id}
                  onClick={() => {
                    if (isCompleted || isCurrent || isNext) {
                      onNavigate('antigravity');
                    }
                  }}
                  className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between h-32 select-none ${
                    isCurrent
                      ? 'bg-indigo-50/90 border-indigo-500 ring-2 ring-indigo-500/20 shadow-xs cursor-pointer'
                      : isCompleted
                      ? 'bg-white border-emerald-200 hover:border-emerald-300 shadow-2xs cursor-pointer'
                      : isNext
                      ? 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs cursor-pointer'
                      : 'bg-slate-50/70 border-slate-200/80 opacity-70 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-mono text-slate-500 font-semibold">{m.step}</span>
                    {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                    {isCurrent && <Zap className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600 animate-pulse" />}
                    {!isCompleted && !isCurrent && <Lock className="w-3 h-3 text-slate-400" />}
                  </div>

                  <div>
                    <div className={`text-xs font-bold leading-tight ${isCurrent ? 'text-indigo-900' : 'text-slate-800'}`}>
                      {m.title}
                    </div>
                    <div className="text-[10px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                      {m.subtitle}
                    </div>
                  </div>

                  <div className="text-[9px] font-bold uppercase tracking-wider">
                    {isCompleted && <span className="text-emerald-700">✓ Completed</span>}
                    {isCurrent && <span className="text-indigo-700">Current Milestone</span>}
                    {isNext && <span className="text-slate-500">Up Next</span>}
                    {m.status === 'locked' && <span className="text-slate-400">Locked</span>}
                    {isCapstone && <span className="text-purple-600">Capstone</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CORE INTERACTIVE EXERCISE */}
        <section className="space-y-6 pt-4">
          <div className="border-b border-slate-200 pb-3">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
              Core Interactive Exercise
            </div>
            <h2 className="text-2xl font-bold text-slate-900">How to Use Antigravity: Step-by-Step</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Follow the 5-step loop: Learn the fundamental principle, inspect the difference, try drafting instructions, practice in the canvas, and get instant AI coaching.
            </p>
          </div>

          {/* 5-Step Segmented Navigation */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100/80 rounded-xl max-w-xl overflow-x-auto scrollbar-none">
            {['1. Learn', '2. See', '3. Try', '4. Practice', '5. AI Check'].map((name, idx) => {
              const stepNum = idx + 1;
              const isActive = activeExerciseStep === stepNum;
              return (
                <button
                  key={name}
                  onClick={() => setActiveExerciseStep(stepNum)}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all text-center whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>

          {/* Exercise Step 1: Give Antigravity a Clear Goal */}
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-extrabold text-base flex items-center justify-center shadow-xs">
                  1
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Give Antigravity a Clear Goal</h3>
                  <p className="text-xs text-slate-500">
                    Antigravity works best when you clearly explain what you want to accomplish, whom it is for, and how the output should look.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full self-start sm:self-auto">
                Rule #1: Clarity &gt; Length
              </span>
            </div>

            {/* Comparison Cards: Vague vs Precise Instruction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Vague Card */}
              <div className="p-4 rounded-xl bg-rose-50/40 border border-rose-200 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-rose-700 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Vague Instruction
                  </span>
                  <span className="text-[10px] font-bold text-rose-600 bg-rose-100 px-2 py-0.5 rounded">
                    Low Success Rate
                  </span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-rose-200/80 font-mono text-xs text-rose-900 font-medium">
                  "Make an agent."
                </div>
                <div className="text-xs space-y-1 text-slate-600">
                  <div className="font-bold text-[11px] text-slate-700">Why this confuses Antigravity:</div>
                  <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
                    <li>No defined inputs or expected outputs</li>
                    <li>No context on user audience or constraints</li>
                    <li>Agent triggers random search tools without validation</li>
                  </ul>
                </div>
              </div>

              {/* Precise Card */}
              <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Precise Instruction
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    98% Success Rate
                  </span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-emerald-200/80 font-mono text-xs text-emerald-950 font-medium">
                  "Create an agent that researches a topic, summarizes the information, and presents the results in simple language with 3 quiz questions."
                </div>
                <div className="text-xs space-y-1 text-slate-600">
                  <div className="font-bold text-[11px] text-slate-700">Why Antigravity succeeds:</div>
                  <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
                    <li>Clear 3-step action chain (research -&gt; summarize -&gt; present)</li>
                    <li>Explicit target tone specified ("simple language")</li>
                    <li>Concrete verification deliverable (3 quiz questions)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Try It: Interactive Input */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900">Try It: What would you tell Antigravity?</div>
                  <div className="text-xs text-slate-500">
                    Type or tweak your instruction below to see how Antigravity evaluates clarity, context, and deliverable specs.
                  </div>
                </div>
                <button
                  onClick={() => setUserPromptInput('Create a study assistant that explains quantum physics to a high schooler with 3 practice quiz questions.')}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Reset Example
                </button>
              </div>

              <div className="relative">
                <textarea
                  rows={3}
                  value={userPromptInput}
                  onChange={(e) => setUserPromptInput(e.target.value)}
                  className="w-full text-xs font-mono p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-slate-800 transition-all leading-relaxed"
                  placeholder="Enter your agent prompt here..."
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3 text-slate-500 text-[11px]">
                  <span>Word count: <strong>{userPromptInput.trim().split(/\s+/).filter(Boolean).length}</strong></span>
                  <span>•</span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                    Format: 3 Requirements Detected
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyInstruction}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedSuccess ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSuccess ? 'Copied!' : 'Copy to Antigravity'}</span>
                  </button>

                  <button
                    onClick={handleRunEvaluation}
                    disabled={evaluating}
                    className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>{evaluating ? 'Analyzing...' : 'Check My Instruction'}</span>
                  </button>
                </div>
              </div>

              {/* Real-time AI Evaluation Card */}
              <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-bold text-slate-900">
                      AI Coach Evaluation: Ready to Deploy
                    </span>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    Grade: {evaluationScores.grade}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-2.5 rounded-lg bg-white border border-indigo-100">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                      <span>Goal Clarity</span>
                      <span className="text-indigo-600 font-bold">{evaluationScores.clarity}% (Excellent)</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">Explaining quantum physics</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-indigo-100">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                      <span>Context / Audience</span>
                      <span className="text-indigo-600 font-bold">{evaluationScores.context}% (Good)</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">High school student level</div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-indigo-100">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                      <span>Expected Output</span>
                      <span className="text-indigo-600 font-bold">{evaluationScores.output}% (High)</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">3 practice questions</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-lg border border-indigo-100 text-xs text-slate-700 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong>Pro tip from AI Coach:</strong> Add a simple sentence: <em>"Wait for the student to answer each question before revealing the solution."</em> This turns a static prompt into a true interactive agent loop!
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    onClick={() => onNavigate('antigravity')}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                  >
                    <span>Try It in Antigravity Tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SIMULATED ANTIGRAVITY INTERFACE TOUR */}
        <section id="simulated-interface" className="space-y-6 pt-4">
          <div className="border-b border-slate-200 pb-3">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              Interactive Simulator Tour
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Simulated Antigravity Interface</h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Never get lost. Click the 5 guided stops to see exactly what each panel in Antigravity does before building your first live autonomous agent.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                <span>Tour Step {tourStep} of 5</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setTourStep(prev => Math.max(1, prev - 1))}
                    disabled={tourStep === 1}
                    className="p-1 rounded bg-slate-200 disabled:opacity-40 hover:bg-slate-300"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setTourStep(prev => Math.min(5, prev + 1))}
                    disabled={tourStep === 5}
                    className="p-1 rounded bg-slate-200 disabled:opacity-40 hover:bg-slate-300"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Guided Stops Stepper */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              { num: 1, name: 'Create Project' },
              { num: 2, name: 'Instruction Area' },
              { num: 3, name: 'Agent / Workflow' },
              { num: 4, name: 'Tools Palette' },
              { num: 5, name: 'Run / Test' }
            ].map(step => (
              <button
                key={step.num}
                onClick={() => setTourStep(step.num)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  tourStep === step.num
                    ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className={`text-[10px] font-bold uppercase tracking-wider ${tourStep === step.num ? 'text-indigo-200' : 'text-slate-400'}`}>
                  Step {step.num} {tourStep === step.num && '(Active)'}
                </div>
                <div className="text-xs font-bold mt-0.5">{step.name}</div>
              </button>
            ))}
          </div>

          {/* Multi-Pane Simulated IDE Mockup */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden text-slate-200">
            {/* Top IDE Bar */}
            <div className="px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <span className="font-mono text-[11px] text-slate-400">
                  Antigravity Studio — Project: "Quantum-Tutor-v1"
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Engine: Connected
              </div>
            </div>

            {/* Main IDE Grid */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-3 min-h-[380px]">
              {/* Left Column: Projects & Tools */}
              <div className="md:col-span-3 space-y-3">
                {/* Projects pane */}
                <div className={`p-3 rounded-xl border transition-all ${
                  tourStep === 1 
                    ? 'bg-indigo-950/80 border-indigo-400 ring-2 ring-indigo-500/40' 
                    : 'bg-slate-800/60 border-slate-700/60'
                }`}>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-200 mb-2">
                    <span>Projects</span>
                    <span className="w-4 h-4 rounded-full bg-indigo-500 text-white text-[10px] flex items-center justify-center">1</span>
                  </div>
                  <button className="w-full py-1.5 px-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold mb-2 shadow-2xs">
                    + New Project
                  </button>
                  <div className="space-y-1 text-xs">
                    <div className="p-1.5 rounded bg-indigo-900/60 text-indigo-200 font-mono text-[11px] flex items-center gap-1.5">
                      📁 Quantum-Tutor-v1
                    </div>
                    <div className="p-1.5 rounded hover:bg-slate-700/50 text-slate-400 font-mono text-[11px] flex items-center gap-1.5">
                      📁 PDF-Research-Bot
                    </div>
                  </div>
                </div>

                {/* Available Tools */}
                <div className={`p-3 rounded-xl border transition-all ${
                  tourStep === 4 
                    ? 'bg-indigo-950/80 border-indigo-400 ring-2 ring-indigo-500/40' 
                    : 'bg-slate-800/60 border-slate-700/60'
                }`}>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-200 mb-1">
                    <span>Available Tools</span>
                    <span className="w-4 h-4 rounded-full bg-indigo-500 text-white text-[10px] flex items-center justify-center">4</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mb-2">Drag or toggle tools for your agent:</div>
                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="p-1.5 rounded bg-slate-900/80 border border-slate-700 flex items-center justify-between text-[11px] text-slate-300">
                      <span>🌐 Web Search</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="p-1.5 rounded bg-slate-900/80 border border-slate-700 flex items-center justify-between text-[11px] text-slate-300">
                      <span>📄 PDF Reader</span>
                      <span className="w-2 h-2 rounded-full bg-slate-600" />
                    </div>
                    <div className="p-1.5 rounded bg-slate-900/80 border border-slate-700 flex items-center justify-between text-[11px] text-slate-300">
                      <span>⚡ Python Sandbox</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column: Instruction & Workflow Canvas */}
              <div className="md:col-span-6 space-y-3">
                {/* Instruction / Prompt Canvas */}
                <div className={`p-3.5 rounded-xl border transition-all ${
                  tourStep === 2 
                    ? 'bg-indigo-950/80 border-indigo-400 ring-2 ring-indigo-500/40' 
                    : 'bg-slate-800/60 border-slate-700/60'
                }`}>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-200 mb-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-indigo-500 text-white text-[10px] flex items-center justify-center">2</span>
                      Instruction / Prompt Canvas
                    </span>
                    <span className="text-[10px] font-mono text-indigo-300">System Directive</span>
                  </div>
                  <div className="p-2.5 bg-slate-950 rounded-lg text-emerald-400 font-mono text-xs leading-relaxed">
                    <code>
                      "Role: Quantum Physics Assistant. Explain wave-particle duality to a 10th grader. Output 3 practice questions. Verify logic before replying."
                    </code>
                  </div>
                </div>

                {/* Workflow Flowchart */}
                <div className={`p-3.5 rounded-xl border transition-all ${
                  tourStep === 3 
                    ? 'bg-indigo-950/80 border-indigo-400 ring-2 ring-indigo-500/40' 
                    : 'bg-slate-800/60 border-slate-700/60'
                }`}>
                  <div className="flex items-center justify-between text-xs font-bold text-slate-200 mb-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-indigo-500 text-white text-[10px] flex items-center justify-center">3</span>
                      Agent Workflow Flowchart
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Step 3 Focus</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-indigo-500/40 text-xs">
                      <div className="font-bold text-indigo-300 text-[11px]">Node A: Parse User Question</div>
                      <div className="text-[10px] text-slate-400">Extract age group & core physics principle</div>
                    </div>

                    <div className="flex justify-center text-slate-500">
                      ↓
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900 border border-violet-500/40 text-xs">
                      <div className="font-bold text-violet-300 text-[11px]">Node B: Tool Invocation (Web Knowledge)</div>
                      <div className="text-[10px] text-slate-400">Retrieve pedagogical analogies</div>
                    </div>

                    <div className="flex justify-center text-slate-500">
                      ↓
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-900 border border-emerald-500/40 text-xs">
                      <div className="font-bold text-emerald-300 text-[11px]">Node C: Synthesis & Quiz Generator</div>
                      <div className="text-[10px] text-slate-400">Format 3 questions with answers masked</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Run / Test & Real-Time Logs */}
              <div className="md:col-span-3 space-y-3">
                <div className={`p-3 rounded-xl border transition-all h-full flex flex-col justify-between ${
                  tourStep === 5 
                    ? 'bg-indigo-950/80 border-indigo-400 ring-2 ring-indigo-500/40' 
                    : 'bg-slate-800/60 border-slate-700/60'
                }`}>
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-200 mb-2">
                      <span className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-indigo-500 text-white text-[10px] flex items-center justify-center">5</span>
                        Run / Test
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">Real-Time</span>
                    </div>

                    <button
                      onClick={runSimulatorTest}
                      disabled={simTestRunning}
                      className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold mb-3 flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>{simTestRunning ? 'Executing Pipeline...' : 'Test Agent Run'}</span>
                    </button>

                    <div className="p-2.5 bg-slate-950 rounded-lg font-mono text-[10px] text-slate-400 space-y-1 max-h-48 overflow-y-auto">
                      <div className="text-slate-500">// Antigravity Test Console</div>
                      {simTestLogs.map((log, i) => (
                        <div key={i} className={log.includes('Passed') ? 'text-emerald-400 font-bold' : ''}>
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-700/60 flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Test Passed without hallucination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 COMMON BEGINNER MISTAKES */}
        <section className="space-y-6 pt-4">
          <div className="border-b border-slate-200 pb-3">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
              Troubleshooting Guide
            </div>
            <h2 className="text-2xl font-bold text-slate-900">4 Common Beginner Mistakes</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Avoid these four easy pitfalls when architecting your first autonomous AI agents inside Antigravity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Mistake 1 */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center">1</span>
                <h3 className="text-sm font-bold text-slate-900">Giving Vague Instructions</h3>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-100 text-xs text-rose-900 font-mono">
                ✕ Bad Example: "Make me a food app." (The agent has no bounds, causing unpredictable loops)
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900 font-mono">
                ✓ The Fix: "Build a recipe finder that suggests 3 meals under 30 minutes based on 5 fridge ingredients."
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Agents crave narrow scope and explicit guardrails. Specify exact inputs and output boundaries.
              </p>
            </div>

            {/* Mistake 2 */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center">2</span>
                <h3 className="text-sm font-bold text-slate-900">Trying to Build Everything at Once</h3>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-100 text-xs text-rose-900 font-mono">
                ✕ Bad Example: Connecting 12 agent steps, 4 APIs, and an email sender on day 1.
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900 font-mono">
                ✓ The Fix: Start with 1 core agent action. Verify it works end-to-end, then add the second branch.
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Modular agents are easy to debug. Monolithic multi-step agents fail without clear error points.
              </p>
            </div>

            {/* Mistake 3 */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center">3</span>
                <h3 className="text-sm font-bold text-slate-900">Adding Unnecessary Tools</h3>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-100 text-xs text-rose-900 font-mono">
                ✕ Bad Example: Enabling Python compiler, PDF parser, and Web Search when only rewriting text.
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900 font-mono">
                ✓ The Fix: Only equip tools directly required for the specific task at hand.
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every extra tool introduces hesitation and potential tool-calling mistakes for the agent reasoning model.
              </p>
            </div>

            {/* Mistake 4 */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center">4</span>
                <h3 className="text-sm font-bold text-slate-900">Not Testing Intermediate Steps</h3>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-50/60 border border-rose-100 text-xs text-rose-900 font-mono">
                ✕ Bad Example: Running the full pipeline without checking what the scraper actually extracted.
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900 font-mono">
                ✓ The Fix: Use Antigravity's step-by-step inspector to inspect outputs between each node.
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Catch data schema mismatches early by validating each milestone individually in the console.
              </p>
            </div>
          </div>
        </section>
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
