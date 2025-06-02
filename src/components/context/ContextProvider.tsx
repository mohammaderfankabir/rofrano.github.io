"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { guide } from "@/constants";
import { TableOfContents, Breadcrumb } from "@/components/ui";

type Props = {
  children: React.ReactNode;
};

export default function ContextProvider({ children }: Props) {
  const pathname = usePathname();
  const item = guide.find((i) => pathname.includes(i.href))!;
  const toc = guide
    .filter((i) => i.category === item.category)
    .map(({ title, href }) => ({ title, href }));

  return (
    <>
      <div className="spacer-top" />
      <TableOfContents records={toc} />
      {children}
      <div className="spacer-top" />
      <Breadcrumb current={item.title} />
    </>
  );
}
