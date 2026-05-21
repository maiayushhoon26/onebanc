import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Bell, Moon, CreditCard, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import './Settings.css';

export default function Settings({ isDarkMode, setIsDarkMode }) {
  const [notificationsOn, setNotificationsOn] = React.useState(true);
  const settingGroups = [
    {
      title: 'Account',
      items: [
        { id: 'profile', icon: User, label: 'Personal Information', color: '#3b82f6' },
        { id: 'security', icon: Shield, label: 'Security & Privacy', color: '#10b981' },
        { id: 'cards', icon: CreditCard, label: 'Payment Methods', color: '#8b5cf6' }
      ]
    },
    {
      title: 'Preferences',
      items: [
        { id: 'notifications', icon: Bell, label: 'Notifications', color: '#f59e0b', toggle: true, state: notificationsOn },
        { id: 'darkmode', icon: Moon, label: 'Dark Mode', color: '#6366f1', toggle: true, state: isDarkMode }
      ]
    },
    {
      title: 'Other',
      items: [
        { id: 'help', icon: HelpCircle, label: 'Help & Support', color: '#06b6d4' },
        { id: 'logout', icon: LogOut, label: 'Log Out', color: '#ef4444', isDestructive: true }
      ]
    }
  ];

  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1>Settings</h1>
      </header>

      <div className="profile-summary glass-panel">
        <div className="profile-img">
          <img src="https://ui-avatars.com/api/?name=Alex+Doe&background=7c3aed&color=fff&size=120" alt="Alex Doe" />
        </div>
        <div className="profile-info">
          <h2>Alex Doe</h2>
          <p>alex.doe@example.com</p>
          <span className="status-badge">Premium Member</span>
        </div>
        <button className="edit-btn">Edit</button>
      </div>

      <div className="settings-lists">
        {settingGroups.map((group, groupIdx) => (
          <motion.div 
            className="settings-group" 
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * groupIdx }}
          >
            <h3>{group.title}</h3>
            <div className="settings-items glass-panel">
              {group.items.map((item, i) => {
                const Icon = item.icon;
                return (
                  <React.Fragment key={item.id}>
                    <div 
                      className={`setting-item ${item.isDestructive ? 'destructive' : ''}`}
                      onClick={() => {
                        if (item.id === 'darkmode') setIsDarkMode(!isDarkMode);
                        if (item.id === 'notifications') setNotificationsOn(!notificationsOn);
                      }}
                    >
                      <div className="setting-icon" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                        <Icon size={20} />
                      </div>
                      <span className="setting-label">{item.label}</span>
                      
                      {item.toggle ? (
                        <div className={`toggle ${item.state ? 'active' : ''}`}>
                          <div className="toggle-thumb"></div>
                        </div>
                      ) : (
                        <ChevronRight size={20} className="chevron" />
                      )}
                    </div>
                    {i < group.items.length - 1 && <div className="divider"></div>}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="app-version">
        <p>OneBanc Version 2.4.0</p>
      </div>
    </div>
  );
}
