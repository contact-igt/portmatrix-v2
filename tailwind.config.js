/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue sampled from the supplied PortMatrix_Logo.png; pale surfaces use neutral greys.
        navy: {
          DEFAULT: "#013E7F",
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#E5E5E5",
          300: "#013E7F",
          400: "#013E7F",
          500: "#013E7F",
          600: "#013E7F",
          700: "#013E7F",
          800: "#013E7F",
          900: "#013E7F",
          950: "#013E7F",
        },
        brandred: {
          DEFAULT: "#ED1C24",
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#E5E5E5",
          300: "#ED1C24",
          400: "#ED1C24",
          500: "#ED1C24",
          600: "#ED1C24",
          700: "#ED1C24",
          800: "#ED1C24",
          900: "#ED1C24",
        },
        china: { red: "#ED1C24", yellow: "#FFDE00", "yellow-hover": "#FFE94D" },
        ink: "#202020",
        paper: "#F7F7F7",
        mist: "#EEEEEE",
        slatey: "#616161",
        hairline: "#E5E5E5",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(13,16,46,0.04), 0 12px 32px -12px rgba(1,62,127,0.18)",
        lift: "0 1px 2px rgba(13,16,46,0.04), 0 24px 48px -16px rgba(1,62,127,0.28)",
        glow: "0 0 0 1px rgba(1,62,127,0.08), 0 18px 50px -20px rgba(237,28,36,0.30)",
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
