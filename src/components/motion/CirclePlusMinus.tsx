import React from "react";
import * as motion from "motion/react-client";

type Props = {
  style?: React.CSSProperties;
  hideVerticalLine?: boolean;
};

const CirclePlusMinus = ({ style, hideVerticalLine }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      role="presentation"
      style={style}
    >
      <circle cx="8" cy="8" r="7.5" />
      <motion.line
        x1="8"
        y1="4.5"
        x2="8"
        y2="11.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transformOrigin: "center top" }}
        initial="visible"
        animate={hideVerticalLine ? "hidden" : "visible"}
        variants={{
          visible: { scaleY: 1, opacity: 1 },
          hidden: { scaleY: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3, easing: "ease-in-out" }}
      />
      <line
        x1="11.5"
        y1="8"
        x2="4.5"
        y2="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CirclePlusMinus;
