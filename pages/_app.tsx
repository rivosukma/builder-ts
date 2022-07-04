import "../styles/globals.scss";
import "grapesjs/dist/css/grapes.min.css";

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/layout"));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
