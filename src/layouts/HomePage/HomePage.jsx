import { Box, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import ParticleBackground from "react-particle-backgrounds";
import { settings } from "./settings";
import Icons from "./Icons/Icons";
import HorBackContainer from "../../shared/containers/HorBackContainer/HorBackContainer";

const HomePage = (props) => {
  const { homepageLabels } = props;
  const { heading, headingHighlighted, headingSecondary } = homepageLabels;
  return (
    <>
      <div className={style.homepage_container}>
        <div className={style.background_particles}>
          <ParticleBackground settings={settings} />
        </div>
        <HorBackContainer />
        <div className={style.homepage_section}>
          <Typography
            variant="h2"
            className={style.homepage_header_text}
            sx={{ mb: 4 }}
          >
            {heading}
            <span className={style.homepage_header_text_height}>
              {headingHighlighted}
            </span>
          </Typography>
          <Box className={style.homepage_header_text_secondary} sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ opacity: 0.7 }}>
              {headingSecondary}
            </Typography>
          </Box>
          <Icons />
        </div>
      </div>
    </>
  );
};

export default HomePage;
