import fs from "fs";
import path from "path";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Types
type Post = {
  _id: string;
  slug: string;
  title: string;
  description: string;
  mainImage: SanityImageSource;
};

type Reference = {
  _ref: string;
};

type SiteData = {
  cards: Reference[];
  grid: Reference[];
};

// Main function
export function resolvingPosts(data: SiteData): {
  cards: Post[];
  grid: Post[];
} {
  const postsDir = path.join(process.cwd(), "public", "json", "post");
  const filenames = fs.readdirSync(postsDir);

  const posts: Post[] = [];

  for (const filename of filenames) {
    const filePath = path.join(postsDir, filename);
    const content = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(content);

    posts.push({
      _id: json._id,
      slug: json.slug,
      title: json.title,
      description: json.description,
      mainImage: json.mainImage,
    });
  }

  const gridIds = data.grid.map((ref) => ref._ref);
  const cardIds = data.cards.map((ref) => ref._ref);

  const postsById = Object.fromEntries(posts.map((post) => [post._id, post]));

  const grid = gridIds.map((id) => postsById[id]).filter(Boolean);
  const cards = cardIds.map((id) => postsById[id]).filter(Boolean);

  return { cards, grid };
}
