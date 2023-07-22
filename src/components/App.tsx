import React, { CSSProperties } from "react";
import HeroSection from "./HeroSection";
import Experience from "./Experience";
import Footer from "./Footer";
import { Box, Grid, Hidden } from "@mui/material";

const sticky: CSSProperties = {
  position: "sticky",
  top: 0,
  maxHeight: "100vh",
};

const App = () => {
  return (
    <Box mx={2}>
      <Grid container style={{ letterSpacing: "1px" }}>
        <Hidden mdUp>
          <Grid item xs={12}>
            <HeroSection />
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item md={6} style={sticky}>
            <HeroSection paddingTop="0" />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          <Experience />
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
