import { Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";

const SubtitleText = (props) => {
  const { text } = props;
  return (
    <>
      <Typography
        letterSpacing={3}
        variant="h4"
        className={style.subtitle_text}
      >
        {text}
        <Typography
          variant="h1"
          letterSpacing={3}
          className={style.subtitle_text_light}
        >
          {text}
        </Typography>
      </Typography>
    </>
  );
};

export default SubtitleText;
