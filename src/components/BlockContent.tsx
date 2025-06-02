"use client";

import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "@/sanity/lib/image";

interface BlockContentProps {
  value: PortableTextBlock[];
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => {
      const { href, title } = value as { href: string; title?: string };
      return (
        <a href={href} title={title} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const { alt } = value as { alt: string };
      const imageUrl = urlFor(value).width(800).url();

      return (
        <figure>
          <Image
            src={imageUrl}
            alt={alt || "Image"}
            width={1800}
            height={1200}
          />
          {alt && <figcaption>{alt}</figcaption>}
        </figure>
      );
    },
    blockquote: ({ value }) => {
      const { quoteText, cite } = value as {
        quoteText: string;
        cite?: string;
      };

      return (
        <blockquote cite={cite}>
          <p>{quoteText}</p>
        </blockquote>
      );
    },
  },
};

export default function BlockContent({ value }: BlockContentProps) {
  return <PortableText value={value} components={components} />;
}
