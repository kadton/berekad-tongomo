import React from "react";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { config } from "../config";
import Social from "./Social";
import Typewriter from "typewriter-effect";

const TypewriterTypography = styled(Typography)`
  & .Typewriter {
    display: inline;
  }
`;

const styles = {
  heroSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    color: "text.primary",
    padding: "28px 0 28px 0",
    height: "100%",
    alignItems: "center",
  },
};

const HeroSection = () => {
  return (
    <Box sx={styles.heroSection}>
      <Container maxWidth="md">
        <Grid container direction="column">
          <Grid item>
            <Typography component="h1" variant="h1" my={2}>
              {config.fullName}
            </Typography>
            <Typography variant="h2" my={2}>
              {config.currentRole}
            </Typography>
            <TypewriterTypography variant="h3" my={2}>
              Currently working at{" "}
              <Typewriter
                options={{
                  strings: [config.currentCompany],
                  autoStart: true,
                  delay: 100,
                  pauseFor: 60000,
                  cursor: "|",
                  loop: true,
                }}
              />
            </TypewriterTypography>
          </Grid>
          <Social />
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
