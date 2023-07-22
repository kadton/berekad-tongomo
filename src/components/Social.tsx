import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid, IconButton, Link, styled } from "@mui/material";
import { config } from "../config";

const socialItems = [
  { icon: GitHubIcon, url: config.social.github },
  { icon: LinkedInIcon, url: config.social.linkedin },
];

const StyledIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.palette.text.secondary};
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.palette.info.main};
  }
`;

const Social = () => {
  return (
    <Grid container my={2}>
      {socialItems.map((item) => (
        <Grid item key={item.url}>
          <Link href={item.url} rel="noopener" target="_blank">
            <StyledIconButton>
              <item.icon fontSize="large" />
            </StyledIconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Social;
