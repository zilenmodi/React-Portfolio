import React from "react";
import style from "./style.module.css";
import SubtitleText from "../../../components/SubtitleText/SubtitleText";
import { Grid } from "@mui/material";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";

const AboutSec = () => {
  return (
    <>
      <SubtitleText text="ABOUT ME" />
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <ProfileCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProfileDetails />
        </Grid>
      </Grid>
    </>
  );
};

export default AboutSec;
