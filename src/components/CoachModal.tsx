import React, { useState } from 'react';
import { CoachAvatar } from './CoachAvatar';
import { X, Send, Sparkles, HelpCircle, Lightbulb, Zap } from 'lucide-react';

interface CoachModalProps {
  isOpen: boolean;
  onClose: () => void;
  beginnerMode: boolean;
}

interface Message {
  id: string;
  sender: 'coach' | 'user';
  text: string;
  timestamp: string;
}

export const CoachModal: React.FC<CoachModalProps> = ({ isOpen, onClose, beginnerMode }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-1',
      sender: 'coach',
      text: "Hi! I'm your Antigravity coach Nova. Think of me as your patient peer programmer. You're currently on Milestone 04 (AI Workflows). What concept can I make crystal clear for you right now?",
      timestamp: 'Just now'
    },
    {
      id: 'm-2',
      sender: 'user',
      text: "What is the difference between a prompt and an agent?",
      timestamp: '1m ago'
    },
    {
      id: 'm-3',
      sender: 'coach',
      text: "Great question! Here's the easiest way to think about it:\n\n💬 Prompt: Like asking a friend a single question. They give you an answer, and that's it.\n\n🤖 Agent: Like giving an assistant an objective. If they get stuck, they look up info, retry, use tools, and only stop once the goal is accomplished!",
      timestamp: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    "What should I do next?",
    "Explain this simply",
    "Help me write instructions",
    "How do tool loops work?"
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Here's a tip: in Antigravity, every agent is composed of an Input Contract, a Goal, Actions, Tools, and an Output Contract. Break your idea into those 5 pieces!";
      const lower = text.toLowerCase();
      if (lower.includes('next')) {
        reply = "You're doing awesome! Head over to Lesson 04 (What is a Prompt?) or jump into the Antigravity Canvas to test the 'Study Assistant' node pipeline.";
      } else if (lower.includes('simply') || lower.includes('simple')) {
        reply = "Think of an agent like a chef in a kitchen: the prompt is the customer's order, the tools are knives and stoves, and the scratchpad is the cutting board where ingredients wait.";
      } else if (lower.includes('instruction') || lower.includes('write')) {
        reply = "Rule #1: Clarity > Length! Specify:\n1. Who the agent is\n2. Exactly what input it receives\n3. What tools to call\n4. The exact output format.";
      } else if (lower.includes('tool') || lower.includes('loop')) {
        reply = "A tool loop works in 3 ticks: Thought -> Action (invoke tool with JSON) -> Observation (read tool output). The agent repeats this until the stopping condition is satisfied.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `c-${Date.now()}`,
          sender: 'coach',
          text: reply,
          timestamp: 'Just now'
        }
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center p-0 sm:p-4 bg-slate-900/40 backdrop-blur-xs">
      <div 
        className="w-full sm:w-[460px] h-[580px] max-h-[90vh] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="px-4 py-3 bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-700 text-white flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <CoachAvatar size={34} />
            <div>
              <div className="text-sm font-bold flex items-center gap-1.5">
                Antigravity Coach
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-[11px] text-indigo-200 font-medium">
                Patient Teacher Mode • Level 1-3
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-indigo-200 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick prompt suggestions */}
        <div className="px-3 py-2 bg-indigo-50/70 border-b border-indigo-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              onClick={() => handleSend(qp)}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white hover:bg-indigo-100 border border-indigo-200 text-indigo-800 whitespace-nowrap shadow-2xs transition-all cursor-pointer hover:border-indigo-300"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* Chat message history */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/40">
          {messages.map((m) => {
            const isCoach = m.sender === 'coach';
            return (
              <div
                key={m.id}
                className={`flex gap-2.5 ${isCoach ? 'items-start' : 'items-end justify-end'}`}
              >
                {isCoach && (
                  <div className="shrink-0 mt-0.5">
                    <CoachAvatar size={26} />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    isCoach
                      ? 'bg-white border border-slate-200/80 text-slate-800 shadow-2xs rounded-tl-xs whitespace-pre-line'
                      : 'bg-indigo-600 text-white font-medium rounded-tr-xs shadow-xs'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            );
          })}
          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-500 italic">
              <CoachAvatar size={20} />
              <span>Coach Nova is formulating a simple analogy...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything in plain English..."
              className="flex-1 text-xs px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white text-slate-900 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white shadow-xs transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="mt-2 text-[10px] text-center text-slate-400 font-medium">
            Beginner Mode: Coach answers with concrete everyday analogies.
          </div>
        </div>
      </div>
    </div>
  );
};
