import React, { useContext } from "react";
import AboutPage from "../../layouts/AboutPage/AboutPage";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import { Context } from "../../store/Store";
import { selectAboutPageLabels } from "./AboutPageContainer.selectors";

const AboutPageContainer = () => {
  const { state } = useContext(Context);
  const aboutpageLabels = selectAboutPageLabels(state);
  const reviews = [
    {
      id: 1,
      reviewMsg:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae reprehenderit corporis tempora temporibus quaerat iure.",
      reviewerName: "Vivek Patel",
      designation: "Client",
    },
    {
      id: 2,
      reviewMsg:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae reprehenderit corporis tempora temporibus quaerat iure.",
      reviewerName: "Om Hajariwala",
      designation: "Friend",
    },
  ];
  const services = [
    {
      id: 1,
      title: "Web Design",
      icon: <BrushIcon fontSize="large" />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      id: 2,
      title: "Web Development",
      icon: <CodeIcon fontSize="large" />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
    {
      id: 3,
      title: "Mobile Application",
      icon: <AppShortcutIcon fontSize="large" />,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.",
    },
  ];
  return (
    <>
      <AboutPage
        reviews={reviews}
        services={services}
        aboutpageLabels={aboutpageLabels}
      />
    </>
  );
};

export default AboutPageContainer;
