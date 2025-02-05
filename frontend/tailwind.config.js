/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
     extend: {
       keyframes: {
         scroll: {  // Define the scroll keyframe name
           '0%': { transform: 'translateX(0)' },
           '100%': { transform: 'translateX(-50%)' },
         },
         shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
         },
       },
       animation: {
         scroll: 'scroll 20s linear infinite',
         shine: 'shine 5s linear infinite',
       }
     }
   },
   plugins: []
};