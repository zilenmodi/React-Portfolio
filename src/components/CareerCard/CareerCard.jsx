import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";

const CareerCard = (props) => {
  const { milestone } = props;
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">{milestone.duration}</Typography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={"1.3rem"}
            className={style.career_card_heading}
            marginBottom={1}
          >
            {milestone.profileName}
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize={"1.1rem"}
            fontWeight={600}
            marginBottom={1}
          >
            {milestone.organisation}
          </Typography>
          <Typography variant="subtitle1">{milestone.description}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CareerCard;
