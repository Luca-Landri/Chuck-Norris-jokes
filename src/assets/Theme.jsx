import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

const theme = {
  colors: {
    light: "#fff",
    dark: "#000",
    primary: "#780116",
    secondary: "#692C00",
    background: "#D17D40",
  },

  fontSizes: {
    h1: "90px",
    h2: "50px",
    mini: "30px",
  },
};

const Theme = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;