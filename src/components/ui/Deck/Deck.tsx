"use client";

import Card from "../Card/Card";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import styles from "./Deck.module.css";

type CardType = {
  slug: string;
  title: string;
  description: string;
  mainImage: SanityImageSource;
};

export default function Deck({ cards }: { cards: CardType[] }) {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Card
          key={card.slug}
          href={`/post/${card.slug}`}
          title={card.title}
          description={card.description}
          backgroundImage={urlFor(card.mainImage).url()}
          aspectRatio="0.8"
        />
      ))}
    </div>
  );
}
