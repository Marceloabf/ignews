import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "$gray900",
    color: "$gray100",
  },

  button: {
    cursor: "pointer",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});
