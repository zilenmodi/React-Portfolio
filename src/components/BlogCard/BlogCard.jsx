import React from "react";
import style from "./style.module.css";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

const BlogCard = (props) => {
  const { blog } = props;
  const { title, imageUrl } = blog;
  return (
    <>
      <Card
        sx={{ padding: "1rem", position: "relative" }}
        className={style.blog_card}
      >
        <Box sx={{ height: 250, overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="250"
            image={imageUrl}
            className={style.blogscard_img}
          />
        </Box>
        <div className={style.blogscard_date}>
          <Typography variant="h5">20</Typography>
          <Typography variant="h6">Feb</Typography>
        </div>
        <CardContent sx={{ paddingBottom: "0 !important" }}>
          <Typography variant="h5" className={style.blogscard_heading}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default BlogCard;
