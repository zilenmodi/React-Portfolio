import { Box, Typography, Button } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import Resume from "../../../assets/Zilen_Resume.pdf";

const ProfileDetails = (props) => {
  const { aboutSec } = props;
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <Typography variant="h4">
          {aboutSec.heading}{" "}
          <span className={style.heading_span}>{aboutSec.headingSpan}</span>
        </Typography>
        <Typography variant="subtitle1">{aboutSec.headingText}</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Typography
            variant="subtitle1"
            className={style.profile_details_text}
          >
            {aboutSec.fullnameLabel}
            <span className={style.profile_details_text_span}>
              {aboutSec.fullname}
            </span>
          </Typography>
          <Typography
            variant="subtitle1"
            className={style.profile_details_text}
          >
            {aboutSec.ageLabel}
            <span className={style.profile_details_text_span}>
              {aboutSec.age}
            </span>
          </Typography>
          <Typography
            variant="subtitle1"
            className={style.profile_details_text}
          >
            {aboutSec.nationLabel}
            <span className={style.profile_details_text_span}>
              {aboutSec.nation}
            </span>
          </Typography>
          <Typography
            variant="subtitle1"
            className={style.profile_details_text}
          >
            {aboutSec.langLabel}
            <span className={style.profile_details_text_span}>
              {aboutSec.lang}
            </span>
          </Typography>
          <Typography
            variant="subtitle1"
            className={style.profile_details_text}
          >
            {aboutSec.addressLabel}
            <span className={style.profile_details_text_span}>
              {aboutSec.address}
            </span>
          </Typography>
          <Typography
            variant="subtitle1"
            className={style.profile_details_text}
          >
            {aboutSec.freelanceLabel}
            <span className={style.profile_details_text_span}>
              {aboutSec.freelance}
            </span>
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
