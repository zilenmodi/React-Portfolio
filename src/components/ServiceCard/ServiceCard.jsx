import React from "react";
import style from "./style.module.css";
import { Paper, Grid, Typography, Divider } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";

const ServiceCard = () => {
  return (
    <>
      <Paper
        elevation={0}
        sx={{ padding: "1.4rem", position: "relative" }}
        className={style.service_card}
      >
        <div className={style.service_card_hoverline}></div>
        <Grid container spacing={2}>
          <Grid item>
            <BrushIcon fontSize="large" className={style.service_card_icon} />
          </Grid>
          <Grid
            item
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Typography variant="h5">Web Design</Typography>
            <Divider />
            <Typography className={style.service_card_text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              tenetur ratione quod.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ServiceCard;
