/** @type {import('tailwindcss').Config} */
//import flowbitePlugin from "flowbite/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
