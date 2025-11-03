module.exports = {
  content: [
    "./**/*.{html,md,markdown}",
    "./_includes/**/*.{html,md,markdown}",
    "./_layouts/**/*.{html,md,markdown}",
    "./_posts/**/*.{html,md,markdown}",
    "./_songs/**/*.{html,md,markdown}",
    "!./_site/**/*",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
