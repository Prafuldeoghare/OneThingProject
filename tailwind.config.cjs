
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 17))' },
        },
      },
    },
  },
  plugins: [],
};
