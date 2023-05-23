import { Box, Typography, Button } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import Resume from "../../../assets/Zilen_Resume.pdf";

const ProfileDetails = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <Typography variant="h4">
          I am <span className={style.heading_span}>Zilen Modi</span>
        </Typography>
        <Typography variant="subtitle1">
          I am a frontend web developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Typography
            variant="subtitle1"
            className={style.profile_details_text}
          >
            Full Name:{" "}
            <span className={style.profile_details_text_span}>
              Zilen P. Modi
            </span>
          </Typography>
          <Typography
            variant="subtitle1"
            className={style.profile_details_text}
          >
            Age:{" "}
            <span className={style.profile_details_text_span}>22 Years</span>
          </Typography>
          <Typography
            variant="subtitle1"
            className={style.profile_details_text}
          >
            Nationality:{" "}
            <span className={style.profile_details_text_span}>Indian</span>
          </Typography>
          <Typography
            variant="subtitle1"
            className={style.profile_details_text}
          >
            Languages:{" "}
            <span className={style.profile_details_text_span}>
              Hindi, English
            </span>
          </Typography>
          <Typography
            variant="subtitle1"
            className={style.profile_details_text}
          >
            Address:{" "}
            <span className={style.profile_details_text_span}>
              Ahemdabad, Gujarat, India
            </span>
          </Typography>
          <Typography
            variant="subtitle1"
            className={style.profile_details_text}
          >
            Freelance:{" "}
            <span className={style.profile_details_text_span}>None</span>
          </Typography>
        </Box>
      </Box>
      <Button
        href={Resume}
        variant="contained"
        size="large"
        target="_blank"
        className={style.submit_btn}
        download={true}
      >
        DOWNLOAD CV
      </Button>
    </>
  );
};

export default ProfileDetails;
