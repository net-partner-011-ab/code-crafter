import App from "next/app";

import "../app/globals.css";

import Layout from "./layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}