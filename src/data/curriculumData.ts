import { Lesson, PracticeChallenge, AgentBlueprint, SkillNode, SimulationNode } from '../types';

export const COURSE_LESSONS: Lesson[] = [
  // Phase 1: Foundation
  { id: 'l-01', number: '01', title: 'What is AI?', phase: 1, phaseName: 'Foundation', duration: '4m', xp: 100, status: 'completed', summary: 'Core intuition of neural models, tokens, and probability predictions.' },
  { id: 'l-02', number: '02', title: 'What is Generative AI?', phase: 1, phaseName: 'Foundation', duration: '6m', xp: 100, status: 'completed', summary: 'Tokens, temperature, sampling, and generative synthesis.' },
  { id: 'l-03', number: '03', title: 'What is an LLM?', phase: 1, phaseName: 'Foundation', duration: '8m', xp: 120, status: 'completed', summary: 'Transformer architectures, weights, context windows, and attention.' },
  { id: 'l-04', number: '04', title: 'What is a Prompt?', phase: 1, phaseName: 'Foundation', duration: '12m', xp: 150, status: 'in-progress', summary: 'Context setting, roleplay, operational constraints, and steering.' },
  { id: 'l-05', number: '05', title: 'Prompt Engineering Essentials', phase: 1, phaseName: 'Foundation', duration: '14m', xp: 150, status: 'locked', summary: 'Few-shot examples, chain-of-thought, and output structuring.' },
  { id: 'l-06', number: '06', title: 'AI Workflows vs Agents', phase: 1, phaseName: 'Foundation', duration: '15m', xp: 180, status: 'locked', summary: 'Deterministic chains vs autonomous non-linear loops.' },
  { id: 'l-07', number: '07', title: 'Loops, Memory & State', phase: 1, phaseName: 'Foundation', duration: '16m', xp: 200, status: 'locked', summary: 'Persistent scratchpads, conversation buffers, and state graphs.' },
  { id: 'l-08', number: '08', title: 'Tool Calling Fundamentals', phase: 1, phaseName: 'Foundation', duration: '18m', xp: 220, status: 'locked', summary: 'Function schemas, JSON arguments, and execution callbacks.' },

  // Phase 2: Antigravity Core
  { id: 'l-09', number: '09', title: 'What is Antigravity?', phase: 2, phaseName: 'Antigravity Core', duration: '7m', xp: 200, status: 'locked', isAntigravityOnly: true, summary: 'The modern visual agent runtime and visual orchestration canvas.' },
  { id: 'l-10', number: '10', title: 'Why Use Antigravity?', phase: 2, phaseName: 'Antigravity Core', duration: '9m', xp: 220, status: 'locked', isAntigravityOnly: true, summary: 'Zero-boilerplate wiring, automated loop safety, and visual telemetry.' },
  { id: 'l-11', number: '11', title: 'Antigravity Interface Tour', phase: 2, phaseName: 'Antigravity Core', duration: '11m', xp: 240, status: 'locked', isAntigravityOnly: true, summary: 'Mastering the node palette, canvas, runtime logs, and test harness.' },
  { id: 'l-12', number: '12', title: 'Your First Project', phase: 2, phaseName: 'Antigravity Core', duration: '14m', xp: 250, status: 'locked', isAntigravityOnly: true, summary: 'Spinning up Quantum-Tutor-v1 from an empty canvas.' },
  { id: 'l-13', number: '13', title: 'Giving Instructions to Antigravity', phase: 2, phaseName: 'Antigravity Core', duration: '10m', xp: 250, status: 'locked', isAntigravityOnly: true, summary: 'Drafting strict agent directives that models parse without hallucination.' },
  { id: 'l-14', number: '14', title: 'Working with AI Reasoning Nodes', phase: 2, phaseName: 'Antigravity Core', duration: '13m', xp: 280, status: 'locked', isAntigravityOnly: true, summary: 'ReAct loops, thinking budgets, and temperature tuning.' },
  { id: 'l-15', number: '15', title: 'Binding Tools & Web Search', phase: 2, phaseName: 'Antigravity Core', duration: '16m', xp: 300, status: 'locked', isAntigravityOnly: true, summary: 'Plugging in DuckDuckGo, Wikipedia, and REST API connectors.' },
  { id: 'l-16', number: '16', title: 'Handling Edge Cases & Fallbacks', phase: 2, phaseName: 'Antigravity Core', duration: '15m', xp: 320, status: 'locked', isAntigravityOnly: true, summary: 'Guardrails for tool failures, empty inputs, and infinite loops.' },
  { id: 'l-17', number: '17', title: 'Artifacts & Schema Validation', phase: 2, phaseName: 'Antigravity Core', duration: '18m', xp: 350, status: 'locked', isAntigravityOnly: true, summary: 'Enforcing JSON Schema, Zod models, and markdown contracts.' },
  { id: 'l-18', number: '18', title: 'Agent Self-Reflection & Scoring', phase: 2, phaseName: 'Antigravity Core', duration: '20m', xp: 380, status: 'locked', isAntigravityOnly: true, summary: 'Critique loops and iterative revision before yielding answers.' },

  // Phase 3: Build & Deploy
  { id: 'l-19', number: '19', title: 'Build a Research Agent', phase: 3, phaseName: 'Build & Deploy', duration: '20m', xp: 400, status: 'locked', summary: 'Autonomous web search, link scraping, and report synthesis.' },
  { id: 'l-20', number: '20', title: 'Build a Study Agent', phase: 3, phaseName: 'Build & Deploy', duration: '25m', xp: 450, status: 'locked', summary: 'Adaptive questions, knowledge graph checks, and interactive grading.' },
  { id: 'l-21', number: '21', title: 'Multi-Agent Collaboration', phase: 3, phaseName: 'Build & Deploy', duration: '30m', xp: 500, status: 'locked', summary: 'Supervisor agents routing tasks to specialized worker nodes.' },
  { id: 'l-22', number: '22', title: 'Final Production Deployment', phase: 3, phaseName: 'Build & Deploy', duration: '35m', xp: 600, status: 'locked', isAntigravityOnly: true, summary: 'Deploying agents as scalable web services and webhooks.' }
];

