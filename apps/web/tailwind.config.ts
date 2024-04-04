import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./views/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },

    extend: {
      screens: {
        xsm: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "custom-xl": "1399px",
        "2xl": "1536px",
        "3xl": "1920px",
      },

      colors: {
        light_blue: {
          100: "#2C4BF9",
          80: "rgba(44, 75, 249, 0.80)",
          72: "rgba(44, 75, 249, 0.72)",
          50: "rgba(44, 75, 249, 0.50)",
          32: "rgba(44, 75, 249, 0.32)",
          16: "rgba(44, 75, 249, 0.16)",
          12: "rgba(44, 75, 249, 0.12)",
          8: "rgba(44, 75, 249, 0.08)",
          4: "rgba(44, 75, 249, 0.04)",
        },

        dark_blue: {
          100: "#00315C",
          80: "rgba(0, 49, 92, 0.80)",
          72: "rgba(0, 49, 92, 0.72)",
          50: "rgba(0, 49, 92, 0.50)",
          32: "rgba(0, 49, 92, 0.32)",
          16: "rgba(0, 49, 92, 0.16)",
          12: "rgba(0, 49, 92, 0.12)",
          8: "rgba(0, 49, 92, 0.08)",
          4: "rgba(0, 49, 92, 0.04)",
        },

        white: {
          100: "#FEFEFE",
          80: "rgba(254, 254, 254, 0.80)",
          72: "rgba(254, 254, 254, 0.72)",
          50: "rgba(254, 254, 254, 0.50)",
          32: "rgba(254, 254, 254, 0.32)",
          16: "rgba(254, 254, 254, 0.16)",
          12: "rgba(254, 254, 254, 0.12)",
          8: "rgba(254, 254, 254, 0.08)",
          4: "rgba(254, 254, 254, 0.04)",
        },

        black: {
          100: "#0b1215",
          80: "rgba(20, 20, 20, 0.80)",
          72: "rgba(20, 20, 20, 0.72)",
          50: "rgba(20, 20, 20, 0.50)",
          32: "rgba(20, 20, 20, 0.32)",
          16: "rgba(20, 20, 20, 0.16)",
          12: "rgba(20, 20, 20, 0.12)",
          8: "rgba(20, 20, 20, 0.08)",
          4: "rgba(20, 20, 20, 0.04)",
        },

        dark_orange: {
          100: "#DB5000",
          80: "rgba(219, 80, 0, 0.80)",
          72: "rgba(219, 80, 0, 0.72)",
          50: "rgba(219, 80, 0, 0.50)",
          32: "rgba(219, 80, 0, 0.32)",
          16: "rgba(219, 80, 0, 0.16)",
          12: "rgba(219, 80, 0, 0.12)",
          8: "rgba(219, 80, 0, 0.08)",
          4: "rgba(219, 80, 0, 0.04)",
        },

        light_orange: {
          100: "#FF7700",
          80: "rgba(255, 119, 0, 0.80)",
          72: "rgba(255, 119, 0, 0.72)",
          50: "rgba(255, 119, 0, 0.50)",
          32: "rgba(255, 119, 0, 0.32)",
          16: "rgba(255, 119, 0, 0.16)",
          12: "rgba(255, 119, 0, 0.12)",
          8: "rgba(255, 119, 0, 0.08)",
          4: "rgba(255, 119, 0, 0.04)",
        },

        green: {
          100: "#2FD520",
          80: "rgba(47, 213, 32, 0.80)",
          72: "rgba(47, 213, 32, 0.72)",
          50: "rgba(47, 213, 32, 0.50)",
          32: "rgba(47, 213, 32, 0.32)",
          16: "rgba(47, 213, 32, 0.16)",
          12: "rgba(47, 213, 32, 0.12)",
          8: "rgba(47, 213, 32, 0.08)",
          4: "rgba(47, 213, 32, 0.04)",
        },

        red: {
          100: "#ED3556",
          80: "rgba(237, 53, 86, 0.80)",
          72: "rgba(237, 53, 86, 0.72)",
          50: "rgba(237, 53, 86, 0.50)",
          32: "rgba(237, 53, 86, 0.32)",
          16: "rgba(237, 53, 86, 0.16)",
          12: "rgba(237, 53, 86, 0.12)",
          8: "rgba(237, 53, 86, 0.08)",
          4: "rgba(237, 53, 86, 0.04)",
        },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
