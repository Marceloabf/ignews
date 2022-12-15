import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      white: "#FFFFFF",
      gray50: "#e1e1e6",
      gray300: "#a8a8b3",
      gray900: "#121214",

      cyan500: "#61dafb",
      yellow500: "#eba417",
    },
    media: {
      bp1: "(min-width: 640px)",
      bp2: "(min-width: 768px)",
      bp3: "(min-width: 1024px)",
    },
  },
});