export const ROADMAP_MILESTONES = [
  { id: 'm-01', step: '01 / 10', title: 'AI Basics', subtitle: 'Core intuition of neural models and intelligence.', status: 'completed' },
  { id: 'm-02', step: '02 / 10', title: 'Generative AI', subtitle: 'Tokens, temperature, and generative synthesis.', status: 'completed' },
  { id: 'm-03', step: '03 / 10', title: 'Prompting', subtitle: 'Context setting, roleplay, and constraints.', status: 'completed' },
  { id: 'm-04', step: '04 / 10', title: 'AI Workflows', subtitle: 'Chaining steps: input to transformation to output.', status: 'current' },
  { id: 'm-05', step: '05 / 10', title: 'AI Agents', subtitle: 'Autonomous decisions and persistent goals.', status: 'next' },
  { id: 'm-06', step: '06 / 10', title: 'Agentic AI', subtitle: 'Loops, reflection, and self-correction cycles.', status: 'locked' },
  { id: 'm-07', step: '07 / 10', title: 'Antigravity?', subtitle: 'Platform architecture and visual workspace.', status: 'locked' },
  { id: 'm-08', step: '08 / 10', title: 'AG Basics', subtitle: 'Palettes, state binders, and test harnesses.', status: 'locked' },
  { id: 'm-09', step: '09 / 10', title: 'First Agent', subtitle: 'Single-tool assistant running live tasks.', status: 'locked' },
  { id: 'm-10', step: '10 / 10', title: 'Real Agent', subtitle: 'Multi-tool, real-world automated researcher.', status: 'capstone' }
];

