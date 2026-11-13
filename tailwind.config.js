/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // PORTMATRIX brand — dominant blue/red sampled from PortMatrix_Logo.png; tonal shades derived
        navy: {
          DEFAULT: "#013E7F",
          50: "#F0F5FA",
          100: "#DFEAF5",
          200: "#BED2E5",
          300: "#8EAECB",
          400: "#5D8AAF",
          500: "#28649A",
          600: "#013E7F",
          700: "#01346B",
          800: "#012A56",
          900: "#012043",
          950: "#00162E",
        },
        brandred: {
          DEFAULT: "#E30007",
          50: "#FFF0F0",
          100: "#FCDCDD",
          200: "#F8B9BB",
          300: "#F38E91",
          400: "#EB5055",
          500: "#E30007",
          600: "#BF0006",
          700: "#980005",
          800: "#710004",
          900: "#480002",
        },
        china: { red: "#E01422", yellow: "#FFDE00", "yellow-hover": "#FFE94D" },
        ink: "#0D102E",
        paper: "#F6F7FC",
        mist: "#EBEEF7",
        slatey: "#5B6178",
        hairline: "#E2E6F2",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(13,16,46,0.04), 0 12px 32px -12px rgba(1,62,127,0.18)",
        lift: "0 1px 2px rgba(13,16,46,0.04), 0 24px 48px -16px rgba(1,62,127,0.28)",
        glow: "0 0 0 1px rgba(1,62,127,0.08), 0 18px 50px -20px rgba(227,0,7,0.30)",
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(rgba(1,62,127,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(1,62,127,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseline: {
          "0%": { strokeDashoffset: "120" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
