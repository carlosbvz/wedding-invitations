import React, { useState } from "react";
import fire from "../public/images/fire-animated.gif";
import Image from "next/image";
import env5 from "../public/images/env5.png";
import styles from "../styles/Zelda.module.css";
import FadeIn from "./FadeIn";
import Invitation from "./Invitation";

export default function Zelda() {
  const [showInvite, setShowInvite] = useState(false);

  if (showInvite) return <Invitation />;
  else
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

        <div style={{ cursor: "pointer" }} onClick={() => setShowInvite(true)}>
          <FadeIn customProps={{ delay: 2000, config: { duration: 8000 } }}>
            <Image width={120} height={80} src={env5} alt="" />
          </FadeIn>
        </div>
        <br />
      </div>
    );
}
