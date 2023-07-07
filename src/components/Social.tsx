import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid, IconButton, Link } from "@mui/material";
import { config } from "../config";

const socialItems = [
  { icon: GitHubIcon, url: config.social.github },
  { icon: LinkedInIcon, url: config.social.linkedin },
];

const Social = () => {
  return (
    <Grid container>
      {socialItems.map((item) => (
        <Grid item>
          <Link href={item.url} rel="noopener" target="_blank">
            <IconButton color="info">
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Social;
