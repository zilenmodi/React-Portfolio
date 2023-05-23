import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { firstColor, firstColorLight } from "../../style.module.css";
import style from "./style.module.css";

const SkillProgress = (props) => {
  const { skill } = props;
  const theme = createTheme({
    palette: {
      primary: {
        main: firstColor,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "95%" }}>
          <Typography variant="subtitle1" fontWeight={700} fontSize={"1.1rem"}>
            {skill.skill}
          </Typography>
          <Box>
            <Typography variant="subtitle1" fontSize={"1.1rem"}>
              {skill.level} %
            </Typography>
            <Box width={"100%"}>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                className={style.progress_bar}
              />
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default SkillProgress;