export const AGENT_BLUEPRINTS: AgentBlueprint[] = [
  {
    id: 'agent-01',
    code: '#AGENT-01',
    title: 'Research Agent',
    level: 'Beginner',
    levelNumber: 1,
    duration: '10 mins',
    category: 'Research',
    description: '“Research a topic and create a structured summary with verifiable facts.”',
    pipeline: ['Query Intake', 'Web Scraping Loop', 'Markdown Synthesis'],
    masteryItems: [
      'Defining explicit research goals',
      'Breaking down multi-query subtasks',
      'Equipping web search tools',
      'Formatting factual reports'
    ],
    inputType: 'Topic String',
    tools: ['Search', 'Scraper'],
    loopMechanism: 'Goal-Verification Loop',
    outputFormat: 'Structured Markdown',
    fullPrompt: `ROLE: Autonomous Fact-Checking Research Agent
GOAL: Conduct exhaustive research on the user-provided topic, cross-examine multiple credible sources, and compile an executive summary.

INPUT CONTRACT:
- topic (string): Subject matter or research inquiry
- depth (integer, 1-3): Level of technical depth

OPERATIONAL STEPS:
1. Deconstruct the topic into 3 specific search queries.
2. Call tool \`web_search\` for each query.
3. Filter out promotional blogs; prefer documentation and academic sources.
4. Synthesize findings into sections: Overview, Key Principles, Confirmed Data, Open Controversies.
5. Provide markdown with direct citations.`,
    sampleInput: 'Quantum Supremacy milestones in semiconductor qubits',
    simulatedOutput: `# Executive Briefing: Quantum Supremacy
### Overview
Quantum computational supremacy marks the experimental threshold where a programmable quantum device solves a well-defined mathematical problem in minutes that would require classical supercomputers thousands of years.

### Key Milestones
- **2019 (Google Sycamore):** Cross-entropy benchmarking in 200 seconds.
- **2021 (USTC Jiuzhang):** Gaussian boson sampling using photonic qubits.
- **2024-2026 (Neutral Atoms & Logical Qubits):** Shift toward fault-tolerant syndrome extraction.

### Verification Status
- Verified via arXiv preprint references & IEEE Quantum reports.`
  },
  {
    id: 'agent-02',
    code: '#AGENT-02',
    title: 'Study Assistant Agent',
    level: 'Beginner',
    levelNumber: 1,
    duration: '15 mins',
    tag: 'Most Popular',
    category: 'Study',
    description: '“Teach me any topic from scratch, give real-world analogies, and test my knowledge with 5 adaptive questions.”',
    pipeline: ['Parse Topic', 'Analogous Explainer', 'Adaptive Quiz Engine'],
    masteryItems: [
      'Interactive multi-turn dialogues',
      'Context framing & real-world analogies',
      'Dynamic 5-question test logic',
      'Iterative answer grading & feedback'
    ],
    inputType: 'Subject / Level',
    tools: ['None (Zero-shot Context)'],
    loopMechanism: 'Interactive Turn-based Eval',
    outputFormat: '5-Q Diagnostic + Explanations',
    fullPrompt: `ROLE: Empathetic & Socratic STEM Study Assistant
MISSION: Teach any topic from scratch using intuitive physical metaphors, followed by 5 tiered diagnostic questions.

INPUT SCHEMA:
- topic (String): Concept to master
- learner_level (String): 'beginner' | 'intermediate' | 'advanced'

STEP-BY-STEP INSTRUCTIONS:
1. Provide an ELI5 overview: Explain the core mechanics using everyday physics (e.g., water pipes for electricity, postal mail for TCP/IP).
2. Generate 3 key takeaways.
3. Formulate 5 adaptive multiple-choice questions ranging from conceptual to scenario-based.
4. Pause and await student responses before revealing answers.
5. Grade each answer with gentle constructive rationale.`,
    sampleInput: 'How does Backpropagation work in Neural Networks?',
    simulatedOutput: `# Study Guide: Backpropagation
### The Metaphor: The Mountain Archery Squad
Imagine a team of archers standing in line down a mountain. The first archer shoots blindfolded based on a whisper from behind. When the arrow misses the target, the spotter shouts how far left the arrow landed. The shout travels backward up the mountain: each archer adjusts their aim slightly so the next round hits closer to the bullseye.

### 5-Question Knowledge Check
1. In our metaphor, what does the "distance from the bullseye" represent?
   - [A] The learning rate
   - [B] The loss (error)
   - [C] The activation function
2. Which mathematical principle calculates how much each weight contributed to the total error?
   - [A] Fourier Transform
   - [B] The Chain Rule of Calculus
   - [C] Pythagorean Theorem`
  },
  {
    id: 'agent-03',
    code: '#AGENT-03',
    title: 'Resume Review & Optimizer',
    level: 'Intermediate',
    levelNumber: 2,
    duration: '20 mins',
    category: 'Productivity',
    description: '“Compare my resume with a job description and suggest missing skills and bullet point improvements.”',
    pipeline: ['Dual-Input Ingestion', 'Semantic Match Matrix', 'Action Bullet Rewriter'],
    masteryItems: [
      'Dual-Input Architecture: Resume + Target Job Spec',
      'Semantic gap analysis & keyword matching metrics',
      'Action-oriented bullet rewriting rules',
      'ATS compatibility scoring'
    ],
    inputType: 'Resume + JD',
    tools: ['Diff Engine'],
    loopMechanism: 'Comparative Rubric',
    outputFormat: 'Gap Score + Bullet Revisions',
    fullPrompt: `ROLE: Senior Technical Recruiter & ATS Optimization Agent
TASK: Analyze resume against target job description, score semantic relevance, and rewrite passive experience bullets using Google X-Y-Z formula.

INPUT CONTRACT:
- resume_text: String
- job_description: String

EVALUATION CRITERIA:
1. Missing hard technical skills and methodologies.
2. Weak passive verbs (e.g., "Responsible for", "Helped with").
3. Quantifiable impact deficiency.`,
    sampleInput: 'Software Engineer Resume applied to Senior Autonomous Agent Engineer',
    simulatedOutput: `### ATS Gap Analysis: Match Score 84%
**Identified Gaps:**
- Missing explicit mentions of: LangGraph, ReAct loop error handling, Vector embedding retrieval.

**Bullet Revisions (Google X-Y-Z Format):**
- *Before:* "Built AI pipelines for customer support."
- *After:* "Architected autonomous customer triage agent reducing human escalations by 42% across 120,000 monthly inquiries using ReAct loops and Postgres pgvector."`
  },
  {
    id: 'agent-04',
    code: '#AGENT-04',
    title: 'Coding Assistant & Debugger',
    level: 'Intermediate',
    levelNumber: 2,
    duration: '25 mins',
    category: 'Productivity',
    description: '“Help beginners understand error messages, explain code line-by-line, and suggest tested fixes.”',
    pipeline: ['Traceback Ingestion', 'REPL Execution Sandbox', 'Differential Fix Proposal'],
    masteryItems: [
      'REPL Environment: Safe sandbox execution & linting',
      'Demystifying cryptic traceback stacks for novices',
      'Automated test assertion generation',
      'Syntax guardrails & runtime patch validation'
    ],
    inputType: 'Snippet + Traceback',
    tools: ['Python REPL'],
    loopMechanism: 'Self-Correction Test Loop',
    outputFormat: 'Line-by-Line Fix + Proof',
    fullPrompt: `ROLE: Patient Junior Engineer Pair-Programmer
GOAL: Diagnose runtime exceptions, explain root cause in plain English, and provide a verified patch with unit tests.

PROTOCOL:
1. Inspect code syntax and traceback origin.
2. Execute code in sandbox REPL to reproduce the bug.
3. Formulate fix.
4. Re-run tests to confirm 0 regressions.`,
    sampleInput: 'IndexError: list index out of range in quicksort recursive partition',
    simulatedOutput: `### Bug Breakdown: Why did this happen?
You ran into an **IndexError: list index out of range**.
In line 14, the loop condition checks \`i <= len(items)\`. In Python, arrays are 0-indexed, meaning the highest valid index for a list of 5 elements is \`4\`, but \`len(items)\` evaluates to \`5\`.

### The Clean Fix:
\`\`\`python
# Change line 14 from:
while i <= len(items):
# To:
while i < len(items):
\`\`\``
  },
  {
    id: 'agent-05',
    code: '#AGENT-05',
    title: 'Goal to Task Productivity Agent',
    level: 'Beginner',
    levelNumber: 1,
    duration: '12 mins',
    tag: 'Top Rated Workflow',
    category: 'Productivity',
    description: '“Turn broad ideas (e.g. \'Launch a podcast\') into prioritized daily actionable checklist tasks.”',
    pipeline: ['Macro-Goal Parser', 'Topological Dependency Sorter', 'Kanban Export Engine'],
    masteryItems: [
      'Decomposition: Splits macro targets into atomic 25-minute tasks',
      'Dependency Order: Auto-detects blockers and sequences execution',
      'Action Items: Exports directly to Markdown or task manager schema',
      'Milestone pacing calculations'
    ],
    inputType: 'Objective String',
    tools: ['Calendar / Todoist'],
    loopMechanism: 'Dependency Graph Traversal',
    outputFormat: 'Prioritized Task Checklist',
    fullPrompt: `ROLE: Executive Operations Project Manager
OBJECTIVE: Decompose broad open-ended ambitions into chronological, 25-minute atomic action items with zero ambiguity.

RULES:
- Never provide abstract advice (e.g., "Think about your audience").
- Every single item must start with an imperative action verb.
- Group by: Day 1 (Validation), Days 2-4 (Foundation), Days 5-7 (Launch).`,
    sampleInput: 'Launch a technical newsletter on Autonomous AI Agents',
    simulatedOutput: `### Execution Plan: Launch Agentic AI Newsletter in 7 Days
**Day 1: Setup & Niche**
- [ ] 01. Register publication on Substack / Beehiiv with tag "Autonomous AI Agents" (15m)
- [ ] 02. Write a 2-sentence value proposition for engineers (10m)

**Day 2: First Issue Draft**
- [ ] 03. Curate top 3 agent architecture research papers from arXiv (25m)
- [ ] 04. Write a 400-word breakdown of tool calling loops (25m)`
  }
];

