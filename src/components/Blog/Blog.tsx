import React from "react";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { GlobalStyle } from "../../styles/global";
import BlogCard from "./BlogCard";
import { Container } from "./styles";

const Blog = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <BlogCard title="asd" imageSrc="" description="desc" icons={icon} />
      </Container>

      {/* <Header /> */}
      <Footer />
    </>
  );
};

export default Blog;

const icon = [{ id: 1, icon: "asdf" }];
