import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Zelda from "../components/Zelda";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos y Paola :) </title>
      </Head>
      <main>
        <Zelda />
      </main>
    </div>
  );
};

export default Home;