export const PRACTICE_CHALLENGES: PracticeChallenge[] = [
  {
    id: 'ch-01',
    number: 1,
    title: 'Create an instruction for a Document Summarizer Agent',
    level: 'LEVEL 1 • CORE PROMPTING',
    xp: 150,
    status: 'completed',
    score: 92,
    syntacticMatch: 98,
    objective: 'You want an agent that takes a 10-page PDF report and provides a 3-bullet summary with action items. Build a prompt that clearly binds input, transform steps, and clean output formatting.',
    defaultDirective: `Summarize this document and give me 3 bullet points plus top 3 action items in plain English.`,
    beginnerTemplate: `Create a document summarizer agent.
Input: Document text or PDF.
Actions:
1. Extract key themes.
2. Generate 3 bullet points explaining the core message.
3. List the top 3 actionable next steps.
Tone: Clear, jargon-free beginner language.`,
    suggestedDirective: `Create a document summarizer agent.
Input: Document text or PDF.
Actions:
1. Extract key themes.
2. Generate 3 bullet points explaining the core message.
3. List the top 3 actionable next steps.
Tone: Clear, jargon-free beginner language.`,
    wellDone: [
      'Explicit bullet count specified: Demanded exactly 3 summary bullets, avoiding agent rambling.',
      'Defined tone: "Plain English" restrains complex industry technical jargon.',
      'Action orientation: Explicitly called for the top 3 action items next steps.'
    ],
    improvements: [
      'Edge case handling: Specify what to do if the document has missing key data, blurry scans, or tabular charts.',
      'Fallback directive: Provide default fallback behavior if the text is longer than the token window.'
    ],
    coachTip: `"Great work specifying 3 bullets! In Antigravity workflows, try adding an explicit Guardrail: 'If file contains no actionable metrics, state No Actions Found.'"`
  },
  {
    id: 'ch-02',
    number: 2,
    title: 'Email Triage & Priority Scoring Agent',
    level: 'LEVEL 2 • CONDITIONAL ROUTING',
    xp: 200,
    status: 'in-progress',
    score: 86,
    syntacticMatch: 91,
    objective: 'Construct an agent prompt that scans incoming customer emails, assigns a priority rating (P1-P4), extracts user sentiment, and generates an automated draft reply without hallucinating policy.',
    defaultDirective: `Check this customer email. If it's angry or urgent mark as P1. Otherwise mark as P3. Draft a polite reply.`,
    beginnerTemplate: `Create an email triage agent.
Input: Customer email text.
Classification Rules:
- P1: System downtime or billing charge errors.
- P2: Feature blockers with pending deadlines.
- P3: General questions or feedback.
Output Format:
JSON with keys { priority, sentiment, suggested_reply }.
Guardrail: Do not promise refunds without human manager approval.`,
    suggestedDirective: `Create an email triage agent.
Input: Customer email text.
Classification Rules:
- P1: System downtime or billing errors.
- P2: Feature blockers with pending deadlines.
- P3: General questions or feedback.
Output Format:
JSON with keys { priority, sentiment, suggested_reply }.
Guardrail: Do not promise refunds without human manager approval.`,
    wellDone: [
      'Priority levels clearly categorized with distinct operational criteria.',
      'Safety guardrail included to prevent unauthorized refunds.',
      'Structured JSON output for clean downstream API consumption.'
    ],
    improvements: [
      'Sentiment boundary: Add neutral/confused edge case detection.',
      'Customer identifier handling: Ensure PII like credit card numbers are scrubbed.'
    ],
    coachTip: `"Adding structured JSON output rules ensures your Antigravity pipeline never breaks when passing data to the next node!"`
  },
  {
    id: 'ch-03',
    number: 3,
    title: 'Antigravity Tool Bindings & Scraper Validation',
    level: 'LEVEL 3 • TOOL BINDINGS',
    xp: 250,
    status: 'locked',
    objective: 'Configure tool invocation instructions for an agent equipped with Web Search and Python REPL. Prevent tool hallucinations and ensure safe schema arguments.',
    defaultDirective: `Search Google for the latest stock prices then calculate average using python.`,
    beginnerTemplate: `You are a financial research agent.
Tools Available:
- web_search(query: string)
- python_calc(expression: string)
Workflow:
1. Fetch latest verified closing price.
2. Compute percentage change using python_calc.
Never guess stock values.`,
    suggestedDirective: `You are a financial research agent with strict tool bindings.
Tools Available:
- web_search(query: string)
- python_calc(expression: string)
Guardrail: All numeric claims must originate from web_search results.`,
    wellDone: [],
    improvements: [],
    coachTip: `"Remember: Antigravity agents rely on precise JSON schema bindings to invoke external APIs safely."`
  },
  {
    id: 'ch-04',
    number: 4,
    title: 'Agent Debugging & Loop Breaker',
    level: 'LEVEL 4 • LOOP RESILIENCE',
    xp: 350,
    status: 'locked',
    objective: 'Detect an infinite reasoning loop where an agent continuously re-queries search without reaching a conclusion. Add a max-iterations and fallback guardrail.',
    defaultDirective: `Keep searching until you find the exact date the lost colony of Roanoke was founded.`,
    beginnerTemplate: `Research the disappearance of Roanoke colony.
Loop Limit: Maximum 3 search iterations.
Termination Condition: If precise date is unknown to historical consensus, report the consensus range (1585-1587) and terminate.`,
    suggestedDirective: `Research the disappearance of Roanoke colony.
Loop Limit: Maximum 3 search iterations.
Termination Condition: If precise date is unknown to historical consensus, report the consensus range (1585-1587) and terminate.`,
    wellDone: [],
    improvements: [],
    coachTip: `"Loop limits are the seatbelts of autonomous agent systems. Always establish a finite stopping condition!"`
  },
  {
    id: 'ch-05',
    number: 5,
    title: 'Multi-Step Autonomous Researcher Capstone',
    level: 'LEVEL 5 • CAPSTONE CHALLENGE',
    xp: 500,
    status: 'locked',
    objective: 'Design a full ReAct multi-step autonomous agent combining goal parsing, 2 specialized tools, memory scratchpad, and final artifact rendering.',
    defaultDirective: `Research competitive pricing for SaaS products and compile a table.`,
    beginnerTemplate: `Full ReAct Autonomous Agent Specification:
Goal: Perform competitive matrix analysis.
Scratchpad: Store competitors, pricing tiers, and API access limits.
Output: Render Markdown table with comparison rubric.`,
    suggestedDirective: `Full ReAct Autonomous Agent Specification:
Goal: Perform competitive matrix analysis.
Scratchpad: Store competitors, pricing tiers, and API access limits.
Output: Render Markdown table with comparison rubric.`,
    wellDone: [],
    improvements: [],
    coachTip: `"In this capstone, you will put together all 4 pillars of the Antigravity architecture!"`
  }
];

