import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Container maxWidth="md">
      <Box py={3} borderTop={1} borderColor="divider">
        <Typography variant="body2" color="text.secondary">
          Built with React, GatsbyJS, and Material-UI V5
        </Typography>
      </Box>
    </Container>
  );
};
