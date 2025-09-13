import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      // Font Family
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        primary: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      // Font Sizes with line heights
      fontSize: {
        // Body text sizes
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px

        // Heading sizes
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        "5xl": ["3rem", { lineHeight: "1.1" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1.1" }], // 60px
        "7xl": ["4.5rem", { lineHeight: "1.1" }], // 72px
        "8xl": ["6rem", { lineHeight: "1.1" }], // 96px - Hero title
      },

      // Font Weights
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500", // Primary button and heading weight
        semibold: "600", // Hero title weight
        bold: "700",
      },

      // Color Palette
      colors: {
        // Primary Brand Colors
        primary: {
          50: "#f3f1ff",
          100: "#ebe5ff",
          200: "#d9ceff",
          300: "#bea6ff",
          400: "#9f75ff",
          500: "#8c45ff", // Main brand color
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },

        // Secondary Colors (Purple variants)
        secondary: {
          50: "#faf7ff",
          100: "#f3edff",
          200: "#e9deff",
          300: "#d8c4ff",
          400: "#c19eff",
          500: "#a970ff",
          600: "#9544ff",
          700: "#8426ed",
          800: "#7020c7",
          900: "#4a208a", // Used in gradients
          950: "#2e0f57",
        },

        // Neutral Colors (Grayscale with opacity variants)
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },

        // Dark Theme Colors
        dark: {
          primary: "#000000", // Main background
          secondary: "#190d2e", // Card backgrounds, input backgrounds
          tertiary: "#2A2A2A", // Border colors
          surface: "#0e0024", // Gradient backgrounds
        },

        // Text Colors
        text: {
          primary: "#ffffff", // Main text color
          secondary: "rgba(255, 255, 255, 0.7)", // Secondary text (white/70)
          tertiary: "rgba(255, 255, 255, 0.5)", // Muted text (white/50)
          accent: "#8c45ff", // Accent text (links, focus states)
        },

        // Border Colors
        border: {
          primary: "rgba(255, 255, 255, 0.15)", // Main border color (white/15)
          secondary: "rgba(255, 255, 255, 0.20)", // Subtle borders (white/20)
          accent: "rgba(140, 69, 255, 0.4)", // Accent borders (primary/40)
        },

        // Social Media Brand Colors
        social: {
          linkedin: "#0A66C2",
          facebook: "#1877F2",
          youtube: "#FF0000",
          instagram: {
            from: "#ec4899", // pink-500
            via: "#a855f7", // purple-500
            to: "#eab308", // yellow-500
          },
        },
      },

      // Background Colors (including gradients)
      backgroundImage: {
        "gradient-primary": "linear-gradient(to bottom, #190d2e, #4a208a)",
        "gradient-secondary":
          "linear-gradient(to bottom right, #190d2e, #000000)",
        "gradient-accent":
          "radial-gradient(75% 75% at center center, rgba(140,69,255,0.5) 15%, rgba(14,0,36,0.5) 78%, transparent)",
        "gradient-text":
          "radial-gradient(100% 100% at top left, white, white, rgba(74,32,138,0.5))",
        "gradient-hero":
          "radial-gradient(50% 50% at 16.8% 18.3%, white, rgb(184,148,255) 37.7%, rgb(24,0,66))",
      },

      // Box Shadows
      boxShadow: {
        "glow-primary": "0px 0px 12px #8c45ff",
        "glow-primary-hover": "0px 0px 16px #8c45ff",
        "glow-inset": "0 0 10px rgba(140,69,255,0.7) inset",
        "hero-planet":
          "-20px -20px 50px rgba(255,255,255,0.5), -20px -20px 80px rgba(255,255,255,0.1), 0 0 50px rgb(140,69,255)",
        card: "0 0 25px rgba(140,69,255,0.15)",
      },

      // Border Radius
      borderRadius: {
        lg: "0.5rem", // 8px - Primary button radius
        xl: "0.75rem", // 12px - Card radius
      },

      // Spacing
      spacing: {
        "18": "4.5rem", // 72px
        "88": "22rem", // 352px
        "96": "24rem", // 384px
      },

      // Letter Spacing
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
      },

      // Transition Duration
      transitionDuration: {
        "300": "300ms",
      },

      // Animation
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      // Mask Image (for gradient masks)
      maskImage: {
        "gradient-to-bottom":
          "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        "gradient-to-top": "linear-gradient(to top, black, transparent)",
        "gradient-to-bottom-mask":
          "linear-gradient(to bottom, black, transparent)",
      },

      // Backdrop Blur
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [
    // Custom utility for mask-image
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".mask-gradient-to-bottom": {
          "mask-image":
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        },
        ".mask-gradient-to-top": {
          "mask-image": "linear-gradient(to top, black, transparent)",
        },
        ".mask-gradient-bottom": {
          "mask-image": "linear-gradient(to bottom, black, transparent)",
        },
      });
    },
  ],
};

export default config;
