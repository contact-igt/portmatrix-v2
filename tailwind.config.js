/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // PORTMATRIX brand — sampled directly from the logo
        navy: {
          DEFAULT: "#2E3192",
          50: "#EEEFFB",
          100: "#DEE0F6",
          200: "#BCC0EE",
          300: "#8E94E0",
          400: "#5C63C9",
          500: "#3D43AE",
          600: "#2E3192",
          700: "#262877",
          800: "#1C1E5C",
          900: "#131444",
          950: "#0B0C2B",
        },
        brandred: {
          DEFAULT: "#ED1B24",
          50: "#FDEAEB",
          100: "#FBD2D4",
          200: "#F7A5A9",
          300: "#F3777E",
          400: "#F04A53",
          500: "#ED1B24",
          600: "#C8141C",
          700: "#9C1016",
          800: "#700B10",
          900: "#45070A",
        },
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
        card: "0 1px 2px rgba(13,16,46,0.04), 0 12px 32px -12px rgba(46,49,146,0.18)",
        lift: "0 1px 2px rgba(13,16,46,0.04), 0 24px 48px -16px rgba(46,49,146,0.28)",
        glow: "0 0 0 1px rgba(46,49,146,0.08), 0 18px 50px -20px rgba(237,27,36,0.30)",
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(rgba(46,49,146,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(46,49,146,0.06) 1px, transparent 1px)",
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
