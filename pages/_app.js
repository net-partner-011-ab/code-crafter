import App from "next/app";

import "../app/styles/globals.scss";

import Layout from "./layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}