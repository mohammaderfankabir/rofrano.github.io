"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeIcon from "@/components/icons/HomeIcon";
import ChevronSeparator from "@/components/icons/ChevronSeparator";
import styles from "./Breadcrumb.module.css";

type Props = {
  current?: string;
};

const Breadcrumb = ({ current }: Props) => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop() || "";

  const label =
    current ||
    lastSegment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className={styles.breadcrumb}>
      <nav aria-label="breadcrumb" className={styles.nav}>
        <Link href="/" aria-label="Homepage" className={styles.link}>
          <HomeIcon className={styles.homeIcon} />
        </Link>
        <ChevronSeparator className={styles.chevron} />
        <span aria-current="page">{label}</span>
      </nav>
    </div>
  );
};

export default Breadcrumb;
