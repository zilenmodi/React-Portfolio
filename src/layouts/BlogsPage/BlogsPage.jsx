import React from "react";
import SubtitleText from "../../components/SubtitleText/SubtitleText";
import HorBackContainer from "../../shared/containers/HorBackContainer/HorBackContainer";
import style from "./style.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Pagination } from "@mui/material";
import BlogCard from "../../components/BlogCard/BlogCard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useContext } from "react";
import { AppThemeContext } from "../../store/Store";

const BlogsPage = (props) => {
  const { blogs } = props;
  const { lightTheme } = useContext(AppThemeContext);
  const darkTheme = createTheme({
    palette: {
      mode: lightTheme ? "light" : "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div className={style.blogspage_container}>
          <HorBackContainer />
          <div className={style.blogspage_section}>
            <Container maxWidth="lg">
              <SubtitleText text="RECENT BLOGS" />
              <Box sx={{ flexGrow: 1, paddingBottom: "2rem" }}>
                <Grid container spacing={3}>
                  {blogs.map((blog) => {
                    return (
                      <Grid item xs={12} sm={6} key={blog.id}>
                        <BlogCard blog={blog} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
              <Pagination count={3} size="large" />
            </Container>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default BlogsPage;
