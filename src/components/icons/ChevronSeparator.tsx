import React from "react";

type Props = {
  style?: React.CSSProperties;
  className?: string;
};

const ChevronSeparator = ({ style, className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8.5 16"
    fill="currentColor"
    aria-hidden="true"
    style={{ ...style }}
    className={className}
  >
    <polygon points=".71 0 0 .74 7.07 8.01 0 15.29 .74 16 8.5 8.01 .71 0" />
  </svg>
);

export default ChevronSeparator;
