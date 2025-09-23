/** @type {import('tailwindcss').Config} */
export default {
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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Ubuntu Light Theme Colors
        "ubuntu-light": "#F7F7F7",
        "ubuntu-dark": "#2C2C2C",
        "ubuntu-accent": "#E95420",
        "ubuntu-purple": "#772953",
        "ubuntu-muted": "#6C6C6C",
        "ubuntu-border": "#D4D4D4",
        "ubuntu-window": "#FFFFFF",
        "ubuntu-terminal": "#FEFEFE",
        "ubuntu-hover": "#F0F0F0",
        "ubuntu-button": "#E95420",
        "ubuntu-button-hover": "#D14D1F",
        "ubuntu-kbd": "#F5F5F5",
        "ubuntu-close": "#E74C3C",
        "ubuntu-minimize": "#F39C12",
        "ubuntu-maximize": "#27AE60",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        ubuntu: [
          "Ubuntu",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Ubuntu Mono", "Courier New", "monospace"],
      },
      boxShadow: {
        ubuntu: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        "ubuntu-window":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(233, 84, 32, 0.1)",
        terminal:
          "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        glow: "0 0 20px rgba(20, 184, 166, 0.5)",
        "ubuntu-glow": "0 0 20px rgba(233, 84, 32, 0.5)",
      },
      backdropBlur: {
        terminal: "10px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        glow: "glow 2s ease-in-out infinite",
        "ubuntu-glow": "ubuntu-glow 2s ease-in-out infinite",
        shimmer: "shimmer 1.5s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(20, 184, 166, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(20, 184, 166, 0.8)",
          },
        },
        "ubuntu-glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(233, 84, 32, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(233, 84, 32, 0.8)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
