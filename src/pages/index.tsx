import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "../fonts.css";
import App from "../components/App";

export const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
    h3: {
      fontSize: "1.2rem",
      lineHeight: "1.5",
    },
    h4: {
      fontSize: "1rem",
    },
    subtitle1: {
      fontSize: "0.8rem",
    },
  },
  palette: {
    primary: {
      main: "#92e5a1",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#020204",
      paper: "#0202045",
    },
    text: {
      primary: "#92e5a1",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "#94a3b8",
    },
    info: {
      main: "#ffffff",
      light: "rgb(0 32 0)",
    },
  },
});

const index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

export default index;
