import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";

const StyledLink = styled("a")`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.secondary.main};
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const Footer = () => {
  return (
    <Container maxWidth="md">
      <Box py={3} borderTop={1} borderColor="divider">
        <Typography variant="body2" color="text.secondary">
          Built with{" "}
          <StyledLink href="" target="_blank" rel="noopener noreferrer">
            React
          </StyledLink>
          ,{" "}
          <StyledLink href="" target="_blank" rel="noopener noreferrer">
            GatsbyJS
          </StyledLink>
          , and{" "}
          <StyledLink href="" target="_blank" rel="noopener noreferrer">
            Material-UI V5
          </StyledLink>
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
