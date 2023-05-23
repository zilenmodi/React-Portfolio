import React, { useContext } from "react";
import { AppThemeContext } from "../../../store/Store";
import style from "./style.module.css";

const HorBack = () => {
  const { lightTheme } = useContext(AppThemeContext);
  return (
    <>
      <div className={style.backgroundEffect}>
        <div
          className={
            lightTheme
              ? style.backgroundEffect_hr
              : style.backgroundEffect_hr_dark
          }
        ></div>
        <div
          className={
            lightTheme
              ? style.backgroundEffect_hr
              : style.backgroundEffect_hr_dark
          }
        ></div>
        <div
          className={
            lightTheme
              ? style.backgroundEffect_hr
              : style.backgroundEffect_hr_dark
          }
        ></div>
        <div
          className={
            lightTheme
              ? style.backgroundEffect_hr
              : style.backgroundEffect_hr_dark
          }
        ></div>
      </div>
    </>
  );
};

export default HorBack;
