import React, { useState, useEffect } from 'react';
import { TabType, Lesson } from '../types';
import { COURSE_LESSONS } from '../data/curriculumData';
import { Sidebar } from '../components/Sidebar';
import { 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  Clock, 
  Brain, 
  Search, 
  HelpCircle, 
  Terminal, 
  Zap, 
  Compass, 
  ChevronDown, 
  ChevronUp, 
  SlidersHorizontal,
  Bot,
  Info
} from 'lucide-react';

interface AntigravityCanvasViewProps {
  onNavigate: (tab: TabType, id?: string) => void;
  beginnerMode: boolean;
  onOpenCoach: () => void;
}

export const AntigravityCanvasView: React.FC<AntigravityCanvasViewProps> = ({
  onNavigate,
  beginnerMode,
  onOpenCoach
}) => {
  // Syllabus filters
  const [syllabusFilter, setSyllabusFilter] = useState<'all' | 'antigravity' | 'completed' | 'locked'>('all');
  const [openPhases, setOpenPhases] = useState<{ [key: number]: boolean }>({ 1: true, 2: true, 3: true });

  // Configurator step
  const [activeConfigStep, setActiveConfigStep] = useState(1);
  const [copiedConfig, setCopiedConfig] = useState(false);

  // Simulation flow state
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeSimIndex, setActiveSimIndex] = useState(-1);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [runtimeLogs, setRuntimeLogs] = useState<string[]>([
    '> Antigravity Engine initialized. Canvas linked to Study Assistant Agent recipe.'
  ]);

  const togglePhase = (phaseNum: number) => {
    setOpenPhases(prev => ({ ...prev, [phaseNum]: !prev[phaseNum] }));
  };

  const filteredLessons = COURSE_LESSONS.filter(l => {
    if (syllabusFilter === 'antigravity') return l.isAntigravityOnly;
    if (syllabusFilter === 'completed') return l.status === 'completed';
    if (syllabusFilter === 'locked') return l.status === 'locked';
    return true;
  });

  const nodes = [
    {
      id: 1,
      tag: 'NODE 01',
      title: 'Input Topic',
      subtitle: '"Quantum Computing"',
      type: 'input',
      desc: 'Injects learner topic & difficulty level (3/5) into runtime execution variables.',
      statusText: activeSimIndex === 0 ? 'Transmitting' : 'Ready',
      statusColor: 'emerald'
    },
    {
      id: 2,
      tag: 'NODE 02',
      title: 'Brain (ReAct LLM)',
      subtitle: 'Prompt & Decompose',
      type: 'llm',
      desc: 'ReAct reasoning loop decomposes the concept into 3 core analogies and decides which tools to trigger.',
      statusText: activeSimIndex === 1 ? 'Reasoning...' : activeSimIndex > 1 ? 'Completed' : 'Idle',
      statusColor: activeSimIndex === 1 ? 'indigo' : 'slate'
    },
    {
      id: 3,
      tag: 'NODE 03',
      title: 'Web Search Tool',
      subtitle: 'Fetch Qubit Basics',
      type: 'tool',
      desc: 'Invokes duckduckgo_search("qubit superposition decoherence") to fetch authoritative source facts.',
      statusText: activeSimIndex === 2 ? 'Fetching Data...' : activeSimIndex > 2 ? 'Fetched' : 'Standby',
      statusColor: activeSimIndex === 2 ? 'violet' : 'slate'
    },
    {
      id: 4,
      tag: 'NODE 04',
      title: 'Quiz Generator',
      subtitle: '5 Questions & Rubric',
      type: 'generator',
      desc: 'Generates 5 tiered questions checking both conceptual mental model and mathematical intuition.',
      statusText: activeSimIndex === 3 ? 'Synthesizing...' : activeSimIndex > 3 ? 'Ready' : 'Standby',
      statusColor: activeSimIndex === 3 ? 'amber' : 'slate'
    },
    {
      id: 5,
      tag: 'NODE 05',
      title: 'Learner Response',
      subtitle: 'UI Render Ready',
      type: 'output',
      desc: 'Renders verified markdown notes along with interactive multiple-choice quiz widgets to learner.',
      statusText: activeSimIndex === 4 ? 'Rendering UI' : activeSimIndex > 4 ? 'Success ✓' : 'Awaiting',
      statusColor: activeSimIndex >= 4 ? 'emerald' : 'slate'
    }
  ];

  const handleSimulateFlow = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveSimIndex(0);
    setRuntimeLogs(['> [0.00s] SIMULATION TRIGGERED: Ingesting topic "Quantum Computing"']);

    // Step 0 -> Node 1
    setTimeout(() => {
      setActiveSimIndex(1);
      setRuntimeLogs(prev => [
        ...prev,
        '> [0.35s] NODE 02 (Brain LLM): Formulated sub-tasks [Analogy Gen, Search Retrieval, Quiz Draft].'
      ]);
    }, 1200);

    // Step 1 -> Node 2
    setTimeout(() => {
      setActiveSimIndex(2);
      setRuntimeLogs(prev => [
        ...prev,
        '> [0.82s] NODE 03 (Web Search): Tool invoked duckduckgo_api -> Retrieved 4 facts on Superposition.'
      ]);
    }, 2400);

    // Step 2 -> Node 3
    setTimeout(() => {
      setActiveSimIndex(3);
      setRuntimeLogs(prev => [
        ...prev,
        '> [1.45s] NODE 04 (Quiz Gen): Drafted 5 MCQ questions with hidden spoiler explanations.'
      ]);
    }, 3600);

    // Step 3 -> Node 4
    setTimeout(() => {
      setActiveSimIndex(4);
      setRuntimeLogs(prev => [
        ...prev,
        '> [2.10s] NODE 05 (Learner Response): Schema contract validated. Output ready for user interaction.',
        '> [2.25s] FLOW COMPLETE: 0 errors, 420 tokens consumed, latency 1.18s.'
      ]);
      setIsSimulating(false);
    }, 4800);
  };

  const handleResetFlow = () => {
    setIsSimulating(false);
    setActiveSimIndex(-1);
    setRuntimeLogs([
      '> Antigravity Engine reset. Ready for next simulated execution.'
    ]);
  };

  const copyConfigCode = () => {
    const code = `// Antigravity Agent: Study Assistant
export default defineAgent({
  mission: "Teach me a topic and test my knowledge with 5 adaptive questions",
  inputs: {
    topic: "String",
    difficulty: "1-5"
  },
  actions: [
    "Explain simply (ELI5 mental models)",
    "Give concrete real-world analogy",
    "Ask 5 knowledge check questions"
  ],
  tools: ["search_web", "flashcard_gen"],
  outputContract: "markdown_with_quiz"
});`;
    navigator.clipboard.writeText(code);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-[#f8f9ff]">
      {/* LEFT SIDEBAR (Identical to Image 4) */}
      <div className="hidden md:block">
        <Sidebar activeTab="antigravity" setActiveTab={onNavigate} />
      </div>

      {/* MAIN WORKSPACE CONTENT */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-8 max-w-6xl">
        {/* BREADCRUMB & HEADER AREA */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="hover:text-slate-800 cursor-pointer" onClick={() => onNavigate('learn')}>Academy Home</span>
            <span>›</span>
            <span className="text-indigo-600 font-bold">Antigravity</span>
            <span>›</span>
            <span>Interactive Lessons</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-bold">
                <Sparkles className="w-3 h-3 text-indigo-500" />
                <span>Core Curriculum Track</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600">22 Lessons • 5 Mastery Levels</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Learn Antigravity
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 italic">
                “Don't just build an agent. Learn how to use Antigravity from the ground up.”
              </p>
            </div>

            {/* Circular Progress & Jump to Builder Button */}
            <div className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-3">
                {/* 18% Progress Circle */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-indigo-600"
                      strokeDasharray="18, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute font-extrabold text-xs text-slate-800">18%</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Phase 1: Foundation</div>
                  <div className="text-[11px] text-slate-500 font-medium">3 of 22 Completed</div>
                </div>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('agent-builder-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Jump to Builder</span>
                <span>↓</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2-COLUMN SECTION: SYLLABUS (LEFT) + ROADMAP & AGENT BUILDER (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: COURSE SYLLABUS */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-3.5">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-900">Course Syllabus</h2>
                <span className="text-[10px] font-mono text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded">
                  v3.2 Spec
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs">
                {(['all', 'antigravity', 'completed', 'locked'] as const).map(tabKey => (
                  <button
                    key={tabKey}
                    onClick={() => setSyllabusFilter(tabKey)}
                    className={`px-2.5 py-1 rounded-lg font-semibold text-[11px] capitalize whitespace-nowrap transition-all cursor-pointer ${
                      syllabusFilter === tabKey
                        ? 'bg-indigo-600 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {tabKey === 'all' ? 'All (22)' : tabKey === 'antigravity' ? 'Antigravity Only' : tabKey}
                  </button>
                ))}
              </div>

              {/* Phase 1: Foundation */}
              <div className="border border-slate-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => togglePhase(1)}
                  className="w-full px-3 py-2 bg-indigo-50/60 hover:bg-indigo-50 flex items-center justify-between text-xs font-bold text-indigo-900 border-b border-indigo-100 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono uppercase bg-indigo-200/70 text-indigo-800 px-1.5 py-0.5 rounded">
                      PHASE 1
                    </span>
                    <span>Foundation</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-indigo-600 font-semibold">01-08</span>
                    {openPhases[1] ? <ChevronUp className="w-3.5 h-3.5 text-indigo-600" /> : <ChevronDown className="w-3.5 h-3.5 text-indigo-600" />}
                  </div>
                </button>

                {openPhases[1] && (
                  <div className="divide-y divide-slate-100 bg-white">
                    {filteredLessons.filter(l => l.phase === 1).map(lesson => (
                      <div
                        key={lesson.id}
                        className={`p-3 text-xs flex items-center justify-between transition-colors ${
                          lesson.status === 'in-progress'
                            ? 'bg-indigo-50/40 border-l-3 border-indigo-600'
                            : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          <div className="mt-0.5">
                            {lesson.status === 'completed' && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                            {lesson.status === 'in-progress' && (
                              <Zap className="w-4 h-4 text-indigo-600 fill-indigo-600 shrink-0 animate-pulse" />
                            )}
                            {lesson.status === 'locked' && (
                              <Lock className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-slate-800 flex items-center gap-1.5">
                              <span>{lesson.number}</span>
                              <span>{lesson.title}</span>
                            </div>
                            <div className="text-[10px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                              <span className={lesson.status === 'completed' ? 'text-emerald-700' : lesson.status === 'in-progress' ? 'text-indigo-600' : 'text-slate-400'}>
                                {lesson.status === 'completed' ? 'Completed' : lesson.status === 'in-progress' ? 'In Progress' : 'Locked'}
                              </span>
                              <span>•</span>
                              <span>+{lesson.xp} XP</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-slate-400 font-semibold">{lesson.duration}</span>
                          {lesson.status === 'in-progress' && (
                            <button
                              onClick={() => onNavigate('practice')}
                              className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[10px] hover:bg-indigo-700 shadow-2xs"
                            >
                              Resume
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Phase 2: Antigravity Core */}
              <div className="border border-slate-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => togglePhase(2)}
                  className="w-full px-3 py-2 bg-purple-50/60 hover:bg-purple-50 flex items-center justify-between text-xs font-bold text-purple-900 border-b border-purple-100 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono uppercase bg-purple-200/70 text-purple-800 px-1.5 py-0.5 rounded">
                      PHASE 2
                    </span>
                    <span>Antigravity Core</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-purple-600 font-semibold">09-18</span>
                    {openPhases[2] ? <ChevronUp className="w-3.5 h-3.5 text-purple-600" /> : <ChevronDown className="w-3.5 h-3.5 text-purple-600" />}
                  </div>
                </button>

                {openPhases[2] && (
                  <div className="divide-y divide-slate-100 bg-white">
                    {filteredLessons.filter(l => l.phase === 2).slice(0, 6).map(lesson => (
                      <div key={lesson.id} className="p-3 text-xs flex items-center justify-between hover:bg-slate-50 opacity-80">
                        <div className="flex items-center gap-2.5">
                          <Lock className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                          <div>
                            <div className="font-bold text-slate-700 flex items-center gap-1.5">
                              <span>{lesson.number}</span>
                              <span>{lesson.title}</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 font-semibold">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Phase 3: Build & Deploy */}
              <div className="border border-slate-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => togglePhase(3)}
                  className="w-full px-3 py-2 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 border-b border-slate-200/80 transition-colors"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono uppercase bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                      PHASE 3
                    </span>
                    <span>Build & Deploy</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-slate-500 font-semibold">19-22</span>
                    {openPhases[3] ? <ChevronUp className="w-3.5 h-3.5 text-slate-500" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-500" />}
                  </div>
                </button>

                {openPhases[3] && (
                  <div className="divide-y divide-slate-100 bg-white">
                    {filteredLessons.filter(l => l.phase === 3).slice(0, 2).map(lesson => (
                      <div key={lesson.id} className="p-3 text-xs flex items-center justify-between hover:bg-slate-50 opacity-80">
                        <div className="flex items-center gap-2.5">
                          <Lock className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                          <div>
                            <div className="font-bold text-slate-700 flex items-center gap-1.5">
                              <span>{lesson.number}</span>
                              <span>{lesson.title}</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 font-semibold">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Antigravity Mentor Tip Card */}
            <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-2xl flex items-start gap-3 shadow-2xs">
              <Bot className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-xs font-bold text-indigo-950">Antigravity Mentor</div>
                <p className="text-[11px] text-indigo-900/80 leading-relaxed">
                  <strong>Beginner tip:</strong> An “Agent” is simply an LLM configured with goals, scratchpad memory, and tools to act autonomously in loops.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: 5-LEVEL MASTERY PATH & STEP-BY-STEP AGENT BUILDER */}
          <div className="lg:col-span-8 space-y-6">
            {/* CURRICULUM ROADMAP: 5-LEVEL VISUAL MASTERY PATH */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">
                    CURRICULUM ROADMAP
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">5–Level Visual Mastery Path</h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                  Progressive Skill Tree
                </span>
              </div>

              {/* 5 Mastery Steps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                {/* L1 */}
                <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-200 flex flex-col justify-between h-36">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[10px] font-mono font-bold">L1</span>
                      <Compass className="w-3.5 h-3.5 text-indigo-600" />
                    </div>
                    <div className="text-xs font-bold text-slate-900">Get Familiar</div>
                    <div className="text-[10px] text-slate-500 mt-1 line-clamp-3">
                      What is Antigravity, problems it solves, interface tour, 1st project.
                    </div>
                  </div>
                  <div className="text-[10px] font-bold text-emerald-700">✓ In Progress</div>
                </div>

                {/* L2 */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between h-36">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-mono font-bold">L2</span>
                      <Bot className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <div className="text-xs font-bold text-slate-800">Give Instructions</div>
                    <div className="text-[10px] text-slate-500 mt-1 line-clamp-3">
                      Goal clarity, context setting, few-shot examples & edits.
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                    <Lock className="w-3 h-3" /> 4 Units
                  </div>
                </div>

                {/* L3 */}
                <div className="p-3 rounded-xl bg-purple-50/70 border border-purple-200 ring-2 ring-purple-400/20 flex flex-col justify-between h-36">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="px-1.5 py-0.5 rounded bg-purple-600 text-white text-[10px] font-mono font-bold">L3</span>
                      <Layers className="w-3.5 h-3.5 text-purple-600" />
                    </div>
                    <div className="text-xs font-bold text-purple-950">Build</div>
                    <div className="text-[10px] text-slate-600 mt-1 line-clamp-3">
                      Basic workflows, Agent nodes, actions, wires & tools.
                    </div>
                  </div>
                  <div className="text-[10px] font-bold text-purple-700 flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-purple-600" /> Simulator Ready
                  </div>
                </div>

                {/* L4 */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between h-36">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-mono font-bold">L4</span>
                      <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <div className="text-xs font-bold text-slate-800">Improve</div>
                    <div className="text-[10px] text-slate-500 mt-1 line-clamp-3">
                      Debugging logic, fixing loops, output guardrails & reliability.
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                    <Lock className="w-3 h-3" /> 5 Units
                  </div>
                </div>

                {/* L5 */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between h-36">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-mono font-bold">L5</span>
                      <Brain className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <div className="text-xs font-bold text-slate-800">Real Projects</div>
                    <div className="text-[10px] text-slate-500 mt-1 line-clamp-3">
                      Research, Study, Resume, Coding & Custom Agent Capstone.
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                    <Lock className="w-3 h-3" /> 4 Blueprints
                  </div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE AGENT BUILDER: "STUDY ASSISTANT" */}
            <div id="agent-builder-section" className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      Requirement #11 Hands-On
                    </span>
                    <span className="text-slate-400 text-[11px]">Step-by-Step Configurator</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    Interactive Agent Builder: “Study Assistant”
                  </h3>
                </div>

                <button
                  onClick={copyConfigCode}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs flex items-center gap-2 cursor-pointer transition-colors"
                >
                  {copiedConfig ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedConfig ? 'Copied to Clipboard!' : 'Copy This to Antigravity'}</span>
                </button>
              </div>

              {/* Stepper pills: 1 Goal -> 2 Input -> 3 Actions -> 4 Tools -> 5 Output -> 6 Test -> 7 Deploy */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs font-semibold text-slate-600 scrollbar-none">
                {[
                  { n: 1, label: 'Goal' },
                  { n: 2, label: 'Input' },
                  { n: 3, label: 'Actions' },
                  { n: 4, label: 'Tools' },
                  { n: 5, label: 'Output' },
                  { n: 6, label: 'Test' },
                  { n: 7, label: 'Deploy' }
                ].map((s, idx) => (
                  <React.Fragment key={s.n}>
                    <button
                      onClick={() => setActiveConfigStep(s.n)}
                      className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                        activeConfigStep === s.n
                          ? 'bg-indigo-600 text-white shadow-2xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full bg-white/20 text-center text-[10px] font-bold flex items-center justify-center">
                        {s.n}
                      </span>
                      <span>{s.label}</span>
                    </button>
                    {idx < 6 && <span className="text-slate-300 text-xs">→</span>}
                  </React.Fragment>
                ))}
              </div>

              {/* 5 Configurator Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* STEP 1: GOAL OBJECTIVE */}
                <div className={`p-4 rounded-xl border transition-all ${
                  activeConfigStep === 1 
                    ? 'border-indigo-500 bg-indigo-50/20 ring-2 ring-indigo-500/20' 
                    : 'border-slate-200 bg-slate-50/40'
                }`}>
                  <div className="flex items-center justify-between text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1">
                    <span>STEP 1: GOAL OBJECTIVE</span>
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Target Mission</div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 font-mono">
                    "Teach me a topic and test my knowledge..."
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2">
                    Defines the prime directive and stopping criteria for the agent runtime.
                  </p>
                </div>

                {/* STEP 2: USER INPUTS */}
                <div className={`p-4 rounded-xl border transition-all ${
                  activeConfigStep === 2 
                    ? 'border-indigo-500 bg-indigo-50/20 ring-2 ring-indigo-500/20' 
                    : 'border-slate-200 bg-slate-50/40'
                }`}>
                  <div className="flex items-center justify-between text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1">
                    <span>STEP 2: USER INPUTS</span>
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Input Parameters Schema</div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-xs font-mono flex items-center justify-between">
                    <span className="text-indigo-600 font-bold">topic: String</span>
                    <span className="text-slate-500">difficulty: [1-5]</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2">
                    Dynamically injected into system prompt as execution variables.
                  </p>
                </div>

                {/* STEP 3: ACTION DECOMPOSITION */}
                <div className={`p-4 rounded-xl border transition-all ${
                  activeConfigStep === 3 
                    ? 'border-indigo-500 bg-indigo-50/20 ring-2 ring-indigo-500/20' 
                    : 'border-slate-200 bg-slate-50/40'
                }`}>
                  <div className="flex items-center justify-between text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1">
                    <span>STEP 3: ACTION DECOMPOSITION</span>
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-2">3 Sequential Actions</div>
                  <div className="space-y-1.5 text-xs font-medium">
                    <div className="flex items-center gap-2 p-1.5 bg-white rounded-md border border-slate-200">
                      <span className="w-4 h-4 rounded bg-purple-100 text-purple-700 font-bold text-[10px] flex items-center justify-center">A</span>
                      <span>Explain simply (ELI5 mental models)</span>
                    </div>
                    <div className="flex items-center gap-2 p-1.5 bg-white rounded-md border border-slate-200">
                      <span className="w-4 h-4 rounded bg-purple-100 text-purple-700 font-bold text-[10px] flex items-center justify-center">B</span>
                      <span>Give concrete real-world analogy</span>
                    </div>
                    <div className="flex items-center gap-2 p-1.5 bg-white rounded-md border border-slate-200">
                      <span className="w-4 h-4 rounded bg-purple-100 text-purple-700 font-bold text-[10px] flex items-center justify-center">C</span>
                      <span>Ask 5 knowledge check questions</span>
                    </div>
                  </div>
                </div>

                {/* STEP 4: ENABLED TOOLS */}
                <div className={`p-4 rounded-xl border transition-all ${
                  activeConfigStep === 4 
                    ? 'border-indigo-500 bg-indigo-50/20 ring-2 ring-indigo-500/20' 
                    : 'border-slate-200 bg-slate-50/40'
                }`}>
                  <div className="flex items-center justify-between text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1">
                    <span>STEP 4: ENABLED TOOLS</span>
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-2">Registered Tool Bindings</div>
                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="p-2 bg-white rounded-md border border-slate-200 flex items-center justify-between">
                      <span className="font-semibold text-slate-800">Search_Web (DuckDuckGo API)</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">Active</span>
                    </div>
                    <div className="p-2 bg-white rounded-md border border-slate-200 flex items-center justify-between">
                      <span className="font-semibold text-slate-800">Flashcard_Gen (JSON Schema)</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">Active</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 5: OUTPUT ARTIFACT CONTRACT */}
              <div className={`p-4 rounded-xl border transition-all ${
                activeConfigStep === 5 
                  ? 'border-indigo-500 bg-indigo-50/20 ring-2 ring-indigo-500/20' 
                  : 'border-slate-200 bg-slate-50/40'
              }`}>
                <div className="flex items-center justify-between text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1">
                  <span>STEP 5: OUTPUT ARTIFACT CONTRACT</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-500">Type: Markdown/React</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">Validated</span>
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1">
                  Structured Markdown Notes + Interactive Quiz
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-mono text-[11px]">
                  Enforces strict output schemas: '# Topic Overview', '## Analogy', followed by '### Quiz (1–5)' with hidden spoiler tags for answers.
                </p>
              </div>
            </div>

            {/* LIVE NODE GRAPH PIPELINE (ANTIGRAVITY CANVAS VISUALIZER) */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    ANTIGRAVITY CANVAS VISUALIZER
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Live Node Graph Pipeline</h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleSimulateFlow}
                    disabled={isSimulating}
                    className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-bold text-xs shadow-xs flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>{isSimulating ? 'Simulating Pipeline...' : 'Simulate Flow'}</span>
                  </button>

                  <button
                    onClick={handleResetFlow}
                    className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                    title="Reset Simulator"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Connected Visual Nodes Pipeline */}
              <div className="relative py-4 overflow-x-auto">
                <div className="flex items-center justify-between gap-3 min-w-[700px] relative z-10">
                  {nodes.map((node, index) => {
                    const isCurrent = activeSimIndex === index;
                    const isPast = activeSimIndex > index;
                    const isHovered = hoveredNode === index;

                    return (
                      <React.Fragment key={node.id}>
                        {/* Node Card */}
                        <div
                          onMouseEnter={() => setHoveredNode(index)}
                          onMouseLeave={() => setHoveredNode(null)}
                          className={`flex-1 p-3.5 rounded-2xl border transition-all cursor-pointer select-none relative ${
                            isCurrent
                              ? 'bg-indigo-50 border-indigo-600 ring-2 ring-indigo-500/40 shadow-md scale-105'
                              : isPast
                              ? 'bg-emerald-50/50 border-emerald-300 shadow-2xs'
                              : 'bg-white border-slate-200 hover:border-indigo-300 shadow-2xs'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                            <span className="font-bold text-indigo-600">{node.tag}</span>
                            <span className={`w-2 h-2 rounded-full ${
                              isCurrent 
                                ? 'bg-indigo-600 animate-ping' 
                                : isPast 
                                ? 'bg-emerald-500' 
                                : 'bg-slate-300'
                            }`} />
                          </div>

                          <div className="text-xs font-bold text-slate-900 leading-tight">
                            {node.title}
                          </div>

                          <div className="text-[10px] text-slate-500 font-mono mt-0.5 line-clamp-1">
                            {node.subtitle}
                          </div>

                          <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
                            <span className={`font-semibold ${
                              isCurrent ? 'text-indigo-700' : isPast ? 'text-emerald-700' : 'text-slate-400'
                            }`}>
                              {node.statusText}
                            </span>
                            <span className="text-slate-400">
                              {node.type === 'input' && '⇥'}
                              {node.type === 'llm' && '⚙'}
                              {node.type === 'tool' && '⚡'}
                              {node.type === 'generator' && '✦'}
                              {node.type === 'output' && '✓'}
                            </span>
                          </div>

                          {/* Hover Tooltip */}
                          {isHovered && (
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2.5 bg-slate-900 text-white rounded-xl text-[10px] leading-tight shadow-xl z-30 pointer-events-none">
                              <div className="font-bold text-indigo-300 mb-1">{node.title}</div>
                              {node.desc}
                            </div>
                          )}
                        </div>

                        {/* Connector line between nodes */}
                        {index < nodes.length - 1 && (
                          <div className="w-6 h-0.5 bg-slate-200 relative shrink-0">
                            {isPast && (
                              <div className="absolute inset-0 bg-emerald-500" />
                            )}
                            {isCurrent && (
                              <div className="absolute inset-0 bg-indigo-600 animate-pulse" />
                            )}
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Beginner Explanation Mode: ACTIVE Banner */}
              <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Info className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-emerald-900">Beginner Explanation Mode: ACTIVE</strong>
                    <div className="text-[11px] text-emerald-800">
                      Hover any node above to see what it does in plain human terms, or click "Simulate Flow" to watch data travel between components.
                    </div>
                  </div>
                </div>
                <div className="font-mono text-[11px] text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-lg font-bold shrink-0 self-start sm:self-auto">
                  Latency: ~1.2s / step
                </div>
              </div>

              {/* antigravity-runtime.log Console Terminal */}
              <div className="bg-slate-950 rounded-xl border border-slate-800 p-3 space-y-2 font-mono text-[11px] text-slate-300 shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 text-[10px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <span>antigravity-runtime.log</span>
                  </div>
                  <span>UTF-8</span>
                </div>

                <div className="space-y-1 max-h-32 overflow-y-auto pr-1">
                  {runtimeLogs.map((log, i) => (
                    <div 
                      key={i} 
                      className={
                        log.includes('COMPLETE') || log.includes('Success') 
                          ? 'text-emerald-400 font-bold' 
                          : log.includes('TRIGGERED') 
                          ? 'text-indigo-400' 
                          : log.includes('NODE') 
                          ? 'text-purple-300' 
                          : 'text-slate-400'
                      }
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
