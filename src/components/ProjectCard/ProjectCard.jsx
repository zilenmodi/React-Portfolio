import React from "react";
import style from "./style.module.css";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

const ProjectCard = (props) => {
  const { project } = props;
  return (
    <>
      <Card
        sx={{
          padding: "1rem",
          position: "relative",
          background: "transperent",
        }}
      >
        <div className={style.parent_div_hover}>
          <Box sx={{ height: 250, overflow: "hidden", position: "relative" }}>
            <CardMedia
              component="img"
              height="250"
              image={project.imageUrl}
            ></CardMedia>
            <div className={style.hoverdiv}></div>
            <div className={style.lconhoverdiv}>
              <div className={style.iconhover_btn}>
                <LinkIcon fontSize="large" color="white" />
              </div>
            </div>
          </Box>
        </div>

        <CardContent sx={{ paddingBottom: "0 !important" }}>
          <Typography variant="h5" className={style.projectcard_heading}>
            {project.title}
          </Typography>
          <Typography variant="subtitle1" className={style.projectcard_text}>
            {project.headingText}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
