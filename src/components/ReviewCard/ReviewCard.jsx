import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";

const ReviewCard = (props) => {
  const { review } = props;
  return (
    <>
      <Box>
        <Paper
          elevation={0}
          sx={{ padding: "2rem", mb: 3 }}
          className={style.review_card}
        >
          <Typography variant="subtitle1" className={style.review_card_text}>
            {review.reviewMsg}
          </Typography>
          <div className={style.review_verline}></div>
        </Paper>
        <Box sx={{ marginLeft: "1.5rem" }}>
          <Typography variant="h6">{review.reviewerName}</Typography>
          <Typography variant="subtitle1">{review.designation}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ReviewCard;
