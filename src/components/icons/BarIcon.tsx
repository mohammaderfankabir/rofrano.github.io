import React from "react";

type Props = {
  style?: React.CSSProperties;
  className?: string;
};

const BarIcon = ({ style, className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2.5 25"
    fill="currentColor"
    aria-hidden="true"
    style={{ ...style }}
    className={className}
  >
    <path d="M2.13,19.78c.12-.05.16-.12.17-.24.27-6.37.27-12.72,0-19.08,0-.12-.05-.18-.17-.24C1.5-.07,1-.07.37.22c-.12.05-.16.12-.17.24C-.07,6.83-.07,13.17.2,19.54c0,.12.05.18.17.24.63.29,1.13.29,1.76,0Z" />
  </svg>
);

export default BarIcon;
