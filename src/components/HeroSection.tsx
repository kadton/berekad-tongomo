import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { config } from "../config";
import Social from "./Social";

const styles = {
  heroSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    color: "text.primary",
    padding: "28px",
  },
};

const HeroSection = () => {
  return (
    <Box sx={styles.heroSection}>
      <Container maxWidth="md">
        <Grid container direction="column">
          <Grid item>
            <Typography component="h1" variant="h3">
              {config.fullName}
            </Typography>
            <Typography variant="h4">{config.currentRole}</Typography>
            <Typography variant="h5">
              Currently working at {config.currentCompany}
            </Typography>
          </Grid>
          {/* <Grid item> */}
          <Social />
          {/* </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
