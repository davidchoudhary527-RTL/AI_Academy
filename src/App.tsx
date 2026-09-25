import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import { Navbar } from './components/Navbar';
import { CoachModal } from './components/CoachModal';
import { SearchModal } from './components/SearchModal';
import { LearnView } from './views/LearnView';
import { AntigravityCanvasView } from './views/AntigravityCanvasView';
import { PracticeView } from './views/PracticeView';
import { ExamplesView } from './views/ExamplesView';
import { TasksView } from './views/TasksView';
import { ProgressView } from './views/ProgressView';
import { GlossaryView } from './views/GlossaryView';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('learn');
  const [beginnerMode, setBeginnerMode] = useState<boolean>(true);
  const [coachOpen, setCoachOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  // Global ⌘K keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (tab: TabType, _id?: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        beginnerMode={beginnerMode}
        setBeginnerMode={setBeginnerMode}
        onOpenCoach={() => setCoachOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Dynamic Views */}
      <div className="flex-1">
        {activeTab === 'learn' && (
          <LearnView
            onNavigate={handleNavigate}
            beginnerMode={beginnerMode}
            onOpenCoach={() => setCoachOpen(true)}
          />
        )}

        {activeTab === 'antigravity' && (
          <AntigravityCanvasView
            onNavigate={handleNavigate}
            beginnerMode={beginnerMode}
            onOpenCoach={() => setCoachOpen(true)}
          />
        )}

        {activeTab === 'practice' && (
          <PracticeView
            onNavigate={handleNavigate}
            beginnerMode={beginnerMode}
            onOpenCoach={() => setCoachOpen(true)}
          />
        )}

        {activeTab === 'examples' && (
          <ExamplesView
            onNavigate={handleNavigate}
            beginnerMode={beginnerMode}
            onOpenCoach={() => setCoachOpen(true)}
          />
        )}

        {activeTab === 'tasks' && (
          <TasksView
            onNavigate={handleNavigate}
            beginnerMode={beginnerMode}
            onOpenCoach={() => setCoachOpen(true)}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressView
            onNavigate={handleNavigate}
            beginnerMode={beginnerMode}
            onOpenCoach={() => setCoachOpen(true)}
          />
        )}

        {activeTab === 'glossary' && (
          <GlossaryView
            onNavigate={handleNavigate}
            beginnerMode={beginnerMode}
            onOpenCoach={() => setCoachOpen(true)}
          />
        )}
      </div>

      {/* Floating AI Coach Modal / Chat Window */}
      <CoachModal
        isOpen={coachOpen}
        onClose={() => setCoachOpen(false)}
        beginnerMode={beginnerMode}
      />

      {/* Global Quick Search (⌘K) Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
