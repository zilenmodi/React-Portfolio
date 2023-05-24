import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import { Avatar } from "@mui/material";
import Profile from "../../../assets/profileImage.png";
import Navbar from "./Navbar/Navbar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Sidebar = (props, ref) => {
  const { sidebarLabels } = props;
  const { sidebarOptions, siderbarFooter } = sidebarLabels;

  const handleBackBtnClick = () => {
    ref.current.style.transform = "translateX(-300px)";
  };

  return (
    <>
      <Box
        ref={ref}
        sx={{
          width: 320,
          height: "100vh",
        }}
        className={style.body}
      >
        <div className={style.back_btn_icon} onClick={handleBackBtnClick}>
          <ArrowBackIosIcon />
        </div>
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
        <Navbar sidebarOptions={sidebarOptions} />
        <Typography className={style.footer}>{siderbarFooter}</Typography>
      </Box>
    </>
  );
};

export default React.forwardRef(Sidebar);
