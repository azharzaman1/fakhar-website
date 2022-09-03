import Head from "next/head";
import client from "@lib/sanity";
import {
  getAllCertificationsQuery,
  getAllPostsQuery,
} from "@lib/sanity/queries";

import Blog from "../components/pages/Home/Blog";
import Footer from "components/Generic/Footer";
import Header from "components/Generic/Header";
import Certifications from "components/pages/Home/Certifications";

export default function Home({ posts, certifications }) {
  console.log({ certifications });
  return (
    <div className="page home-page">
      <Head>
        <title>Fakhar Zaman - Biology Student</title>
      </Head>
      <Header />
      <main>
        <Certifications certifications={certifications} />
        <Blog posts={posts} />
      </main>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const posts = await client.fetch(getAllPostsQuery);
  const certifications = await client.fetch(getAllCertificationsQuery);
  return {
    props: {
      posts,
      certifications,
    },
  };
};
