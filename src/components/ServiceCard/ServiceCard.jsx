import React from "react";
import style from "./style.module.css";
import { Paper, Grid, Typography, Divider } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";

const ServiceCard = (props) => {
  const { service } = props;
  return (
    <>
      <Paper
        elevation={0}
        sx={{ padding: "1.4rem", position: "relative" }}
        className={style.service_card}
      >
        <div className={style.service_card_hoverline}></div>
        <Grid container spacing={2}>
          <Grid item className={style.service_card_icon}>
            {service.icon}
          </Grid>
          <Grid
            item
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Typography variant="h5">{service.title}</Typography>
            <Divider />
            <Typography className={style.service_card_text}>
              {service.text}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ServiceCard;
