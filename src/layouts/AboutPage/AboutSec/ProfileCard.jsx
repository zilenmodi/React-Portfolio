import { Box } from "@mui/material";
import React from "react";
import ProfileCardImage from "../../../../src/assets/ProfileCardImage.jpg";
import style from "./style.module.css";

const ProfileCard = () => {
  return (
    <>
      <Box sx={{ width: "100%", position: "relative" }}>
        <img src={ProfileCardImage} className={style.profile_card_img} />
        <div className={style.profile_card_span_left}></div>
        <div className={style.profile_card_span_right}></div>
      </Box>
    </>
  );
};

export default ProfileCard;
