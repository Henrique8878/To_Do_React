/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        "blue-dark":"#1e6f9f",
        "blue":"#4ea8de",
        "purple-dark":"#5e60ce",
        "purple":"#8284fa",
        "danger":"e25858",
        "GRAY-700":"#0D0D0D",
        "GRAY-600":"#1A1A1A",
        "GRAY-500":"#262626",
        "GRAY-400":"#333333",
        "GRAY-300":"#808080",
        "GRAY-200":"#D9D9D9",
        "GRAY-100":"#F2F2F2"
      },
      textColor:{
        "blue-dark":"#1e6f9f",
        "blue":"#4ea8de",
        "purple-dark":"#5e60ce",
        "purple":"#8284fa",
        "danger":"e25858",
        "GRAY-700":"#0D0D0D",
        "GRAY-600":"#1A1A1A",
        "GRAY-500":"#262626",
        "GRAY-400":"#333333",
        "GRAY-300":"#808080",
        "GRAY-200":"#D9D9D9",
        "GRAY-100":"#F2F2F2"
      },
      width:{
        "widthContainers":"46.125rem"
      },
        borderColor:{
          "blue-dark":"#1e6f9f",
        "blue":"#4ea8de",
        "purple-dark":"#5e60ce",
        "purple":"#8284fa",
        "danger":"e25858",
        "GRAY-700":"#0D0D0D",
        "GRAY-600":"#1A1A1A",
        "GRAY-500":"#262626",
        "GRAY-400":"#333333",
        "GRAY-300":"#808080",
        "GRAY-200":"#D9D9D9",
        "GRAY-100":"#F2F2F2"
        }

    },
  },
  plugins: [],
}

