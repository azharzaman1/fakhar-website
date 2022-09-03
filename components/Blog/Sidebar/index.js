import React, { useState, useEffect } from "react";
import Container from "components/Generic/Layout/Container";
import AuthorWidget from "../Generic/Widgets/Author";
import RelatedPostsWidget from "../Generic/Widgets/RelatedPostsWidget";
import client, { imageBuilder } from "@lib/sanity";
import { getAuthorBySlug } from "@lib/sanity/queries";

const BlogSidebar = () => {
  const [author, setAuthor] = useState(null);
  const [loadingAuthor, setLoadingAuthor] = useState(false);

  useEffect(() => {
    let mounted = true;
    const fetchAuthor = async () => {
      mounted && setLoadingAuthor(true);

      const author = await client.fetch(getAuthorBySlug, {
        slug: "fakhar-zaman",
      });
      console.log(author);
      mounted && setAuthor(author);
      mounted && setLoadingAuthor(false);
    };

    fetchAuthor();
    return () => {
      mounted = false;
    };
  }, []);

  console.log({ author });

  return (
    <aside className="hidden md:flex md:min-w-[300px] lg:min-w-[400px] md:max-w-[300px] lg:max-w-[400px] min-h-[calc(100vh)] self-start sticky top-0 bg-white border-l border-gray-200 justify-center pt-8">
      <Container>
        <div className="blog-post-sidebar-content">
          <div className="blog-post-author">
            <AuthorWidget
              loading={loadingAuthor}
              variant="block"
              name={author?.name}
              description={author?.tagline}
              avatarUrl={
                author?.image && imageBuilder(author?.image)?.width(100)?.url()
              }
              internalHref="/"
            />
          </div>
          <div className="mt-4 w-1/4 h-0.5 rounded-full bg-primary mx-auto" />

          <div className="related-posts-section mt-8">
            <RelatedPostsWidget />
          </div>
        </div>
      </Container>
    </aside>
  );
};

export default BlogSidebar;
