
import React, { useState, useCallback } from 'react';
import { View } from './types';
import Header from './components/Header';
import Home from './components/Home';
import StudyMode from './components/StudyMode';
import QuizMode from './components/QuizMode';
import Glossary from './components/Glossary';
import ChatTutor from './components/ChatTutor';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const navigateTo = useCallback((view: View) => {
    setCurrentView(view);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case View.STUDY:
        return <StudyMode />;
      case View.QUIZ:
        return <QuizMode />;
      case View.GLOSSARY:
        return <Glossary />;
      case View.TUTOR:
        return <ChatTutor />;
      case View.HOME:
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header navigateTo={navigateTo} currentView={currentView} />
      <main className="p-4 sm:p-6 lg:p-8">
        <div key={currentView} className="fade-in">
            {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;