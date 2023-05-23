import { ToggleOnOutlined } from "@mui/icons-material";
import React from "react";
import style from "./style.module.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggleButtons = (props) => {
  const { setLightTheme, lightTheme } = props;
  console.log(lightTheme);
  return (
    <>
      <div className={style.toggle_btn_div}>
        <div
          className={style.toggle_icon_btn}
          onClick={() => setLightTheme((prev) => !prev)}
        >
          {lightTheme ? (
            <DarkModeIcon className={style.toggle_icon} />
          ) : (
            <WbSunnyIcon className={style.toggle_icon} />
          )}
        </div>
      </div>
    </>
  );
};

export default ThemeToggleButtons;
