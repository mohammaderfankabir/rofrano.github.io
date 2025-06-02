"use client";

import { useState, ReactNode } from "react";
import Signature from "@/components/icons/Signature";
import styles from "./Overlay.module.css";

type Props = {
  children: ReactNode;
};

export default function Overlay({ children }: Props) {
  const [overlayVisible, setOverlayVisible] = useState(true);

  if (overlayVisible) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="onboarding"
        onClick={() => setOverlayVisible(false)}
        className={styles.overlay}
      >
        <div className={styles.content}>
          <Signature className={styles.signature} />
          <p className={styles.description}>
            You are diving into the world of
            <br />
            composer and songwriter
            <br />
            John Rofrano.
          </p>
          <p>Enter</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
