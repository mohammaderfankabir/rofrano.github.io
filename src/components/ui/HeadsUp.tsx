import React from "react";
import HandGesture from "@/components/icons/HandGesture";

type Props = {
  children: React.ReactNode;
};

const HeadsUp = ({ children }: Props) => (
  <div style={{ marginTop: "3rem" }}>
    <h3
      style={{
        display: "flex",
        gap: "8px",
        marginBottom: "0.5rem",
        padding: 0,
      }}
    >
      <HandGesture
        style={{
          height: "1.1em",
          width: "1.1em",
          display: "inline-block",
        }}
      />
      Heads Up
    </h3>
    <p style={{ padding: 0 }}>{children}</p>
  </div>
);

export default HeadsUp;
