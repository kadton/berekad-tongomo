import React from "react";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { config } from "../config";
import Social from "./Social";

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
    paddingTop: "",
    height: "100%",
    alignItems: "center",
  },
};

interface IHeroSection {
  paddingTop?: string;
}

const HeroSection = ({ paddingTop = "38px" }: IHeroSection) => {
  styles.heroSection.paddingTop = paddingTop;
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
            <Typography variant="h3" my={2}>
              Currently working at {config.currentCompany}
            </Typography>
          </Grid>
          <Social />
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
