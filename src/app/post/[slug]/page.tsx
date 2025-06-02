import fs from "fs";
import path from "path";
import { Header, Footer } from "@/components";
import BlockContent from "@/components/BlockContent";
import { Breadcrumb } from "@/components/ui";
import type { Metadata } from "next";

export const dynamic = "force-static";

type Props = {
  params: Promise<{ slug: string }>;
};

const POSTS_JSON_DIR = path.join(process.cwd(), "public", "json", "post");

function readJsonFile(slug: string) {
  const filepath = path.join(POSTS_JSON_DIR, `${slug}.json`);
  const raw = fs.readFileSync(filepath, "utf-8");
  return JSON.parse(raw);
}

export async function generateStaticParams() {
  // Read all filenames (slugs) from public/json/post
  const files = fs.readdirSync(POSTS_JSON_DIR);
  return files.map((filename) => ({
    slug: filename.replace(/\.json$/, ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = readJsonFile(slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const post = readJsonFile(slug);

  return (
    <div aria-hidden="true" className="container default">
      <Header />
      <main id="page-content" role="main" aria-label="Post Content">
        <div aria-hidden="true" className="spacer-top">
          <article>
            <BlockContent value={post.body} />
          </article>
        </div>
        <Breadcrumb current={post.title} />
      </main>
      <Footer />
    </div>
  );
}
