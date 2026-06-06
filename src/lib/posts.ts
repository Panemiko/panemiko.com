import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDir = path.join(process.cwd(), "src/content");

export interface PostFrontmatter {
  title: string;
  description?: string;
  cover: string;
  date: string;
  language: "pt" | "en";
  tags?: string[];
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  readingTime: string;
  content: string;
}

/**
 * Fetches post data by its slug.
 */
export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);
  const minutes = Math.ceil(stats.minutes);
  const readingTimeText = `${minutes} min de leitura`;

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    readingTime: readingTimeText,
    content,
  };
}

/**
 * Returns all available post slugs.
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
