import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Box, Grid, Typography } from "@mui/material";
import style from "./style.module.css";
import CareerCard from "../../../../components/CareerCard/CareerCard";

const ProgressCareer = (props) => {
  const { data } = props;
  const { milestones } = data;
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center", mb: 4 }}>
          {data.icon}
          <Typography
            variant="h5"
            fontWeight={700}
            className={style.progress_career_heading}
          >
            {data.title}
          </Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <div className={style.career_verline}></div>
          <Box sx={{ ml: 5 }}>
            <Grid container>
              {milestones.map((milestone) => {
                return (
                  <Grid
                    item
                    xs={12}
                    key={milestone.id}
                    className={style.career_verline_dot}
                  >
                    <CareerCard milestone={milestone} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProgressCareer;
