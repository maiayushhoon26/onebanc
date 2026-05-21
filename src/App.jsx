import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BottomNav from './components/BottomNav';
import Home from './screens/Home';
import Rewards from './screens/Rewards';
import Settings from './screens/Settings';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('onebanc-theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
    localStorage.setItem('onebanc-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <Home key="home" />;
      case 'rewards':
        return <Rewards key="rewards" />;
      case 'settings':
        return <Settings key="settings" isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />;
      default:
        return <Home key="home" />;
    }
  };

  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      
      <div className="screen-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ height: '100%' }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
