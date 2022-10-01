import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import env5 from "../public/images/env5.png";
import fire from "../public/images/fire.png";

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
        {/* Fire */}
        <div className={styles.firecontainer}>
          <Image width={120} height={80} src={fire} className={styles.fire} />
          <Image width={120} height={80} src={fire} className={styles.fire} />
        </div>
        <Image width={120} height={80} src={env5} />
        <br />
        <br />
      </main>
    </div>
  );
};

export default Home;
