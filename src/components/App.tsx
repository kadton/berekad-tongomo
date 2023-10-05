import React, { CSSProperties, useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Experience from "./Experience";
import Footer from "./Footer";
import { Box, Grid, Hidden } from "@mui/material";
import Loader from "./Loader";
import PersonalProjects from "./PersonalProjects";

const sticky: CSSProperties = {
  position: "sticky",
  top: 0,
  maxHeight: "100vh",
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 2700);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
              <PersonalProjects />
              <Footer />
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default App;
