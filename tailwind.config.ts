import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      colors: {
        /* Основная палитра */
        palette: {
          DEFAULT: "#04052e",
          50: "#ede9fe",
          100: "#02010a",
          200: "#04052e",
          300: "#140152",
          400: "#22007c",
          500: "#0d00a4",
          600: "#a78bfa",
          700: "#c4b5fd",
          800: "#ddd6fe",
          900: "#ede9fe",
        },
        /* Тёплые акценты — для CTA, цен, бейджей */
        warm: {
          DEFAULT: "#f59e0b",
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        /* Роза — для подарков и эмоций */
        rose: {
          DEFAULT: "#f472b6",
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
        },
        /* Бирюза — для успеха и результатов */
        teal: {
          DEFAULT: "#2dd4bf",
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        /* Доп. премиальный акцент */
        luxury: {
          DEFAULT: "#e9d5ff",
          gold: "#fde68a",
          silver: "#e0e7ff",
        },
        /* Алиасы: prussian_blue = тёмные фоны, jasmine = светлый текст на тёмном */
        prussian_blue: {
          DEFAULT: "#04052e",
          100: "#02010a",
          200: "#04052e",
          300: "#140152",
          400: "#22007c",
          500: "#04052e",
          600: "#0d00a4",
          700: "#a78bfa",
          800: "#c4b5fd",
          900: "#ede9fe",
        },
        deep_teal: {
          DEFAULT: "#140152",
          100: "#02010a",
          200: "#04052e",
          300: "#140152",
          400: "#22007c",
          500: "#140152",
          600: "#0d00a4",
          700: "#a78bfa",
          800: "#ddd6fe",
          900: "#ede9fe",
        },
        jasmine: {
          DEFAULT: "#a78bfa",
          100: "#02010a",
          200: "#140152",
          300: "#c4b5fd",
          400: "#ddd6fe",
          500: "#a78bfa",
          600: "#c4b5fd",
          700: "#ddd6fe",
          800: "#e0d8fe",
          900: "#ede9fe",
        },
        brick_ember: {
          DEFAULT: "#22007c",
          100: "#04052e",
          200: "#140152",
          300: "#22007c",
          400: "#22007c",
          500: "#0d00a4",
          600: "#a78bfa",
          700: "#c4b5fd",
          800: "#ddd6fe",
          900: "#ede9fe",
        },
        blood_red: {
          DEFAULT: "#22007c",
          100: "#04052e",
          200: "#140152",
          300: "#22007c",
          400: "#22007c",
          500: "#0d00a4",
          600: "#a78bfa",
          700: "#c4b5fd",
          800: "#ddd6fe",
          900: "#ede9fe",
        },
        brand: {
          DEFAULT: "hsl(var(--color-brand))",
          hover: "hsl(var(--color-brand-hover))",
          light: "hsl(var(--color-brand-light))",
          muted: "hsl(var(--color-brand-muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))",
          hover: "hsl(var(--color-accent-hover))",
          muted: "hsl(var(--color-accent-muted))",
        },
        surface: {
          DEFAULT: "hsl(var(--color-surface))",
          alt: "hsl(var(--color-surface-alt))",
          subtle: "hsl(var(--color-surface-subtle))",
        },
        content: {
          DEFAULT: "hsl(var(--color-text))",
          muted: "hsl(var(--color-text-muted))",
          inverse: "hsl(var(--color-text-inverse))",
        },
        section1: "var(--color-section1)",
        section2: "var(--color-section2)",
        section3: "var(--color-section3)",
        section4: "hsl(var(--color-brand))",
        section5: "hsl(var(--color-brand-muted))",
        mainBg: "hsl(var(--color-surface-alt))",
        "section-bg": {
          blue: "hsl(var(--section-bg-blue))",
          navy: "hsl(var(--section-bg-navy))",
          gold: "hsl(var(--section-bg-gold))",
          teal: "hsl(var(--section-bg-teal))",
          orange: "hsl(var(--section-bg-orange))",
        },
        border: "hsl(var(--color-border))",
        background: "hsl(var(--color-surface))",
        foreground: "hsl(var(--color-text))",
        primary: {
          DEFAULT: "hsl(var(--color-brand))",
          foreground: "hsl(var(--color-text-inverse))",
        },
        muted: {
          DEFAULT: "hsl(var(--color-surface-subtle))",
          foreground: "hsl(var(--color-text-muted))",
        },
        card: {
          DEFAULT: "hsl(var(--color-surface))",
          foreground: "hsl(var(--color-text))",
        },
      },
      borderRadius: {
        card: "var(--radius-card)",
        button: "var(--radius-button)",
        lg: "var(--radius-card)",
        md: "calc(var(--radius-card) - 2px)",
        sm: "calc(var(--radius-card) - 4px)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },

        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "infinite-scroll": {
          "0": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 35.5px))" },
        },
        "section-reveal": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        "section-reveal": "section-reveal 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "float": "float 4s ease-in-out infinite",
      },

      backgroundImage: {
        "main-banner2": "url('./assets/main.jpeg')",
        "main-banner":
          "linear-gradient(to right bottom, #02010ae0, #140152d9), url('./assets/maindBanner.jpg')",
        statistics: "url('/assets/statisticsBg.svg')",
        mina: "url('src/assets/minaBg.png')",
        sui: "url('/assets/suiBg.png')",
        api: "url('/assets/apiBg.png')",
        mns: "url('/assets/mnsBg.png')",
        mission: "url('/assets/mission.svg')",
        groupsBg: "url('./assets/groupBanner.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
