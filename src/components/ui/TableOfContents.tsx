"use client";

import React, { useState } from "react";
import Link from "next/link";
import * as motion from "motion/react-client";
import CirclePlusMinus from "../motion/CirclePlusMinus";

export type Props = {
  records: { title: string; href: string }[];
};

const TableOfContents = ({ records }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const contentId = "toc-content";

  return (
    <div aria-hidden="true" className="">
      <nav aria-label="Table of Contents" className="table-of-contents">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            cursor: "pointer",
            color: "#0070f3",
            textDecoration: isHovered ? "underline" : "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          Table of Contents
          <CirclePlusMinus
            style={{ width: "1.2em", height: "1.2em", display: "inline-block" }}
            hideVerticalLine={isOpen}
          />
        </button>
        <motion.div
          id={contentId}
          initial={{ height: 0, opacity: 0 }}
          animate={
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, easing: "ease-in-out" }}
          style={{ overflow: "hidden" }}
        >
          <ul>
            {records.map(({ title, href }) => (
              <li key={href}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </div>
  );
};

export default TableOfContents;
