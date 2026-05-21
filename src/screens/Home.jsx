import React, { useState } from 'react';
import { Bell, ArrowUpRight, ArrowDownLeft, Plus, CreditCard, Activity } from 'lucide-react';
import './Home.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const transactions = [
    { id: 1, name: 'Netflix Subscription', date: 'Today, 10:24 AM', amount: -14.99, type: 'expense', icon: '🍿' },
    { id: 2, name: 'Salary Deposit', date: 'Yesterday, 09:00 AM', amount: 4250.00, type: 'income', icon: '💰' },
    { id: 3, name: 'Starbucks', date: 'Yesterday, 08:15 AM', amount: -5.40, type: 'expense', icon: '☕' },
    { id: 4, name: 'Uber Ride', date: 'May 18, 06:30 PM', amount: -24.50, type: 'expense', icon: '🚗' },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="user-info">
          <div className="avatar">
            <img src="https://ui-avatars.com/api/?name=Ayush+Kumar&background=7c3aed&color=fff&size=100" alt="Avatar" />
          </div>
          <div>
            <p className="greeting">Good morning,</p>
            <h1 className="user-name">Ayush Kumar</h1>
          </div>
        </div>
        <button className="glass-btn icon-btn" onClick={() => setIsNotificationsOpen(true)}>
          <Bell size={20} />
          <span className="badge"></span>
        </button>
      </header>

      <motion.div 
        className="balance-card"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
      >
        <div className="balance-info">
          <p className="balance-label">Total Balance</p>
          <h2 className="balance-amount">$12,450.<span className="cents">75</span></h2>
          <div className="card-details">
            <p>**** **** **** 4289</p>
            <div className="card-network">
              <div className="circle red"></div>
              <div className="circle orange"></div>
            </div>
          </div>
        </div>
        
        <div className="quick-actions">
          <motion.button 
            className="action-btn send"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveModal('send')}
          >
            <ArrowUpRight size={20} />
            <span>Send</span>
          </motion.button>
          <motion.button 
            className="action-btn receive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveModal('receive')}
          >
            <ArrowDownLeft size={20} />
            <span>Receive</span>
          </motion.button>
          <motion.button 
            className="action-btn add"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveModal('add')}
          >
            <Plus size={20} />
            <span>Add</span>
          </motion.button>
        </div>
      </motion.div>

      <div className="section-header">
        <h3>Analytics</h3>
        <button className="text-btn">View All</button>
      </div>
      
      <div className="analytics-overview glass-panel">
        <div className="stat-item">
          <div className="stat-icon income-icon"><ArrowDownLeft size={16}/></div>
          <div>
            <p>Income</p>
            <h4>$4,250.00</h4>
          </div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-icon expense-icon"><ArrowUpRight size={16}/></div>
          <div>
            <p>Expense</p>
            <h4>$1,240.50</h4>
          </div>
        </div>
      </div>

      <div className="section-header">
        <h3>Recent Transactions</h3>
        <button className="text-btn">See All</button>
      </div>

      <div className="transactions-list">
        {transactions.map((tx, i) => (
          <motion.div 
            className="transaction-item glass-panel" 
            key={tx.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (i * 0.1) }}
          >
            <div className="tx-icon">{tx.icon}</div>
            <div className="tx-details">
              <h4>{tx.name}</h4>
              <p>{tx.date}</p>
            </div>
            <div className={`tx-amount ${tx.type}`}>
              {tx.type === 'income' ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Bottom Sheet Modal */}
      <AnimatePresence>
        {activeModal && (
        <>
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          />
          <motion.div 
            className="bottom-sheet glass-panel"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="sheet-handle" onClick={() => setActiveModal(null)} />
            
            {activeModal === 'send' && (
              <div className="sheet-content">
                <h3>Send Money</h3>
                <p>Transfer funds to friends or banks instantly.</p>
                <div className="input-group">
                  <span className="currency-symbol">$</span>
                  <input type="number" placeholder="0.00" autoFocus />
                </div>
                <div className="recent-contacts">
                  <div className="contact-avatar"><img src="https://ui-avatars.com/api/?name=Sam&background=10b981&color=fff" alt="Sam" /></div>
                  <div className="contact-avatar"><img src="https://ui-avatars.com/api/?name=Emma&background=f59e0b&color=fff" alt="Emma" /></div>
                  <div className="contact-avatar"><Plus size={20} /></div>
                </div>
                <motion.button whileTap={{ scale: 0.95 }} className="primary-btn" onClick={() => setActiveModal(null)}>Continue</motion.button>
              </div>
            )}

            {activeModal === 'receive' && (
              <div className="sheet-content">
                <h3>Receive Money</h3>
                <p>Show this QR code to receive payments.</p>
                <div className="qr-code-placeholder">
                  <div className="qr-inner">
                    <Activity size={48} color="var(--accent-primary)" />
                  </div>
                </div>
                <motion.button whileTap={{ scale: 0.95 }} className="primary-btn" onClick={() => setActiveModal(null)}>Share Link</motion.button>
              </div>
            )}

            {activeModal === 'add' && (
              <div className="sheet-content">
                <h3>Add Funds</h3>
                <p>Top up your OneBanc wallet.</p>
                <div className="payment-methods">
                  <div className="method-item active">
                    <CreditCard size={20} />
                    <span>**** 4289</span>
                  </div>
                  <div className="method-item">
                    <Plus size={20} />
                    <span>New Card</span>
                  </div>
                </div>
                <div className="input-group">
                  <span className="currency-symbol">$</span>
                  <input type="number" placeholder="100.00" />
                </div>
                <motion.button whileTap={{ scale: 0.95 }} className="primary-btn" onClick={() => setActiveModal(null)}>Add Money</motion.button>
              </div>
            )}
          </motion.div>
        </>
        )}
      </AnimatePresence>

      {/* Notifications Side Panel */}
      <AnimatePresence>
        {isNotificationsOpen && (
          <>
            <motion.div 
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNotificationsOpen(false)}
              style={{ zIndex: 1001 }}
            />
            <motion.div 
              className="notifications-panel glass-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="notifications-header">
                <h3>Notifications</h3>
                <button className="close-btn" onClick={() => setIsNotificationsOpen(false)}>×</button>
              </div>
              <div className="notifications-list">
                <div className="notification-item unread">
                  <div className="noti-icon" style={{background: 'rgba(124, 58, 237, 0.2)', color: '#7c3aed'}}><Activity size={16}/></div>
                  <div className="noti-content">
                    <p><strong>Security Alert</strong>: New login from Mac.</p>
                    <span>Just now</span>
                  </div>
                </div>
                <div className="notification-item unread">
                  <div className="noti-icon" style={{background: 'rgba(16, 185, 129, 0.2)', color: '#10b981'}}><ArrowDownLeft size={16}/></div>
                  <div className="noti-content">
                    <p><strong>Salary Deposit</strong>: $4,250.00 received.</p>
                    <span>Yesterday</span>
                  </div>
                </div>
                <div className="notification-item">
                  <div className="noti-icon" style={{background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b'}}><Bell size={16}/></div>
                  <div className="noti-content">
                    <p><strong>Reminder</strong>: Credit card bill due in 3 days.</p>
                    <span>May 18</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
