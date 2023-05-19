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

const Navbar = (props) => {
  const { sidebarOptions } = props;
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <MenuList>
          {sidebarOptions?.map((sidebarOption) => {
            return (
              <NavLink
                key={sidebarOption.name}
                to={sidebarOption.url}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? `${style.active} ${style.navlink}`
                    : style.navlink
                }
              >
                <MenuItem>
                  <ListItemText>{sidebarOption.name}</ListItemText>
                </MenuItem>
              </NavLink>
            );
          })}
        </MenuList>
      </Box>
    </>
  );
};

export default Navbar;
