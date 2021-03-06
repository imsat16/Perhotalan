module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth:{
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
       '3': '3px',
        '4': '4px',
        '6': '6px',
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
      borderWidth: ["hover", "focus"],
      borderRadius: ['hover', 'focus'],
    },
  },
  plugins: [],
};
