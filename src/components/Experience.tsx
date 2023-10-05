import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  styled,
  Hidden,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { config } from "../config";

interface IProjects {
  name: string;
  link: string;
}

interface IWorkExperience {
  role: string;
  company: string;
  link: string;
  start: string;
  end: string;
  summary: string;
  skills: string[];
  projects: IProjects[];
}

function LinkTextIcon({ name, link }: IProjects) {
  return (
    <Button
      color="info"
      aria-aria-label="open link"
      href={link}
      target="_blank"
      startIcon={<LaunchIcon />}
    >
      <Typography ml={1} variant="body2">
        {name}
      </Typography>
    </Button>
  );
}

function WorkExperience({
  start,
  end,
  role,
  company,
  summary,
  projects,
  skills,
  link,
}: IWorkExperience) {
  return (
    <Grid item style={{ paddingLeft: 0 }}>
      <a
        style={{ textDecoration: "none" }}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledCard variant="outlined">
          <Hidden smDown>
            <Box flex={1} flexBasis="25%">
              <Typography variant="subtitle1">
                {start} - {end}
              </Typography>
            </Box>
          </Hidden>
          <Box flex={1} flexBasis="85%">
            <CardContent className="card-content">
              <Hidden smUp>
                <Typography variant="subtitle1" className="mb">
                  {start} - {end}
                </Typography>
              </Hidden>
              <Typography variant="h4" className="mb company-role">
                {role} {"\u25CF"} {company}
              </Typography>
              <Typography variant="body2" className="mb summary">
                {summary}
              </Typography>
              {projects.map((project) => (
                <Box mt={1} mb={1}>
                  <LinkTextIcon {...project} key={project.name} />
                </Box>
              ))}
              <Hidden smUp>
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
      </a>
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

const Experience = () => {
  return (
    <Box>
      <Container>
        <Box mt={4} mb={2}>
          <Typography variant="h2">Experience</Typography>
        </Box>
        <Grid container direction="column" spacing={2}>
          {config.experiences.map((experience) => (
            <WorkExperience {...experience} key={experience.summary} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
