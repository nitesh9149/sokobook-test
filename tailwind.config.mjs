/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1100px",
        xl: "1280px",
        "2xl": "1600px",
        "3xl": "1920px",
        short: { raw: "(max-height: 640px)" },
        tall: { raw: "(min-height: 900px)" },
      },

      fontSize: {
        "heading-6xl": [
          "var(--heading-6xl)",
          {
            lineHeight: "var(--line-height-92)",
            letterSpacing: "1px",
            fontWeight: "700",
          },
        ],
        "heading-5xl": [
          "var(--heading-5xl)",
          {
            lineHeight: "var(--line-height-80)",
            letterSpacing: "0.5px",
            fontWeight: "700",
          },
        ],
        "heading-4xl": [
          "var(--heading-4xl)",
          { lineHeight: "var(--line-height-64)", fontWeight: "700" },
        ],
        "heading-3xl": [
          "var(--heading-3xl)",
          {
            lineHeight: "var(--line-height-48)",
            letterSpacing: "-0.54px",
            fontWeight: "700",
          },
        ],
        "heading-2xl": [
          "var(--heading-2xl)",
          {
            lineHeight: "var(--line-height-40)",
            letterSpacing: "-0.3px",
            fontWeight: "700",
          },
        ],
        "heading-xl": [
          "var(--heading-xl)",
          {
            lineHeight: "var(--line-height-32)",
            letterSpacing: "-0.2px",
            fontWeight: "700",
          },
        ],
        "heading-lg": [
          "var(--heading-lg)",
          {
            lineHeight: "var(--line-height-28)",
            letterSpacing: "-0.2px",
            fontWeight: "700",
          },
        ],
        "heading-md": [
          "var(--heading-md)",
          { lineHeight: "var(--line-height-28)", fontWeight: "700" },
        ],
        "heading-sm": [
          "16px",
          { lineHeight: "var(--line-height-24)", fontWeight: "700" },
        ],
        "body-lg-default": [
          "18px",
          { lineHeight: "var(--line-height-28)", fontWeight: "400" },
        ],
        "body-lg-underline": [
          "18px",
          { lineHeight: "var(--line-height-28)", fontWeight: "500" },
        ],
        "body-lg-medium": [
          "18px",
          { lineHeight: "var(--line-height-28)", fontWeight: "500" },
        ],
        "body-lg-semibold": [
          "18px",
          { lineHeight: "var(--line-height-28)", fontWeight: "600" },
        ],
        "body-md-default": [
          "16px",
          { lineHeight: "var(--line-height-24)", fontWeight: "400" },
        ],
        "body-md-underline": [
          "16px",
          { lineHeight: "var(--line-height-24)", fontWeight: "500" },
        ],
        "body-md-medium": [
          "16px",
          { lineHeight: "var(--line-height-24)", fontWeight: "500" },
        ],
        "body-md-medium-underline": [
          "16px",
          { lineHeight: "var(--line-height-24)", fontWeight: "500" },
        ],
        "body-md-semibold": [
          "16px",
          { lineHeight: "var(--line-height-24)", fontWeight: "600" },
        ],
        "body-sm-default": [
          "14px",
          { lineHeight: "var(--line-height-20)", fontWeight: "400" },
        ],
        "body-sm-underline": [
          "14px",
          { lineHeight: "var(--line-height-20)", fontWeight: "500" },
        ],
        "body-sm-medium": [
          "14px",
          { lineHeight: "var(--line-height-20)", fontWeight: "500" },
        ],
        "body-sm-medium-underline": [
          "14px",
          { lineHeight: "var(--line-height-20)", fontWeight: "500" },
        ],
        "body-sm-semibold": [
          "14px",
          { lineHeight: "var(--line-height-20)", fontWeight: "600" },
        ],
        "body-xs-default": [
          "12px",
          { lineHeight: "var(--line-height-16)", fontWeight: "400" },
        ],
        "body-xs-medium": [
          "12px",
          { lineHeight: "var(--line-height-16)", fontWeight: "500" },
        ],
        "body-xs-semibold": [
          "12px",
          { lineHeight: "var(--line-height-16)", fontWeight: "600" },
        ],
      },

      letterSpacing: {
        tightest: "-0.54px",
        tighter: "-0.3px",
        tight: "-0.2px",
      },
      fontWeight: {
        light: "400",
        normal: "500",
        semibold: "600",
        bold: "700",
      },

      colors: {
        textDefault: "var(--text-default)",
        textSecondary: "var(--text-secondary)",
        textTertiary: "var(--text-teritary)",
        textPrimary: "var(--text-primary)",

        primaryMain: "var(--primary-main)",
        surfacePrimary: "var(--surface-primary)",

        bgBackground: "var(--bg-background)",
        bgSecondary: "var(--bg-secondary)",
        bgTertiary: "var(--bg-tertiary)",

        surfaceDefault: "var(--surface-default)",

        white: "var(--white)",
        black: "var(--black)",
        red: "var(--red)",

        borderDefault: "var(--border-default)",
      },

      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--text-secondary)",
            "--tw-prose-headings": "#000",
            "--tw-prose-lead": "#000",
            "--tw-prose-links": "var(--primary-main)",
            "--tw-prose-bold": "#000",
            "--tw-prose-counters": "#000",
            "--tw-prose-bullets": "#000",
            "--tw-prose-hr": "rgba(255, 255, 255, 0.10)",
            "--tw-prose-quotes": "var(--text-secondary)",
            "--tw-prose-quote-borders": "var(--brand)",
            "--tw-prose-captions": "var(--text-secondary)",
            "--tw-prose-code": "yellow",
            "--tw-prose-pre-code": "green",
            "--tw-prose-pre-bg": "purple",
            "--tw-prose-th-borders": "orange",
            "--tw-prose-td-borders": "orange",
          },
        },
      },

      backgroundImage: {
        "hero-gradient": "linear-gradient(180deg, #FFF 0%, #F9F9F9 100%)",
        "testimonial-gradient":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)",
        "cta-gradient": "linear-gradient(180deg, #26A579 0%, #129165 100%)",
        "featured-blog-gradient":
          "linear-gradient(2deg, rgba(0, 0, 0, 0.80) -3.98%, rgba(0, 0, 0, 0.00) 98.84%)",
        "tutorial-card-gradient":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)",
      },

      boxShadow: {
        default: "0px 1.5px 4px -1px rgba(10, 9, 11, 0.07)",
        "sm-hard":
          "0px 2px 12px -1px rgba(10, 9, 11, 0.10), 0px 2px 2px -1px rgba(10, 9, 11, 0.04)",
      },

      borderRadius: {
        "4xl": "32px",
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },

  plugins: [],
};
