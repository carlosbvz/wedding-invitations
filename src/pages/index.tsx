import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import env5 from "../public/images/env5.png";
import fire from "../public/images/fire-animated.gif";

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
    // reverse: flip,
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
        <FadeIn customProps={{ delay: 400, config: { duration: 8000 } }}>
          <h1 className={styles.title}>
            {"It's dangerous to go alone! Take this."}
          </h1>
        </FadeIn>

        {/* Fire */}
        <FadeIn customProps={{ delay: 400, config: { duration: 8000 } }}>
          <div className={styles.firecontainer}>
            <Image
              width={120}
              height={80}
              src={fire}
              className={styles.fire}
              alt=""
            />
            <Image
              width={120}
              height={80}
              src={fire}
              className={styles.fire}
              alt=""
            />
          </div>
        </FadeIn>
        <br />
        <br />
        <div style={{ cursor: "pointer" }}>
          <FadeIn customProps={{ delay: 2000, config: { duration: 10000 } }}>
            <Image width={120} height={80} src={env5} alt="" />
          </FadeIn>
        </div>
        <br />
        <br />
      </main>
    </div>
  );
};

export default Home;
