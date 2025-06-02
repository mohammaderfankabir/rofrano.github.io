import fs from "fs/promises";
import path from "path";
import { Header, Footer } from "@/components";
import BlockContent from "@/components/BlockContent";
import { Breadcrumb } from "@/components/ui";
import type { Metadata } from "next";

export const dynamic = "force-static";

type Props = {
  params: Promise<{ slug: string }>;
};

async function readPageJson(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "public",
    "json",
    "page",
    `${slug}.json`
  );
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function generateStaticParams() {
  const dirPath = path.join(process.cwd(), "public", "json", "page");
  const files = await fs.readdir(dirPath);
  return files
    .filter((file) => file.endsWith(".json"))
    .map((file) => ({ slug: file.replace(/\.json$/, "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await readPageJson(slug);
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const page = await readPageJson(slug);

  return (
    <div aria-hidden="true" className="container default">
      <Header />
      <main id="page-content" role="main" aria-label="Page Content">
        <div aria-hidden="true" className="spacer-top">
          <article>
            <BlockContent value={page.body} />
          </article>
        </div>
        <Breadcrumb current={page.title} />
      </main>
      <Footer />
    </div>
  );
}
