import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gift, Zap, Ticket, Coffee, ShoppingBag } from 'lucide-react';
import './Rewards.css';

export default function Rewards() {
  const offers = [
    { id: 1, title: '50% Off Starbucks', desc: 'Use your OneBanc card and get 50% cashback on your next coffee.', icon: Coffee, color: '#10b981' },
    { id: 2, title: 'Amazon Prime 1 Month', desc: 'Redeem 5,000 coins for a free month of Amazon Prime.', icon: ShoppingBag, color: '#f59e0b' },
    { id: 3, title: 'Movie Tickets 1+1', desc: 'Book tickets on weekend and get one absolutely free.', icon: Ticket, color: '#ef4444' }
  ];

  return (
    <div className="rewards-container">
      <header className="rewards-header">
        <h1>Rewards Hub</h1>
        <div className="coin-balance glass-panel">
          <Sparkles size={16} color="#f59e0b" />
          <span>12,450 Coins</span>
        </div>
      </header>

      <motion.div 
        className="scratch-card glass-panel"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="scratch-content">
          <Gift size={48} color="var(--accent-primary)" />
          <h3>You have a new reward!</h3>
          <p>Tap to reveal your cashback for the Uber ride.</p>
          <button className="reveal-btn">Tap to Reveal</button>
        </div>
      </motion.div>

      <div className="section-header">
        <h3>Daily Challenges</h3>
        <span className="text-secondary">Closes in 4h</span>
      </div>

      <div className="challenges-grid">
        <div className="challenge-card glass-panel">
          <div className="icon-wrapper purple">
            <Zap size={24} />
          </div>
          <h4>Make 3 Payments</h4>
          <p>Progress: 2/3</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '66%' }}></div>
          </div>
          <span className="reward-text">+500 Coins</span>
        </div>
        
        <div className="challenge-card glass-panel">
          <div className="icon-wrapper blue">
            <CreditCard size={24} />
          </div>
          <h4>Add $1000</h4>
          <p>Progress: 0/1</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '0%' }}></div>
          </div>
          <span className="reward-text">+1000 Coins</span>
        </div>
      </div>

      <div className="section-header">
        <h3>Top Offers For You</h3>
      </div>

      <div className="offers-list">
        {offers.map((offer, i) => {
          const Icon = offer.icon;
          return (
            <motion.div 
              className="offer-item glass-panel" 
              key={offer.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
            >
              <div className="offer-icon" style={{ backgroundColor: `${offer.color}20`, color: offer.color }}>
                <Icon size={24} />
              </div>
              <div className="offer-details">
                <h4>{offer.title}</h4>
                <p>{offer.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}

// Temporary icon component since CreditCard isn't imported from lucide above
function CreditCard(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>;
}
