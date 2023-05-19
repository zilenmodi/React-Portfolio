import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box } from "@mui/material";
import style from "./style.module.css";

const Icons = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <a href="#" className={style.homepage_icons}>
          <InstagramIcon fontSize="large" />
        </a>
        <a href="#" className={style.homepage_icons}>
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="#" className={style.homepage_icons}>
          <GitHubIcon fontSize="large" />
        </a>
      </Box>
    </>
  );
};

export default Icons;
