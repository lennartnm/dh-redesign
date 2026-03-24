/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        accent: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        brand: { blue: "#033EDC", sky: "#00A7F9" }
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #033EDC 0%, #00A7F9 100%)"
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        stamp: {
          "0%": { transform: "scale(0.8) rotate(-8deg)", opacity: "0" },
          "60%": { transform: "scale(1.05) rotate(3deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" }
        },
        countfade: { "0%": { opacity: "0.2" }, "100%": { opacity: "1" } },
        "fade-up": {
          "from": { opacity: "0", transform: "translateY(20px)" },
          "to": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "from": { opacity: "0" },
          "to": { opacity: "1" }
        }
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        stamp: "stamp 600ms ease-out 1",
        countfade: "countfade 800ms ease-out 1",
        "fade-up": "fade-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards",
        "fade-in": "fade-in 0.6s ease forwards"
      },
      boxShadow: {
        stamp: "0 0 0 3px rgba(34,197,94,0.25) inset, 0 8px 30px rgba(0,0,0,0.1)",
        card: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 8px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.10)"
      },
      aspectRatio: { "16/6": "16 / 6", "4/5": "4 / 5" }
    }
  },
  plugins: []
};
