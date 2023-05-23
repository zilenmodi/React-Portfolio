import React from "react";
import SubtitleText from "../../../components/SubtitleText/SubtitleText";
import { Grid } from "@mui/material";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const ServicesSec = () => {
  return (
    <>
      <SubtitleText text="SERVICES" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard />
        </Grid>
      </Grid>
    </>
  );
};

export default ServicesSec;
