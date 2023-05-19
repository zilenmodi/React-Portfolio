import React from "react";
import style from "./style.module.css";

const HorBack = () => {
  return (
    <>
      <div className={style.backgroundEffect}>
        <div className={style.backgroundEffect_hr}></div>
        <div className={style.backgroundEffect_hr}></div>
        <div className={style.backgroundEffect_hr}></div>
        <div className={style.backgroundEffect_hr}></div>
      </div>
    </>
  );
};

export default HorBack;
