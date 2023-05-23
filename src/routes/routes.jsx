import AboutPageContainer from "../containers/AboutPageContainer/AboutPageContainer";
import BlogsPageContainer from "../containers/BlogsPageContainer/BlogsPageContainer";
import ContactPageContainer from "../containers/ContactPageContainer/ContactPageContainer";
import HomePageContainer from "../containers/HomePageContainer/HomePageContainer";
import ProjectsPageContainer from "../containers/ProjectsPageContainer/ProjectsPageContainer";
import ResumePageContainer from "../containers/ResumePageContainer/ResumePageContainer";
import {
  HOME_PAGE,
  ABOUT_PAGE,
  RESUME_PAGE,
  PROJECTS_PAGE,
  BLOGS_PAGE,
  CONTACT_PAGE,
  HOME_PAGE_URL,
  ABOUT_PAGE_URL,
  RESUME_PAGE_URL,
  PROJECTS_PAGE_URL,
  BLOGS_PAGE_URL,
  CONTACT_PAGE_URL,
} from "./constants";

export const routersConfig = {
  routes: [
    {
      name: HOME_PAGE,
      url: HOME_PAGE_URL,
      exact: true,
      component: <HomePageContainer />,
    },
    {
      name: ABOUT_PAGE,
      url: ABOUT_PAGE_URL,
      exact: true,
      component: <AboutPageContainer />,
    },
    {
      name: RESUME_PAGE,
      url: RESUME_PAGE_URL,
      exact: true,
      component: <ResumePageContainer />,
    },
    {
      name: PROJECTS_PAGE,
      url: PROJECTS_PAGE_URL,
      exact: true,
      component: <ProjectsPageContainer />,
    },
    {
      name: BLOGS_PAGE,
      url: BLOGS_PAGE_URL,
      exact: true,
      component: <BlogsPageContainer />,
    },
    {
      name: CONTACT_PAGE,
      url: CONTACT_PAGE_URL,
      exact: true,
      component: <ContactPageContainer />,
    },
  ],
};
