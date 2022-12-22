import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import Head from "next/head";
import awsconfig from "../aws-exports";
import GlobalProvider from "../contexts/GlobalContext";

Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Carlos y Paola :) </title>
      </Head>
      <GlobalProvider>
        <main>
          <Component {...pageProps} />
        </main>
      </GlobalProvider>
    </>
  );
}

export default MyApp;
