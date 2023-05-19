import React, { useContext } from "react";
import HomePage from "../../components/HomePage/HomePage";
import { selectHomePageLabels } from "./HomePageContainer.selectors";
import { Context } from "../../store/Store";

const HomePageContainer = () => {
  const { state } = useContext(Context);
  const homepageLabels = selectHomePageLabels(state);
  return (
    <>
      <HomePage homepageLabels={homepageLabels} />
    </>
  );
};

export default HomePageContainer;
