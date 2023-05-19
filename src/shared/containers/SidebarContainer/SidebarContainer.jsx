import React, { useContext } from "react";
import { Context } from "../../../store/Store";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import { selectSidebarLabels } from "./SidebarContainer.selectors";

const SidebarContainer = () => {
  const { state } = useContext(Context);
  const sidebarLabels = selectSidebarLabels(state);

  return (
    <>
      <Sidebar sidebarLabels={sidebarLabels} />
    </>
  );
};

export default SidebarContainer;
