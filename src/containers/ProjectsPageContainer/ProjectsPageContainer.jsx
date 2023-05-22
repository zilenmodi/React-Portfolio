import React from "react";
import ProjectsPage from "../../layouts/ProjectsPage/ProjectsPage";

const ProjectsPageContainer = () => {
  const projects = [
    {
      id: 1,
      title: "T-shirt Mockup",
      headingText: "A beautiful t-shirt mockup.",
      imageUrl:
        "https://tf-react-chester.vercel.app/images/portfolio-image-1.jpg",
    },
    {
      id: 2,
      title: "T-shirt Mockup",
      headingText: "A beautiful t-shirt mockup.",
      imageUrl:
        "https://tf-react-chester.vercel.app/images/portfolio-image-2.jpg",
    },
    {
      id: 3,
      title: "T-shirt Mockup",
      headingText: "A beautiful t-shirt mockup.",
      imageUrl:
        "https://tf-react-chester.vercel.app/images/portfolio-image-3.jpg",
    },
    {
      id: 4,
      title: "T-shirt Mockup",
      headingText: "A beautiful t-shirt mockup.",
      imageUrl:
        "https://tf-react-chester.vercel.app/images/portfolio-image-4.jpg",
    },
    {
      id: 5,
      title: "T-shirt Mockup",
      headingText: "A beautiful t-shirt mockup.",
      imageUrl:
        "https://tf-react-chester.vercel.app/images/portfolio-image-5.jpg",
    },
    {
      id: 6,
      title: "T-shirt Mockup",
      headingText: "A beautiful t-shirt mockup.",
      imageUrl:
        "https://tf-react-chester.vercel.app/images/portfolio-image-6.jpg",
    },
    {
      id: 7,
      title: "T-shirt Mockup",
      headingText: "A beautiful t-shirt mockup.",
      imageUrl:
        "https://tf-react-chester.vercel.app/images/portfolio-image-7.jpg",
    },
    {
      id: 8,
      title: "T-shirt Mockup",
      headingText: "A beautiful t-shirt mockup.",
      imageUrl:
        "https://tf-react-chester.vercel.app/images/portfolio-image-8.jpg",
    },
    {
      id: 9,
      title: "T-shirt Mockup",
      headingText: "A beautiful t-shirt mockup.",
      imageUrl:
        "https://tf-react-chester.vercel.app/images/portfolio-image-9.jpg",
    },
  ];
  return (
    <>
      <ProjectsPage projects={projects} />
    </>
  );
};

export default ProjectsPageContainer;
