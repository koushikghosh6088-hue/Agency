'use client';

const techStack = [
  'Next.js',
  'React',
  'React Native',
  'Node.js',
  'Python',
  'TypeScript',
  'Tailwind CSS',
  'OpenAI',
  'LangChain',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
  'AWS',
  'Vercel',
  'Docker',
  'Stripe',
  'Twilio',
  'Framer Motion',
  'Three.js',
  'Supabase',
];

export default function TrustBar() {
  return (
    <section className="relative py-6 bg-black/80 backdrop-blur-md border-y border-[#0066ff]/20 overflow-hidden z-20 group">
      {/* Premium Shimmer Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066ff]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="flex whitespace-nowrap">
        <div className="flex animate-[marquee_50s_linear_infinite] items-center gap-12 sm:gap-16">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 shrink-0 px-2">
              <span className="font-heading font-black text-xs sm:text-sm uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 transition-colors duration-500 hover:text-[#0066ff] hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.6)]">
                {tech}
              </span>
              <div className="w-1.5 h-1.5 bg-[#0066ff]/20 rounded-full shadow-[0_0_8px_rgba(0,102,255,0.2)]" />
            </div>
          ))}
        </div>
      </div>

      {/* Underline Shimmer */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066ff]/20 to-transparent" />

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  );
}
