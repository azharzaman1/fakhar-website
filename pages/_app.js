import { useEffect } from "react";
import Head from "next/head";
import { v4 } from "uuid";
import Wrappers from "components/app/Wrappers";
import "react-medium-image-zoom/dist/styles.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // client
      if (localStorage.getItem("fakhar_blog_visitor_user_obj")) {
        // already visited before
        return;
      } else {
        // new user
        localStorage.setItem(
          "fakhar_blog_visitor_user_obj",
          JSON.stringify({ uid: v4() })
        );
      }
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="favicon.svg" />
        <link rel="apple-touch-icon" href="favicon.svg" />
      </Head>
      <Wrappers>{getLayout(<Component {...pageProps} />)}</Wrappers>
    </>
  );
}

export default MyApp;
