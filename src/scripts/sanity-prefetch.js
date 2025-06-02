import fs from "fs";
import path from "path";
import { createClient } from "next-sanity";


const client = createClient({
  projectId: "3m5autci",
  dataset: "production",
  apiVersion: "2025-05-06",
  useCdn: true,
});

const OUTPUT_DIR = path.join(process.cwd(), "public", "json");

async function fetchAndSave(type) {
  const query = `*[_type == "${type}"]{
    ..., 
    "slug": coalesce(slug.current, _id)
  }`;
  
  const docs = await client.fetch(query);

  const dir = path.join(OUTPUT_DIR, type);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  docs.forEach((doc) => {
    const filename = `${doc.slug || doc._id}.json`;
    const filepath = path.join(dir, filename);
    fs.writeFileSync(filepath, JSON.stringify(doc, null, 2));
  });

  console.log(`Saved ${docs.length} documents to /json/${type}`);
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  await fetchAndSave("site");
  await fetchAndSave("page");
  await fetchAndSave("post");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
