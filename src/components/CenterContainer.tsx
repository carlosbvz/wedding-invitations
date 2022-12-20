import React from "react";

type Props = {
  children: React.ReactNode;
  style?: any;
};

export default function CenterContainer({ children, style }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
