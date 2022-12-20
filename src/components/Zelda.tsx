import React, { useState } from "react";
import Link from "next/link";
import fire from "../public/images/fire-animated.gif";
import Image from "next/image";
import env5 from "../public/images/env5.png";
import styles from "../styles/Zelda.module.css";
import FadeIn from "./FadeIn";

function Letter() {
  return (
    <Link href="/invite">
      <div style={{ cursor: "pointer" }}>
        <FadeIn customProps={{ delay: 2000, config: { duration: 8000 } }}>
          <Image width={120} height={80} src={env5} alt="" />
        </FadeIn>
      </div>
    </Link>
  );
}

type Props = {};

export default function Zelda({}: Props) {
  return (
    <div className={styles.main}>
      <FadeIn customProps={{ delay: 400, config: { duration: 8000 } }}>
        <h1 className={styles.title} style={{ color: "white" }}>
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
      <Letter />
      <br />
    </div>
  );
}
