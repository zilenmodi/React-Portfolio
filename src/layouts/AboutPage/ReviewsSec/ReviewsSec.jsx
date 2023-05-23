import React from "react";
import SubtitleText from "../../../components/SubtitleText/SubtitleText";
import { Grid } from "@mui/material";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";

const ReviewsSec = (props) => {
  const { reviews } = props;

  return (
    <>
      <SubtitleText text="REVIEWS" />
      <Grid container spacing={3}>
        {reviews.map((review) => {
          return (
            <Grid item xs={12} sm={6} key={review.id}>
              <ReviewCard review={review} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ReviewsSec;