export const SKILL_TREE_NODES: SkillNode[] = [
  // Tier 1
  {
    id: 'st-01',
    title: 'AI Basics',
    tier: 1,
    tierName: 'Foundations of Autonomy',
    xp: 150,
    status: 'mastered',
    description: 'Level 1: Tokens, LLMs, and probabilities.',
    prerequisites: ['None (Entry Point)'],
    keyConcepts: ['Next-token prediction', 'Vector embeddings', 'Context window limits'],
    coachTip: 'You understand that an LLM does not "think" in human terms—it calculates the highest probability token sequence based on prior context.',
    proTip: 'Think of tokens as puzzle pieces, roughly 4 characters or 0.75 words each.',
    lessonsLinked: 'Lesson 01 & 02'
  },
  {
    id: 'st-02',
    title: 'Generative AI',
    tier: 1,
    tierName: 'Foundations of Autonomy',
    xp: 200,
    status: 'mastered',
    description: 'Level 1: Context Windows, Temperature & Sampling.',
    prerequisites: ['AI Basics'],
    keyConcepts: ['Temperature parameter (0.0 to 1.0)', 'Top-P sampling', 'Prompt injection risks'],
    coachTip: 'Use Temperature = 0.0 for deterministic tool-calling agents, and Temperature = 0.7 for creative brainstorming agents.',
    proTip: 'Lower temperature means more predictable and repeatable agent decisions.',
    lessonsLinked: 'Lesson 02 & 03'
  },
  {
    id: 'st-03',
    title: 'Prompting',
    tier: 1,
    tierName: 'Foundations of Autonomy',
    xp: 250,
    status: 'mastered',
    description: 'Level 2: Few-Shot Structs & Role Directives.',
    prerequisites: ['Generative AI'],
    keyConcepts: ['System prompt boundaries', 'Few-shot demonstration pairs', 'Output schema constraints'],
    coachTip: 'Always specify what the agent MUST NOT do, as well as what it should do.',
    proTip: 'Markdown headers (`### Role`, `### Guardrails`) keep complex prompts organized for the model.',
    lessonsLinked: 'Lesson 04 & 05'
  },

  // Tier 2
  {
    id: 'st-04',
    title: 'AI Workflows',
    tier: 2,
    tierName: 'Reasoning Loops & Tool Architecture',
    xp: 300,
    status: 'mastered',
    description: 'Pipelines & Sequential Routing.',
    prerequisites: ['Prompting'],
    keyConcepts: ['Chaining prompt outputs into inputs', 'Branching logic based on intent', 'State preservation'],
    coachTip: 'Workflows are predictable chains. If step A finishes, run step B. They are the building blocks of more complex agentic loops.',
    proTip: 'Always validate intermediate data schemas between pipeline nodes to prevent garbage-in garbage-out.',
    lessonsLinked: 'Lesson 06'
  },
  {
    id: 'st-05',
    title: 'AI Agents',
    tier: 2,
    tierName: 'Reasoning Loops & Tool Architecture',
    xp: 350,
    status: 'mastered',
    description: 'Perception-Action Cycle & Autonomy.',
    prerequisites: ['AI Workflows'],
    keyConcepts: ['Agent loop lifecycle', 'Observation vs Action vs Thought', 'Tool dispatching'],
    coachTip: 'An agent is an LLM with autonomy to decide WHICH tool to invoke and WHEN to terminate.',
    proTip: 'The agent needs a scratchpad memory to keep track of what it tried and what failed.',
    lessonsLinked: 'Lesson 07 & 08'
  },
  {
    id: 'st-06',
    title: 'Agentic AI',
    tier: 2,
    tierName: 'Reasoning Loops & Tool Architecture',
    xp: 400,
    status: 'active',
    description: 'State Machines, Self-Reflection & Multi-Turn Persistence.',
    prerequisites: ['AI Agents', 'AI Workflows'],
    keyConcepts: [
      'Autonomous decision branches',
      'Self-reflection loops',
      'Error correction when tool parameters fail',
      'Memory buffer persistence across turns'
    ],
    coachTip: 'Stuck on an agent loop? Check your termination condition! Agents without strict stopping criteria run until they hit token caps.',
    proTip: 'You don\'t need to write Python to master Antigravity. Visual node flow graphs handle tool wiring!',
    lessonsLinked: 'Lesson 08 & 09'
  },

  // Tier 3
  {
    id: 'st-07',
    title: 'Antigravity Basics',
    tier: 3,
    tierName: 'Antigravity Runtime Mastery',
    xp: 450,
    status: 'locked',
    description: 'Simulator IDE & Logs Visualizer.',
    prerequisites: ['Agentic AI'],
    keyConcepts: ['Node graph visualization', 'Real-time telemetry stream', 'State inspector'],
    coachTip: 'Antigravity visualizes every single token decision and tool call as an active pulse on screen.',
    proTip: 'The telemetry log provides latency, token usage, and JSON serialization traces.',
    lessonsLinked: 'Lesson 10 & 11'
  },
  {
    id: 'st-08',
    title: 'Antigravity Instructions',
    tier: 3,
    tierName: 'Antigravity Runtime Mastery',
    xp: 450,
    status: 'locked',
    description: 'Constraint Formulations & Antigravity Syntax.',
    prerequisites: ['Antigravity Basics'],
    keyConcepts: ['Agent directives', 'Input/Output contracts', 'Tool bindings'],
    coachTip: 'Write instructions that explicitly bind inputs to actions to outputs.',
    proTip: 'Use uppercase keywords like ROLE, MISSION, GUARDRAIL for clear structural parsing.',
    lessonsLinked: 'Lesson 12 & 13'
  },
  {
    id: 'st-09',
    title: 'Agent Building',
    tier: 3,
    tierName: 'Antigravity Runtime Mastery',
    xp: 500,
    status: 'locked',
    description: 'Multi-Step Execution & Custom Node Wiring.',
    prerequisites: ['Antigravity Instructions'],
    keyConcepts: ['Custom tool definition', 'Sub-graph routing', 'Dynamic retry mechanics'],
    coachTip: 'Combine small, single-purpose nodes rather than one giant monolithic prompt.',
    proTip: 'Modular agents are 10x easier to debug when a tool call misbehaves.',
    lessonsLinked: 'Lesson 14 & 15'
  },

  // Tier 4
  {
    id: 'st-10',
    title: 'Tools & Connectors',
    tier: 4,
    tierName: 'Production Readiness & Certification',
    xp: 550,
    status: 'locked',
    description: 'Search, Calculators, REST APIs & Vector DBs.',
    prerequisites: ['Agent Building'],
    keyConcepts: ['REST API authentication', 'Rate limiting', 'Vector similarity retrieval'],
    coachTip: 'Always pass sanitized inputs to external tools.',
    proTip: 'Equip tools with descriptive docstrings so the agent knows exactly when to use them.',
    lessonsLinked: 'Lesson 16 & 17'
  },
  {
    id: 'st-11',
    title: 'Testing & Quality',
    tier: 4,
    tierName: 'Production Readiness & Certification',
    xp: 600,
    status: 'locked',
    description: 'Loop Guards, Hallucination Checks & Fallbacks.',
    prerequisites: ['Tools & Connectors'],
    keyConcepts: ['Automated rubric scoring', 'Deterministic fallback paths', 'Cost optimization'],
    coachTip: 'Good agents fail gracefully. If a search tool returns 404, the agent should adapt instead of crashing.',
    proTip: 'Test with intentionally malformed inputs to verify your error guardrails.',
    lessonsLinked: 'Lesson 18'
  },
  {
    id: 'st-12',
    title: 'Real Projects (Capstone)',
    tier: 4,
    tierName: 'Production Readiness & Certification',
    xp: 1000,
    status: 'locked',
    description: 'Invent your own multi-step agent & deploy.',
    prerequisites: ['Testing & Quality'],
    keyConcepts: ['End-to-end design', 'User interaction loop', 'Credential certification'],
    coachTip: 'Your capstone project proves you can architect reliable, real-world autonomous agents.',
    proTip: 'Complete the 10-step wizard to earn your official Antigravity Agent Builder credential.',
    lessonsLinked: 'Lessons 19-22'
  }
];

