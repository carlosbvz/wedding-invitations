import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

import env2 from "../public/images/env3.png";
import env3 from "../public/images/env4.png";
import env5 from "../public/images/env5.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos y Paola :) </title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {" "}
          {"It's dangerous to go alone! Take this."}
        </h1>
        <Image width={120} height={80} src={env2} />
        <br />
        <br />
        <Image width={120} height={80} src={env3} />
        <br />
        <br />
        <Image width={120} height={80} src={env5} />
        <br />
        <br />
      </main>
    </div>
  );
};

export default Home;
