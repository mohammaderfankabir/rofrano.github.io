import fs from "fs";
import path from "path";
import Image from "next/image";
import { Header, Footer } from "@/components";
import { Overlay, MasonryGrid, Deck } from "@/components/ui";
import { urlFor } from "@/sanity/lib/image";
import { resolvingPosts } from "@/lib/resolvingPosts";
import Timeline from "@/components/icons/Timeline";

export default async function HomePage() {
  // Read static JSON data
  const filePath = path.join(
    process.cwd(),
    "public",
    "json",
    "site",
    "siteSettings.json"
  );
  const siteSettings = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(siteSettings);

  const { cards, grid } = resolvingPosts(data);

  // Use Sanity helper to build image URL
  const imageUrl = urlFor(data.mainImage?.asset).width(1920).height(1080).url();

  return (
    <Overlay>
      <div aria-hidden="true" className="container container--wide">
        <Header />
        <main id="page-content" role="main" aria-label="Page Content">
          <section role="presentation">
            <div aria-hidden="true" className="hero-image">
              <Image
                src={imageUrl}
                width={1920}
                height={1080}
                alt={data.mainImage?.alt}
              />
            </div>
            <div aria-hidden="true" className="headline">
              <span className="text-subheading">{data.eyebrow}</span>
              <h1>{data.headline}</h1>
              <p>{data.subheadline}</p>
            </div>
          </section>
          <section>
            <MasonryGrid cards={grid} />
            <div aria-hidden="true" className="post-section">
              <span className="label">
                <Timeline className="icon" />
                {data.postsLabel}
              </span>
              <h2 className="text-heading text-heading--md">
                {data.postsTitle}
              </h2>
              <p className="text-body" style={{ maxWidth: "660px" }}>
                {data.postDescription}
              </p>
            </div>
            <Deck cards={cards} />
          </section>
        </main>
        <Footer />
      </div>
    </Overlay>
  );
}