export const INITIAL_SIMULATION_NODES: SimulationNode[] = [
  {
    id: 'node-01',
    nodeNumber: 'NODE 01',
    title: 'Input Topic',
    subtitle: '"Quantum Computing"',
    status: 'ready',
    type: 'input',
    description: 'User prompt or inquiry payload entering the runtime pipeline.',
    sampleData: 'Topic: Quantum Computing Basics (difficulty: 3)'
  },
  {
    id: 'node-02',
    nodeNumber: 'NODE 02',
    title: 'Brain (ReAct LLM)',
    subtitle: 'Prompt & Decompose',
    status: 'idle',
    type: 'llm',
    description: 'Decomposes user intent into actionable sub-tasks and tool invocations.',
    sampleData: 'Plan: [1] Search fundamentals, [2] Build analogies, [3] Formulate 5 questions'
  },
  {
    id: 'node-03',
    nodeNumber: 'NODE 03',
    title: 'Web Search Tool',
    subtitle: 'Fetch Qubit Basics',
    status: 'standby',
    type: 'tool',
    description: 'Executes live web search query to retrieve accurate current domain facts.',
    sampleData: 'web_search("quantum computing superposition qubits explanation")'
  },
  {
    id: 'node-04',
    nodeNumber: 'NODE 04',
    title: 'Quiz Generator',
    subtitle: '5 Questions & Rubric',
    status: 'standby',
    type: 'generator',
    description: 'Transforms gathered facts into adaptive quiz questions with rubric checks.',
    sampleData: 'Generate 5 MCQs with explanations & hints'
  },
  {
    id: 'node-05',
    nodeNumber: 'NODE 05',
    title: 'Learner Response',
    subtitle: 'UI Render Ready',
    status: 'awaiting',
    type: 'output',
    description: 'Final structured artifact rendered cleanly into user interface.',
    sampleData: 'Structured Markdown Notes + Interactive Quiz (Validated)'
  }
];

