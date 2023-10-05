import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
  styled,
  Hidden,
} from "@mui/material";
import { config } from "../config";

interface IPlatform {
  badge: IBadge;
  link: string;
}

interface IBadgeImage {
  alt: string;
  src: string;
}

interface IBadge {
  href: string;
  img: IBadgeImage;
}

interface IProject {
  name: string;
  summary: string;
  platforms: IPlatform[];
  skills: string[];
}

function Project({ name, platforms, summary, skills }: IProject) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const badgeStyle = {
    transition: "transform 0.3s ease-in-out",
    transform: isHover ? "scale(1.05)" : "unset",
  };

  return (
    <Grid item style={{ paddingLeft: 0 }}>
      <StyledCard variant="outlined">
        <Hidden smDown>
          <Box flex={1} flexBasis="25%">
            {platforms.map((platform) => (
              <a href={platform.badge.href} target="_blank">
                <img
                  style={badgeStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  alt={platform.badge.img.alt}
                  src={platform.badge.img.src}
                  width={150}
                />
              </a>
            ))}
          </Box>
        </Hidden>
        <Box flex={1} flexBasis="85%">
          <CardContent className="card-content">
            <Typography variant="h4" className="mb company-role">
              {name}
            </Typography>
            <Typography variant="body2" className="mb summary">
              {summary}
            </Typography>
            <Hidden smUp>
              <Box>
                {platforms.map((platform) => (
                  <a href={platform.badge.href} target="_blank">
                    <img
                      style={badgeStyle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      alt={platform.badge.img.alt}
                      src={platform.badge.img.src}
                      width={150}
                    />
                  </a>
                ))}
              </Box>
              {skills.map((skill) => (
                <Chip
                  label={skill}
                  color="primary"
                  variant="outlined"
                  className="skills mt"
                />
              ))}
            </Hidden>
            <Hidden smDown>
              {skills.map((skill) => (
                <Chip
                  label={skill}
                  color="primary"
                  variant="outlined"
                  className="skills mt"
                />
              ))}
            </Hidden>
          </CardContent>
        </Box>
      </StyledCard>
    </Grid>
  );
}

const StyledCard = styled(Card)`
  display: flex;
  padding: 12px;
  padding-bottom: 0px;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.palette.info.light};

    .company-role {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  .company-role {
    color: ${({ theme }) => theme.palette.secondary.main};
    transition: color 0.3s ease;
  }

  .clickable-wrapper {
    text-decoration: none;
  }

  .skills {
    margin-right: 5px;
    cursor: inherit;
  }

  .card-content {
    padding-top: 0;
  }

  .mb {
    margin-bottom: 0.5em;
  }

  .mt {
    margin-top: 0.5em;
  }

  .summary {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

const PersonalProjects = () => {
  return (
    <Box>
      <Container>
        <Box mt={4} mb={2}>
          <Typography variant="h2">Personal Project</Typography>
        </Box>
        <Grid container direction="column" spacing={2}>
          {config.personalProjects.map((project) => (
            <Project {...project} key={project.summary} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PersonalProjects;
