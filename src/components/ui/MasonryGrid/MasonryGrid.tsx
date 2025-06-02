"use client";

import Card from "../Card/Card";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import styles from "./MasonryGrid.module.css";

type CardType = {
  slug: string;
  title: string;
  description: string;
  mainImage: SanityImageSource;
};

type LayoutConfigItem = {
  justifyContent: "flex-start" | "flex-end";
  aspectRatio: string;
};

export default function MasonryGrid({ cards }: { cards: CardType[] }) {
  const layoutConfig: LayoutConfigItem[] = [
    { justifyContent: "flex-start", aspectRatio: "0.875" },
    { justifyContent: "flex-start", aspectRatio: "0.875" },
    { justifyContent: "flex-start", aspectRatio: "0.5625" },
    { justifyContent: "flex-end", aspectRatio: "1.2" },
  ];

  return (
    <div className={styles.container}>
      {/* Cards 1 and 2 */}
      {cards.slice(0, 2).map((card, index) => (
        <Card
          key={card.slug}
          href={`/post/${card.slug}`}
          title={card.title}
          description={card.description}
          backgroundImage={urlFor(card.mainImage).url()}
          justifyContent={layoutConfig[index].justifyContent}
          aspectRatio={layoutConfig[index].aspectRatio}
        />
      ))}

      {/* Cards 3 and 4 */}
      <div className={styles.cardGroup}>
        {cards.slice(2, 4).map((card, index) => (
          <Card
            key={card.slug}
            href={`/post/${card.slug}`}
            title={card.title}
            description={card.description}
            backgroundImage={urlFor(card.mainImage).url()}
            justifyContent={layoutConfig[index + 2].justifyContent}
            aspectRatio={layoutConfig[index + 2].aspectRatio}
          />
        ))}
      </div>
    </div>
  );
}
