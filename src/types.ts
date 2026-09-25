export type TabType = 
  | 'learn' 
  | 'antigravity' 
  | 'practice' 
  | 'examples' 
  | 'tasks' 
  | 'progress' 
  | 'glossary';

export interface Lesson {
  id: string;
  number: string;
  title: string;
  phase: 1 | 2 | 3;
  phaseName: string;
  duration: string;
  xp: number;
  status: 'completed' | 'in-progress' | 'locked';
  isAntigravityOnly?: boolean;
  summary?: string;
}

export interface PracticeChallenge {
  id: string;
  number: number;
  title: string;
  level: string;
  xp: number;
  status: 'completed' | 'in-progress' | 'locked';
  score?: number;
  syntacticMatch?: number;
  objective: string;
  defaultDirective: string;
  beginnerTemplate: string;
  suggestedDirective: string;
  wellDone: string[];
  improvements: string[];
  coachTip: string;
}

export interface AgentBlueprint {
  id: string;
  code: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  levelNumber: number;
  duration: string;
  tag?: string;
  category: 'All' | 'Beginner' | 'Intermediate' | 'Productivity' | 'Study' | 'Research';
  description: string;
  pipeline: string[];
  masteryItems: string[];
  inputType: string;
  tools: string[];
  loopMechanism: string;
  outputFormat: string;
  fullPrompt: string;
  sampleInput: string;
  simulatedOutput: string;
}

export interface SkillNode {
  id: string;
  title: string;
  tier: 1 | 2 | 3 | 4;
  tierName: string;
  xp: number;
  status: 'mastered' | 'active' | 'locked';
  description: string;
  prerequisites: string[];
  keyConcepts: string[];
  coachTip: string;
  proTip: string;
  lessonsLinked: string;
}

export interface SimulationNode {
  id: string;
  nodeNumber: string;
  title: string;
  subtitle: string;
  status: 'ready' | 'idle' | 'running' | 'active' | 'standby' | 'awaiting' | 'complete';
  type: 'input' | 'llm' | 'tool' | 'generator' | 'output';
  description: string;
  sampleData: string;
}

export interface RuntimeLog {
  id: string;
  timestamp: string;
  type: 'system' | 'agent' | 'tool' | 'eval';
  message: string;
}
