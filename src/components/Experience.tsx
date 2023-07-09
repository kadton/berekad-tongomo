import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  Chip,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { config } from "../config";

interface IProjects {
  name: string;
  icon: string;
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

function LinkTextIcon({ name, icon, link }: IProjects) {
  return (
    <IconButton
      color="info"
      aria-aria-label="open link"
      href={link}
      target="_blank"
    >
      <LaunchIcon />
      <Typography ml={1} variant="body2">
        {name}
      </Typography>
    </IconButton>
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
}: IWorkExperience) {
  return (
    <Grid item>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="subtitle1">
            {start} - {end}
          </Typography>
          <Typography variant="h6">
            {role} {"\u25CF"} {company}
          </Typography>
          <Typography variant="body2">{summary}</Typography>
          {projects.map((project) => (
            <LinkTextIcon {...project} key={project.name} />
          ))}
          {skills.map((skill) => (
            <Chip label={skill} color="secondary" />
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
}

const Experience = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4} mb={2}>
        <Typography variant="h4">Experience</Typography>
      </Box>
      <Grid container direction="column" spacing={2}>
        {config.experiences.map((experience) => (
          <WorkExperience {...experience} key={experience.summary} />
        ))}
      </Grid>
    </Container>
  );
};

export default Experience;
