"use client";

import Link from "next/link";
import styles from "./Card.module.css";

export default function Card({
  href,
  title,
  description,
  backgroundImage,
  justifyContent = "flex-end", // default value set here
  aspectRatio = "1", // default value set here
}: {
  href: string;
  title: string;
  description: string;
  backgroundImage: string;
  justifyContent?: "flex-start" | "flex-end";
  aspectRatio?: string;
}) {
  return (
    <Link href={href} className={styles.tile} style={{ aspectRatio }}>
      <div
        className={styles.background}
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundColor: "#000",
        }}
      />
      <div className={styles.copy} style={{ justifyContent }}>
        <h2 className={styles.textHeading}>{title}</h2>
        <p className={styles.textBody}>{description}</p>
      </div>
    </Link>
  );
}
