import { Grid } from "@mui/material";
import React from "react";
import SubtitleText from "../../../components/SubtitleText/SubtitleText";
import ProgressCareer from "./ProgressCareer/ProgressCareer";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenter from "@mui/icons-material/BusinessCenter";

const ResumeSec = () => {
  const experienceData = {
    title: "Working Experience",
    icon: <BusinessCenter fontSize="large" />,
    milestones: [
      {
        id: 1,
        duration: "Feb 2023 - Present",
        profileName: "React.JS Trainee",
        organisation: "Simform Solutions",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
      {
        id: 2,
        duration: "Jun 2022 - Sep 2022",
        profileName: "React.JS Trainee",
        organisation: "Zylicon Hackdev Technologies",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
    ],
  };
  const studyData = {
    title: "Educational Qualifications",
    icon: <SchoolIcon fontSize="large" />,
    milestones: [
      {
        id: 1,
        duration: "Jul 2019 - May 2023",
        profileName: "Bachelor of Engineering",
        organisation: "Vishwakarma GEC",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
      {
        id: 2,
        duration: "Jun 2017 - Mar 2019",
        profileName: "12th Science Board",
        organisation: "Agasti Education",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
      {
        id: 3,
        duration: "Jun 2016 - Mar 2017",
        profileName: "10th SSC Board",
        organisation: "Sharvan Vidhya Bhavan",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      },
    ],
  };
  return (
    <>
      <SubtitleText text="RESUME" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ProgressCareer data={experienceData} />
        </Grid>
        <Grid item xs={12}>
          <ProgressCareer data={studyData} />
        </Grid>
      </Grid>
    </>
  );
};

export default ResumeSec;
