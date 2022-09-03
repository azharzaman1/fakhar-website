import Head from "next/head";
import client from "@lib/sanity";
import { getAllPostsQuery } from "@lib/sanity/queries";

import Blog from "../components/pages/Home/Blog";
import Footer from "components/Generic/Footer";
import Header from "components/Generic/Header";
import Certifications from "components/pages/Home/Certifications";

export default function Home({ posts }) {
  return (
    <div className="page home-page">
      <Head>
        <title>Fakhar Zaman - Biology Student</title>
      </Head>
      <Header />
      <main>
        <Certifications />
        <Blog posts={posts} />
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const posts = await client.fetch(getAllPostsQuery);
  return {
    props: {
      posts: posts,
    },
  };
};
