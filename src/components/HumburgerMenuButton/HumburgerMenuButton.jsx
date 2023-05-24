import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import style from "./style.module.css";

const HumburgerMenuButton = (props, ref) => {
  const handleMenuBtnClick = () => {
    ref.current.style.transform = "translateX(0px)";
  };
  return (
    <>
      <div className={style.menu_btn_div}>
        <div className={style.menu_icon_btn} onClick={handleMenuBtnClick}>
          <MenuIcon className={style.menu_icon} />
        </div>
      </div>
    </>
  );
};

export default React.forwardRef(HumburgerMenuButton);
