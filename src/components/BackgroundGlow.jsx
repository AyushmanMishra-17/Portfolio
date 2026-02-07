import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      <motion.div
        className="fixed top-[-200px] left-[-200px] w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[120px] z-[-1]"
        animate={{ x: [0, 40, 0], y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px] z-[-1]"
        animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
