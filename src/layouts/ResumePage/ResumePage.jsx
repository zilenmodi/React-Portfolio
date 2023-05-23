import React from "react";
import style from "./style.module.css";
import HorBackContainer from "../../shared/containers/HorBackContainer/HorBackContainer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import MySkillsSec from "./MySkillsSec/MySkillsSec";
import ResumeSec from "./ResumeSec/ResumeSec";

const ResumePage = () => {
  return (
    <>
      <div className={style.resumepage_container}>
        <HorBackContainer />
        <div className={style.resumepage_section}>
          <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1, paddingBottom: "2rem" }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <MySkillsSec />
                </Grid>
                <Grid item xs={12}>
                  <ResumeSec />
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ResumePage;