export const GLOSSARY_ITEMS = [
  {
    term: 'Agent',
    category: 'Core',
    definition: 'An autonomous software entity powered by an LLM that perceives its environment through inputs, makes reasoning decisions, and takes actions via tools to accomplish a stated goal.'
  },
  {
    term: 'Antigravity',
    category: 'Platform',
    definition: 'A visual agent orchestration platform and runtime environment designed for designing, simulating, testing, and deploying robust autonomous AI agents without boilerplate code.'
  },
  {
    term: 'ReAct (Reason + Act)',
    category: 'Architecture',
    definition: 'A prompting framework that interleaves reasoning traces (Thought) and task-specific actions (Tool Invocation), allowing the model to interact with external tools and observe results before deciding next steps.'
  },
  {
    term: 'Tool Binding',
    category: 'Engineering',
    definition: 'Registering an external function or API (such as Web Search, Python Calculator, or Database query) with an agent so the LLM can call it dynamically using structured JSON schemas.'
  },
  {
    term: 'Scratchpad Memory',
    category: 'Memory',
    definition: 'A temporary working buffer where an agent records observations, intermediate calculations, tool results, and reflections during an active multi-step reasoning loop.'
  },
  {
    term: 'Guardrail',
    category: 'Safety',
    definition: 'Deterministic boundary conditions, prompt constraints, and validation schemas that prevent agents from hallucinating, running infinite loops, or producing unauthorized actions.'
  },
  {
    term: 'Temperature',
    category: 'LLM Parameters',
    definition: 'A sampling hyperparameter between 0.0 and 1.0. Lower values (0.0 - 0.2) produce deterministic, focused tool selection; higher values (0.7 - 1.0) increase diversity and creative expression.'
  },
  {
    term: 'Context Window',
    category: 'LLM',
    definition: 'The maximum total number of tokens (words and characters) an LLM can process in a single inference call, including system prompt, chat history, tool traces, and output.'
  },
  {
    term: 'Loop Breaker',
    category: 'Runtime',
    definition: 'A safety mechanism that monitors agent execution and halts processing if repetitive tool invocations or cyclic thoughts exceed a predetermined threshold.'
  },
  {
    term: 'Artifact Contract',
    category: 'Outputs',
    definition: 'A defined schema (such as JSON Schema or structured Markdown template) that the agent must strictly satisfy before completing a task.'
  }
];
