import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      <motion.div
        className="fixed top-[-300px] left-[-300px] w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/30 via-purple-500/20 to-transparent rounded-full blur-[120px] z-[-1]"
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 150, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <motion.div
        className="fixed top-[20%] right-[-200px] w-[500px] h-[500px] bg-gradient-to-bl from-cyan-500/25 via-blue-500/15 to-transparent rounded-full blur-[100px] z-[-1]"
        animate={{ 
          x: [0, -80, 0], 
          y: [0, 100, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="fixed bottom-[-250px] left-[10%] w-[550px] h-[550px] bg-gradient-to-tr from-pink-500/20 via-purple-500/15 to-transparent rounded-full blur-[110px] z-[-1]"
        animate={{ 
          x: [0, -60, 0], 
          y: [0, -120, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 22, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 4,
        }}
      />

      <motion.div
        className="fixed bottom-[10%] right-[15%] w-[450px] h-[450px] bg-gradient-to-tl from-violet-500/25 via-indigo-500/20 to-transparent rounded-full blur-[100px] z-[-1]"
        animate={{ 
          x: [0, 70, 0], 
          y: [0, -80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 6,
        }}
      />

      <div className="fixed inset-0 bg-gradient-radial from-transparent via-slate-950/50 to-slate-950 z-[-2]" />
      
      <div 
        className="fixed inset-0 z-[-2] opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </>
  );
}
