import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

export default function FadeIn({
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

  return <animated.div style={props}>{children}</animated.div>;
}
