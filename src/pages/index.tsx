import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import env5 from "../public/images/env5.png";
import fire from "../public/images/fire.png";

import { animated, useSpring } from "@react-spring/web";

function FadeIn({
  children,
  customProps,
}: {
  children: any;
  customProps?: any;
}) {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    ...customProps,
  });

  return (
    <animated.div style={props} className={styles.title}>
      {children}
    </animated.div>
  );
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos y Paola :) </title>
      </Head>

      <main className={styles.main}>
        <FadeIn customProps={{ config: { duration: 4000 } }}>
          <h1 className={styles.title}>
            {"It's dangerous to go alone! Take this."}
          </h1>
        </FadeIn>

        {/* Fire */}
        <FadeIn customProps={{ config: { duration: 4000 } }}>
          <div className={styles.firecontainer}>
            <Image width={120} height={80} src={fire} className={styles.fire} />
            <Image width={120} height={80} src={fire} className={styles.fire} />
          </div>
        </FadeIn>
        <br />
        <br />
        <FadeIn customProps={{ delay: 4000, config: { duration: 4000 } }}>
          <Image width={120} height={80} src={env5} />
        </FadeIn>
        <br />
        <br />
      </main>
    </div>
  );
};

export default Home;
