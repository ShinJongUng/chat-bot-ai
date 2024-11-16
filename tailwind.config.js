/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    function ({ addUtilities }) {
      const newUtilities = {
        /* WebKit 브라우저에서 스크롤바 크기 설정 */
        ".custom-scrollbar::-webkit-scrollbar": {
          width: "4px",
          height: "8px", // 가로 스크롤바도 크기 조정
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          "background-color": "#f1f1f1",
          "border-radius": "40px",
        },
        ".custom-scrollbar::-webkit-scrollbar-track": {
          background: "#fff", // 트랙 배경 색상
        },
        /* Firefox에서 스크롤바 크기 설정 */
        ".custom-scrollbar": {
          "scrollbar-width": "thin", // "thin", "auto", "none"
          "scrollbar-color": "#f1f1f1", // thumb 색상, track 색상
        },

        ".chat-bar::before": {
          position: "absolute",
          content: '""',
          top: "-36px",
          left: 0,
          right: 0,
          height: "36px" /* 패딩 높이 */,
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 1) 65.1%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]); // 반응형 및 hover 상태에도 적용
    },
  ],
};
