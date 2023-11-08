/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts',
    './projects/**/*.{html,ts}',
    './node_modules/david-ui-angular/**/*.{html,ts,js,mjs}',
  ],
  theme: {
    extend: {},
  },
}

