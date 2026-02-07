export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#7C7CFF",
        glass: "rgba(255,255,255,0.08)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,124,255,0.35)"
      }
    }
  },
  plugins: []
};
