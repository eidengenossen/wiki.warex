import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "wiki"); 

export async function getAllDocs() {
  if (!fs.existsSync(docsDirectory)) {
    console.error("CRITICAL: The content folder 'wiki' was not found at:", docsDirectory);
    return [];
  }

  const files = fs.readdirSync(docsDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(docsDirectory, file), "utf8");
      const { data } = matter(source);
      return {
        slug: file.replace(".mdx", ""),
        title: data.title || file.replace(".mdx", ""),
        ...data,
      };
    });
}

export async function getDocBySlug(slug: string) {
  const fullPath = path.join(docsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    metadata: data,
    content,
  };
}