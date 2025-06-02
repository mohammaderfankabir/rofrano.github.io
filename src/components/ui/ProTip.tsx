import React from "react";
import MagicPen from "@/components/icons/MagicPen";

type Props = {
  children: React.ReactNode;
};

const ProTip = ({ children }: Props) => (
  <div style={{ marginTop: "3rem" }}>
    <h3
      style={{
        display: "flex",
        gap: "8px",
        marginBottom: "0.5rem",
        padding: 0,
      }}
    >
      <MagicPen
        style={{
          height: "1.1em",
          width: "1.1em",
          display: "inline-block",
        }}
      />
      Pro Tip
    </h3>
    <p style={{ padding: 0 }}>{children}</p>
  </div>
);

export default ProTip;
