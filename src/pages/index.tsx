import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeroSection from "../components/HeroSection";

// import { ThemeOptions } from '@mui/material/styles';

// export const themeOptions: ThemeOptions = {
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#281b35',
//       light: '#53485d',
//     },
//     secondary: {
//       main: 'rgba(45,212,191,0.12)',
//       contrastText: '#5eead4',
//     },
//     background: {
//       default: '#281b35',
//       paper: '#281b35',
//     },
//     text: {
//       primary: '#ffffff',
//       secondary: '#94a3b8',
//       disabled: '#94a3b8',
//     },
//   },
// };

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#281b35",
      light: "#53485d",
    },
    secondary: {
      main: "rgba(45,212,191,0.12)",
      contrastText: "#5eead4",
    },
    background: {
      default: "#281b35",
      paper: "#281b35",
    },
    text: {
      primary: "#ffffff",
      secondary: "#94a3b8",
      disabled: "#94a3b8",
    },
    info: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#b2b2b2",
    },
  },
});

const index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeroSection />
    </ThemeProvider>
  );
};

export default index;
