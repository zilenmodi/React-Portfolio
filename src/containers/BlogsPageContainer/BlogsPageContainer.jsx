import React from "react";
import BlogsPage from "../../layouts/BlogsPage/BlogsPage";

const BlogsPageContainer = () => {
  const blogs = [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-1.jpg",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-2.jpg",
    },
    {
      id: 3,
      title: "UI/UX design starter with Adobe XD.",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-3.jpg",
    },
    {
      id: 4,
      title: "Boost your post for increasing sales.",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-4.jpg",
    },
    {
      id: 5,
      title: "Difference between GatsbyJS & NextJS.",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-5.jpg",
    },
    {
      id: 6,
      title: "How to choose javascript framework for project.",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-6.jpg",
    },
    {
      id: 7,
      title: "Web automation with python language.",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-7.jpg",
    },
    {
      id: 8,
      title: "Time to use latest technology for creating a website.",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-8.jpg",
    },
    {
      id: 9,
      title: "Think out of the box.",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-9.jpg",
    },
    {
      id: 10,
      title: "Trending designs in 2020.",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-4.jpg",
    },
    {
      id: 11,
      title: "How to get 10k instagram followers?",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-3.jpg",
    },
    {
      id: 12,
      title: "What NodeJS can do?",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-5.jpg",
    },
    {
      id: 13,
      title: "Futures of javascript.",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-6.jpg",
    },
    {
      id: 14,
      title: "Popular javascript library in 2020.",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-1.jpg",
    },
    {
      id: 15,
      title: "Promrammers must read books.",
      imageUrl: "https://tf-react-chester.vercel.app/images/blog-image-8.jpg",
    },
  ];
  return (
    <>
      <BlogsPage blogs={blogs} />
    </>
  );
};

export default BlogsPageContainer;
