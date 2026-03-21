'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Sparkles } from 'lucide-react';

const team = [
  {
    name: "Koushik Ghosh",
    role: "Founder & Visionary",
    img: "/team/koushik-ghosh.png",
    color: "#0066ff",
    bio: "Architecting the technical core and high-performance neural systems."
  },
  {
    name: "Anirban",
    role: "Co-Founder & Lead",
    img: "/team/anirban-co-founder.png",
    color: "#ccff00",
    bio: "Defining elite logic architectures and cutting-edge AI integrations."
  }
];

export default function TeamSection() {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-12 md:gap-20">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            {/* Round Image Container */}
            <div className={`relative w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 mb-6 p-1 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/5 overflow-hidden group-hover:border-[${member.color}]/50 transition-all duration-700 shadow-2xl`}>
              <div className="relative w-full h-full rounded-full overflow-hidden bg-black/40 backdrop-blur-md">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-black text-white uppercase tracking-tighter transition-colors group-hover:text-white">
                {member.name}
              </h3>
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold" style={{ color: member.color }}>
                {member.role}
              </p>
              <p className="hidden md:block text-[10px] text-white/40 max-w-[180px] mt-2 leading-relaxed italic">
                {member.bio}
              </p>
            </div>

            {/* Subtle Float Icon */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Shield className="w-4 h-4 text-white/20" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
