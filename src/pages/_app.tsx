import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import Head from "next/head";
// import awsconfig from "../aws-exports";
import GlobalProvider from "../contexts/GlobalContext";

const awsmobile = {
  aws_project_region: "us-east-1",
  aws_appsync_graphqlEndpoint:
    "https://v72qg3emvnh57eiof6ytacovae.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-3nmippjvxfcmzgezejbr3rfciy",
};

Amplify.configure({ ...awsmobile, ssr: true });

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
