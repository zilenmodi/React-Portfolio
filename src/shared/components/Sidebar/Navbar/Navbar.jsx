import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

const Navbar = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <MenuList>
          <NavLink
            to="/home"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? `${style.active} ${style.navlink}`
                : style.navlink
            }
          >
            <MenuItem>
              <ListItemText>HOME</ListItemText>
            </MenuItem>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? `${style.active} ${style.navlink}`
                : style.navlink
            }
          >
            <MenuItem>
              <ListItemText>ABOUT</ListItemText>
            </MenuItem>
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? `${style.active} ${style.navlink}`
                : style.navlink
            }
          >
            <MenuItem>
              <ListItemText>RESUME</ListItemText>
            </MenuItem>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? `${style.active} ${style.navlink}`
                : style.navlink
            }
          >
            <MenuItem>
              <ListItemText>PROJECTS</ListItemText>
            </MenuItem>
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? `${style.active} ${style.navlink}`
                : style.navlink
            }
          >
            <MenuItem>
              <ListItemText>BLOGS</ListItemText>
            </MenuItem>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? `${style.active} ${style.navlink}`
                : style.navlink
            }
          >
            <MenuItem>
              <ListItemText>CONTACT</ListItemText>
            </MenuItem>
          </NavLink>
        </MenuList>
      </Box>
    </>
  );
};

export default Navbar;
