module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'terra-yellow': '#ffd73d',
            'terra-blue': '#172852',
            'shadow': '#7C705C',
            'coffee': '#362E2B',
            'purple': '#463D3D',
            'chestnut': '#96795D',
            'cream': '#DBB886',
            'green': '#978C6B',
            'umber': '#5F574A',
          },
        fontFamily: {
            prata: ["Prata", "serif"],
            metropolis: ["Metropolis", "sans-serif"],
        },
        backgroundImage: {
            'mint': "url('../images/mint-background.png')",
        },
    },
  },
  plugins: [],
}