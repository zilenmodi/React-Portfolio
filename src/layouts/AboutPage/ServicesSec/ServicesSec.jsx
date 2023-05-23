import React from "react";
import SubtitleText from "../../../components/SubtitleText/SubtitleText";
import { Grid } from "@mui/material";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const ServicesSec = (props) => {
  const { services } = props;
  return (
    <>
      <SubtitleText text="SERVICES" />
      <Grid container spacing={3}>
        {services.map((service) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <ServiceCard service={service} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ServicesSec;
