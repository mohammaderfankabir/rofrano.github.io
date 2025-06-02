"use client";

import * as React from "react";
import Link from "next/link";
import { MainNavigation } from "@/components/ui/";
import LogoGesture from "./motion/LogoGesture";

export default function Header() {
  return (
    <header role="banner">
      <nav className="header-navigatin">
        <Link
          href="/"
          title="Homepage"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <LogoGesture />
        </Link>
        <MainNavigation />
      </nav>
    </header>
  );
}
