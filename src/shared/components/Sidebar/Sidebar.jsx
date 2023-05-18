import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import { Avatar } from "@mui/material";
import Profile from "../../../assets/profileImage.jpg";
import Navbar from "./Navbar/Navbar";

const Sidebar = () => {
  return (
    <>
      <Box
        sx={{
          width: 320,
          height: "100vh",
        }}
        className={style.body}
      >
        <Avatar
          alt="Remy Sharp"
          src={Profile}
          sx={{
            width: "12rem",
            height: "12rem",
            border: "5px solid var(--first-color-lighter)",
          }}
        />
        <Divider
          component="div"
          sx={{
            width: "100%",
            margin: "3rem 0",
          }}
        />
        <Navbar />
        {/* Navbar */}
        {/* Footer */}
      </Box>
    </>
  );
};

export default Sidebar;
