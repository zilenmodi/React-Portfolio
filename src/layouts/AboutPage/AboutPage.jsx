import React from "react";
import style from "./style.module.css";
import SubtitleText from "../../components/SubtitleText/SubtitleText";
import HorBackContainer from "../../shared/containers/HorBackContainer/HorBackContainer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Pagination } from "@mui/material";
import AboutSec from "./AboutSec/AboutSec";
import ServicesSec from "./ServicesSec/ServicesSec";
import ReviewsSec from "./ReviewsSec/ReviewsSec";

const AboutPage = () => {
  return (
    <>
      <div className={style.aboutpage_container}>
        <HorBackContainer />
        <div className={style.aboutpage_section}>
          <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1, paddingBottom: "2rem" }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <AboutSec />
                </Grid>
                <Grid item xs={12}>
                  <ServicesSec />
                </Grid>
                <Grid item xs={12}>
                  <ReviewsSec />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
