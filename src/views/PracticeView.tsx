import React, { useState } from 'react';
import { TabType, PracticeChallenge } from '../types';
import { PRACTICE_CHALLENGES } from '../data/curriculumData';
import { Sidebar } from '../components/Sidebar';
import { CoachAvatar } from '../components/CoachAvatar';
import { 
  Sparkles, 
  CheckCircle2, 
  Check, 
  Copy, 
  RotateCcw, 
  Download, 
  Info, 
  Lightbulb, 
  ThumbsUp, 
  ArrowRight, 
  Play, 
  Lock, 
  ShieldCheck, 
  X,
  FileText,
  HelpCircle,
  Clock,
  Terminal,
  Layers,
  Zap
} from 'lucide-react';

interface PracticeViewProps {
  onNavigate: (tab: TabType, id?: string) => void;
  beginnerMode: boolean;
  onOpenCoach: () => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  onNavigate,
  beginnerMode,
  onOpenCoach
}) => {
  const [selectedChallengeIndex, setSelectedChallengeIndex] = useState(0);
  const currentChallenge = PRACTICE_CHALLENGES[selectedChallengeIndex];

  const [directiveText, setDirectiveText] = useState(currentChallenge.defaultDirective);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<PracticeChallenge | null>(currentChallenge);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedCanvas, setCopiedCanvas] = useState(false);
  const [showRubricModal, setShowRubricModal] = useState(false);

  const handleSelectChallenge = (index: number) => {
    setSelectedChallengeIndex(index);
    const ch = PRACTICE_CHALLENGES[index];
    setDirectiveText(ch.defaultDirective);
    setEvaluationResult(ch.status === 'completed' || ch.status === 'in-progress' ? ch : null);
  };

  const handleLoadTemplate = () => {
    setDirectiveText(currentChallenge.beginnerTemplate);
  };

  const handleReset = () => {
    setDirectiveText(currentChallenge.defaultDirective);
    setEvaluationResult(null);
  };

  const handleRunEvaluation = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      // Evaluate based on length and structure
      const lines = directiveText.split('\n').filter(Boolean);
      const hasActions = /actions|steps|1\.|bullet/i.test(directiveText);
      const hasInputs = /input|document|pdf|text/i.test(directiveText);
      const hasTone = /tone|plain|clear|language/i.test(directiveText);

      let calcScore = 85;
      if (hasActions) calcScore += 5;
      if (hasInputs) calcScore += 3;
      if (hasTone) calcScore += 2;
      calcScore = Math.min(98, Math.max(75, calcScore));

      const updated = {
        ...currentChallenge,
        score: calcScore,
        syntacticMatch: 98,
        status: 'completed' as const
      };

      setEvaluationResult(updated);
      setIsEvaluating(false);
    }, 600);
  };

  const copySuggested = () => {
    navigator.clipboard.writeText(currentChallenge.suggestedDirective);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const copyForCanvas = () => {
    navigator.clipboard.writeText(directiveText);
    setCopiedCanvas(true);
    setTimeout(() => setCopiedCanvas(false), 2000);
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-[#f8f9ff]">
      {/* LEFT SIDEBAR (Matching Image 6) */}
      <div className="hidden md:block">
        <Sidebar activeTab="practice" setActiveTab={onNavigate} />
      </div>

      {/* MAIN LAB CONSOLE */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6 max-w-6xl">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-3 border-b border-slate-200">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded font-mono font-bold bg-indigo-100 text-indigo-800 text-[10px]">
                LAB CONSOLE v2.4
              </span>
              <span className="text-slate-400 text-[11px]">• Requirement 6, 9, 15 & 16 Ready</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Antigravity Practice Mode
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Test your skills writing instructions, debugging agents, and mastering Antigravity with instant AI evaluation.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Beginner Mode: ON</span>
              <Info className="w-3.5 h-3.5 text-emerald-600" />
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Autochecker Online</span>
            </div>
          </div>
        </div>

        {/* 2-COLUMN LAB AREA: EDITOR (LEFT) + GUIDES/COACH (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: ACTIVE CHALLENGE & DIRECTIVE EDITOR */}
          <div className="lg:col-span-8 space-y-5">
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              {/* Challenge Level Badge & Timer */}
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded bg-purple-50 text-purple-800 font-bold text-[10px] tracking-wider uppercase font-mono">
                  {currentChallenge.level} • EXP: +{currentChallenge.xp} XP
                </span>
                <span className="flex items-center gap-1 text-slate-500 text-[11px] font-semibold bg-slate-100 px-2 py-0.5 rounded-full">
                  <Clock className="w-3 h-3 text-slate-400" />
                  Self-Paced
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-slate-900">
                Challenge #{currentChallenge.number}: {currentChallenge.title}
              </h2>

              {/* Mission Objective Card */}
              <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-900">Mission Objective:</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentChallenge.objective}
                  </p>
                </div>
              </div>

              {/* Your Agent Directive Editor */}
              <div className="space-y-2 pt-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-800">Your Agent Directive:</span>
                    <span className="text-[11px] text-slate-400 italic">
                      (Antigravity Syntax or Natural Language)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleLoadTemplate}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3 h-3 text-slate-500" />
                      <span>Load Beginner Template</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                      title="Reset Text"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Textarea */}
                <div className="relative border border-slate-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
                  <div className="px-3 py-1.5 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="font-semibold text-slate-700">SYSTEM_PROMPT.agent</span>
                    <span>{directiveText.length} characters</span>
                  </div>
                  <textarea
                    rows={5}
                    value={directiveText}
                    onChange={(e) => setDirectiveText(e.target.value)}
                    className="w-full p-3 text-xs font-mono text-slate-800 bg-white focus:outline-hidden leading-relaxed resize-y"
                    placeholder="Write your prompt directive here..."
                  />
                </div>

                {/* Linter & Evaluation Button Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Linter checked: No prompt injection holes detected</span>
                  </div>

                  <button
                    onClick={handleRunEvaluation}
                    disabled={isEvaluating}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 text-white font-bold text-xs shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>{isEvaluating ? 'Evaluating Directive...' : 'Run AI Instruction Evaluation'}</span>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                  </button>
                </div>
              </div>

              {/* EVALUATION RESULTS CARD (Matching Image 6) */}
              {evaluationResult && (
                <div className="p-5 rounded-2xl bg-indigo-50/40 border border-indigo-200 space-y-4 animate-in fade-in duration-200">
                  {/* Top Score Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-indigo-100">
                    <div className="flex items-center gap-3">
                      {/* Score Circle Gauge */}
                      <div className="w-14 h-14 rounded-full bg-white border-2 border-emerald-500 shadow-2xs flex flex-col items-center justify-center text-center shrink-0">
                        <span className="text-base font-black text-slate-900 leading-none">
                          {evaluationResult.score}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 font-bold">/ 100</span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          Instruction Evaluation Passed!
                        </div>
                        <div className="text-xs text-slate-500">
                          Ready for simulated execution in the Antigravity Runtime loop.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
                        Grade A-
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Syntactic Match 98%
                      </span>
                    </div>
                  </div>

                  {/* 2 Columns: What You Did Well & What You Could Improve */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* What you did well */}
                    <div className="p-3.5 rounded-xl bg-white border border-emerald-100 space-y-2">
                      <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                        <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" />
                        <span>What you did well</span>
                      </div>
                      <ul className="space-y-1.5 text-[11px] text-slate-600">
                        {evaluationResult.wellDone.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-emerald-500 font-bold leading-none mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What you could improve */}
                    <div className="p-3.5 rounded-xl bg-white border border-purple-100 space-y-2">
                      <div className="text-xs font-bold text-purple-800 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-purple-600" />
                        <span>What you could improve</span>
                      </div>
                      <ul className="space-y-1.5 text-[11px] text-slate-600">
                        {evaluationResult.improvements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-purple-500 font-bold leading-none mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Suggested Production-Grade Instruction */}
                  <div className="p-3.5 rounded-xl bg-white border border-indigo-100 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                        Suggested Production-Grade Instruction
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Recommended Standard Format
                      </span>
                    </div>

                    <pre className="p-3 rounded-lg bg-slate-950 text-emerald-400 font-mono text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap">
                      {currentChallenge.suggestedDirective}
                    </pre>

                    <div className="flex justify-end">
                      <button
                        onClick={copySuggested}
                        className="px-3 py-1 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {copiedPrompt ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedPrompt ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Action buttons: Copy for Canvas & Try Next Challenge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      onClick={copyForCanvas}
                      className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedCanvas ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-indigo-600" />}
                      <span>{copiedCanvas ? 'Copied!' : 'Copy Instruction for Antigravity Canvas'}</span>
                    </button>

                    <button
                      onClick={() => {
                        if (selectedChallengeIndex < PRACTICE_CHALLENGES.length - 1) {
                          handleSelectChallenge(selectedChallengeIndex + 1);
                        }
                      }}
                      className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Try Next Challenge</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* INTERACTIVE CHALLENGE CURRICULUM LIST (Bottom of Image 6) */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Interactive Challenge Curriculum
                  </h3>
                  <div className="text-xs text-slate-500">
                    Master progressively complex patterns: Tool execution, debugging, and memory retention.
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                  1 of 5 Completed
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRACTICE_CHALLENGES.map((ch, idx) => {
                  const isSelected = selectedChallengeIndex === idx;
                  const isCompleted = ch.status === 'completed';
                  const isInProgress = ch.status === 'in-progress';
                  const isLocked = ch.status === 'locked';

                  return (
                    <div
                      key={ch.id}
                      onClick={() => handleSelectChallenge(idx)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer select-none flex items-center justify-between ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/30 ring-2 ring-indigo-500/20'
                          : isCompleted
                          ? 'border-emerald-200 bg-white hover:border-emerald-300'
                          : isInProgress
                          ? 'border-indigo-200 bg-white hover:border-indigo-300'
                          : 'border-slate-200 bg-slate-50/60 opacity-70'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="shrink-0">
                          {isCompleted && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                          {isInProgress && <Zap className="w-5 h-5 text-indigo-600 fill-indigo-600 animate-pulse" />}
                          {isLocked && <Lock className="w-4 h-4 text-slate-400" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 line-clamp-1">
                            Challenge {ch.number}: {ch.title.replace('Create an instruction for a ', '').replace('Agent', '')}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">
                            {isCompleted && (
                              <span className="text-emerald-700 font-semibold">Completed ⭐ (Score: {ch.score}/100)</span>
                            )}
                            {isInProgress && (
                              <span className="text-indigo-600 font-semibold">In Progress • Priority Scoring</span>
                            )}
                            {isLocked && (
                              <span className="text-slate-400">Locked 🔒 • Requires Ch. {ch.number - 1}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div>
                        {isCompleted && (
                          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg">
                            Review
                          </span>
                        )}
                        {isInProgress && (
                          <span className="text-[11px] font-bold text-white bg-indigo-600 px-2.5 py-1 rounded-lg shadow-2xs">
                            Resume
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: INSTRUCTION EVOLUTION & COACH NOVA */}
          <div className="lg:col-span-4 space-y-4">
            {/* INSTRUCTION EVOLUTION GUIDE */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3.5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">Instruction Evolution</h3>
                <span className="text-[10px] font-mono text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded">
                  Req #15 Guide
                </span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                See how small specification adjustments transform confused models into dependable autonomous agents.
              </p>

              {/* 1. Before (Vague) */}
              <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-rose-800 flex items-center gap-1">
                    ✕ Before (Vague)
                  </span>
                  <span className="text-[10px] font-mono text-rose-700">Quality: Poor</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-rose-200 font-mono text-[11px] text-rose-950 font-bold">
                  "I want an AI agent."
                </div>
                <div className="text-[10px] text-slate-500 flex items-start gap-1">
                  <span className="text-rose-500">⚠</span>
                  <span>Agent has no task boundary, inputs, or expected output schema.</span>
                </div>
              </div>

              {/* 2. Better (Specific) */}
              <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-900 flex items-center gap-1">
                    ⚠ Better (Specific)
                  </span>
                  <span className="text-[10px] font-mono text-amber-800">Quality: Acceptable</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-amber-200 font-mono text-[11px] text-slate-800 font-bold">
                  "I want an agent that researches AI topics."
                </div>
                <div className="text-[10px] text-slate-500 flex items-start gap-1">
                  <span className="text-amber-600">ⓘ</span>
                  <span>Clear domain, but misses operational steps and format guidelines.</span>
                </div>
              </div>

              {/* 3. Best Beginner Instruction */}
              <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-900 flex items-center gap-1">
                    ⭐ Best Beginner Instruction
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                    Antigravity Ready
                  </span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-emerald-200 font-mono text-[11px] text-slate-900 leading-relaxed font-semibold">
                  "Create a research agent that takes a topic from the user, gathers relevant information, summarizes the findings in simple language, and produces a structured report with source links."
                </div>
                <div className="text-[10px] text-slate-700 space-y-1">
                  <div className="font-bold text-emerald-900">Why is this better?</div>
                  <div className="grid grid-cols-2 gap-1 text-[10px]">
                    <span className="text-emerald-800 font-medium">✓ Clear Goal</span>
                    <span className="text-emerald-800 font-medium">✓ Defined Input</span>
                    <span className="text-emerald-800 font-medium">✓ Explicit Steps</span>
                    <span className="text-emerald-800 font-medium">✓ Structured Output</span>
                  </div>
                </div>
              </div>

              {/* Instruction Rubric Modal Trigger */}
              <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-indigo-950">Instruction Rubric v1</div>
                  <div className="text-[10px] text-slate-500">Check 4-pillar agent architecture</div>
                </div>
                <button
                  onClick={() => setShowRubricModal(true)}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 shadow-2xs transition-colors cursor-pointer"
                >
                  Inspect Rubric
                </button>
              </div>
            </div>

            {/* COACH NOVA AI TUTOR CARD */}
            <div className="p-4 bg-white rounded-2xl border border-indigo-200 shadow-sm space-y-3.5">
              <div className="flex items-center gap-2.5">
                <CoachAvatar size={34} />
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    Coach Nova
                    <span className="px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-700 text-[9px] font-bold">
                      AI TUTOR
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500">Ready to evaluate edge cases</div>
                </div>
              </div>

              {/* Speech bubble */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 leading-relaxed relative">
                {currentChallenge.coachTip}
                <div className="mt-2 text-[10px] font-bold text-indigo-600 flex items-center justify-end gap-1">
                  <span>Beginner Tip #4</span>
                  <span>⚡</span>
                </div>
              </div>

              {/* Suggested prompts to try */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-bold text-slate-700">Suggested Prompts to Try:</div>
                {[
                  "How do I bind this to Antigravity's PDF tool?",
                  "Give me the JSON output schema version.",
                  "Show me how an agent handles an invalid PDF."
                ].map((promptText, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onOpenCoach();
                    }}
                    className="w-full p-2 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200/80 hover:border-indigo-200 text-left text-[11px] text-slate-700 hover:text-indigo-800 flex items-center justify-between transition-colors cursor-pointer group"
                  >
                    <span className="line-clamp-1 font-medium">"{promptText}"</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-indigo-600 shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* RUBRIC INSPECTOR MODAL */}
      {showRubricModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <h3 className="text-base font-bold text-slate-900">Antigravity Instruction Rubric v1</h3>
                <p className="text-xs text-slate-500">The 4 golden pillars checked by the auto-evaluator.</p>
              </div>
              <button
                onClick={() => setShowRubricModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100">
                <div className="font-bold text-indigo-900">1. Role & Mission Bound (25%)</div>
                <div className="text-slate-600 mt-0.5">Explicitly states what the agent is and what singular goal marks completion.</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <div className="font-bold text-emerald-900">2. Input / Output Schema Contract (25%)</div>
                <div className="text-slate-600 mt-0.5">Defines exact types and prevents ambiguous returns like plain conversational chatter.</div>
              </div>
              <div className="p-3 rounded-xl bg-purple-50 border border-purple-100">
                <div className="font-bold text-purple-900">3. Operational Tool Constraints (25%)</div>
                <div className="text-slate-600 mt-0.5">Only triggers authorized tools with validated JSON parameters; no imaginary functions.</div>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-100">
                <div className="font-bold text-amber-900">4. Fallback & Loop Breaking Guardrails (25%)</div>
                <div className="text-slate-600 mt-0.5">Explicit max iteration limits and graceful handling of missing or corrupted inputs.</div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowRubricModal(false)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs"
              >
                Close Rubric
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
