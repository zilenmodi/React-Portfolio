import React from "react";
import style from "./style.module.css";
import SubtitleText from "../../components/SubtitleText/SubtitleText";
import HorBackContainer from "../../shared/containers/HorBackContainer/HorBackContainer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Pagination } from "@mui/material";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectsPage = (props) => {
    const {projects} = props;
  return (
    <>
      <div className={style.projectspage_container}>
        <HorBackContainer />
        <div className={style.projectspage_section}>
          <Container maxWidth="lg">
            <SubtitleText text="PROJECTS" />
            <Box sx={{ flexGrow: 1, paddingBottom: "2rem" }}>
              <Grid container spacing={3}>
                {projects.map((project) => {
                    return (
                      <Grid key={project.id} item xs={12} sm={6} md={4}>
                        <ProjectCard project={project} />
                      </Grid>
                    );
                })}
              </Grid>
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
