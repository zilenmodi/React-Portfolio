import { Box, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import ParticleBackground from "react-particle-backgrounds";
import { settings } from "./settings";
import Icons from "./Icons/Icons";

const HomePage = () => {
  return (
    <>
      <div className={style.homepage_container}>
        <div className={style.background_particles}>
          <ParticleBackground settings={settings} />
        </div>
        <div className={style.backgroundEffect}>
          <div className={style.backgroundEffect_hr}></div>
          <div className={style.backgroundEffect_hr}></div>
          <div className={style.backgroundEffect_hr}></div>
          <div className={style.backgroundEffect_hr}></div>
        </div>
        <div className={style.homepage_section}>
          <Typography
            variant="h2"
            className={style.homepage_header_text}
            sx={{ mb: 4 }}
          >
            Hello, I am{" "}
            <span className={style.homepage_header_text_height}>
              Zilen Modi
            </span>
          </Typography>
          <Box className={style.homepage_header_text_secondary} sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ opacity: 0.7 }}>
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </Typography>
          </Box>
          <Icons />
        </div>
      </div>
    </>
  );
};

export default HomePage;
