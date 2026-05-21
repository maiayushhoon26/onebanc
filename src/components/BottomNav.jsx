import React from 'react';
import { motion } from 'framer-motion';
import { Home, Gift, Settings } from 'lucide-react';
import './BottomNav.css';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'rewards', icon: Gift, label: 'Rewards' },
  { id: 'settings', icon: Settings, label: 'Settings' }
];

export default function BottomNav({ activeTab, setActiveTab }) {
  return (
    <div className="bottom-nav-container glass-panel">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        
        return (
          <button
            key={item.id}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <div className="icon-wrapper">
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="active-indicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </div>
            <span className="nav-label">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
