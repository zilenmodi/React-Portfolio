import { Grid } from "@mui/material";
import React from "react";
import SkillProgress from "../../../components/SkillProgress/SkillProgress";
import SubtitleText from "../../../components/SubtitleText/SubtitleText";

const MySkillsSec = () => {
  const skills = [
    {
      id: 1,
      skill: "HTML5",
      level: 80,
    },
    {
      id: 2,
      skill: "CSS3",
      level: 85,
    },
    {
      id: 3,
      skill: "Javascript",
      level: 77,
    },
    {
      id: 4,
      skill: "React.JS",
      level: 90,
    },
    {
      id: 5,
      skill: "Node.JS",
      level: 65,
    },
    {
      id: 6,
      skill: "Redux",
      level: 72,
    },
  ];
  return (
    <>
      <SubtitleText text="MY SKILLS" />
      <Grid container spacing={4}>
        {skills.map((skill) => {
          return (
            <Grid item xs={12} sm={6} key={skill.id}>
              <SkillProgress skill={skill} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default MySkillsSec;
