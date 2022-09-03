import React from "react";
import PostCard from "../../../Blog/Archive/PostCard";
import Container from "../../../Generic/Layout/Container";

const Blog = ({ posts }) => {
  return (
    <section className="blog-section py-16 flex justify-center">
      <Container maxWidth="xl">
        <div className="blog-section-header">
          <div className="blog-section-heading py-4 mb-4">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-center">
              Latest From My Blog
            </h2>
          </div>
        </div>
        <div className="blog-posts grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
