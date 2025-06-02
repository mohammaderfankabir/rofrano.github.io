"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(pathname === "/");
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        zIndex: 0,
        backgroundColor: isHome ? "black" : "white",
        color: isHome ? "white" : "black",
      }}
    >
      {children}
    </div>
  );
}
