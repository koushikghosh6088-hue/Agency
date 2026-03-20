'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumbers = [
    { label: '+91 70033 83676', href: 'https://wa.me/917003383676' },
    { label: '+91 80176 83428', href: 'https://wa.me/918017683428' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 mb-2 w-72 glass-premium border-blue-400/20 rounded-[2rem] p-6 shadow-2xl backdrop-blur-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-400/5 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-400/10 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Connect Protocol</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/30 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                {whatsappNumbers.map((num, i) => (
                  <motion.a
                    key={i}
                    href={num.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between group glass-premium p-4 rounded-2xl border-white/5 hover:border-blue-400/30 transition-all duration-300 hover:bg-blue-400/10"
                  >
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-blue-400 uppercase tracking-tighter mb-1">WhatsApp Option {i + 1}</span>
                      <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{num.label}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-blue-400 transition-all group-hover:translate-x-1" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">Secure Encryption // Active</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 glass-premium bg-blue-400 rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 border-white/20 group overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="flex items-center justify-center"
            >
              <MessageCircle className="w-8 h-8 fill-black" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Effect for visibility */}
        {!isOpen && (
          <>
            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20" />
            <div className="absolute inset-0 bg-blue-400 rounded-full animate-[ping_2s_infinite] opacity-10" />
          </>
        )}
      </motion.button>
    </div>
  );
}
