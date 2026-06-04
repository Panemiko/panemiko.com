import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>X</title>
    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
  </svg>
);

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const { title, description, cover } = post.frontmatter;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: cover ? [{ url: cover }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: cover ? [cover] : [],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, readingTime, content } = post;

  // Extract headings for Table of Contents
  const headingRegex = /^##\s+(.*)$/gm;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1];
    if (text) {
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
      headings.push({ text, id });
    }
  }

  let MdxComponent: React.ComponentType;

  try {
    const mdxModule = (await import(`@/content/${slug}.mdx`)) as {
      default: React.ComponentType;
    };

    MdxComponent = mdxModule.default;
  } catch (error) {
    console.error("Failed to load MDX component:", error);
    notFound();
  }

  const shareUrl = `https://panemiko.com/${slug}`;

  return (
    <div className="mx-auto max-w-5xl px-4 pt-20 pb-40">
      <div className="mb-12">
        <Link
          href="/"
          className="group flex w-fit items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Go back
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_250px]">
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="font-heading mb-3 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              {frontmatter.title}
            </h1>
            <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString(
                  frontmatter.language === "pt" ? "pt-BR" : "en-US",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  },
                )}
              </time>
              <span>{readingTime}</span>
              <span className="uppercase">{frontmatter.language}</span>
            </div>

            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {frontmatter.cover && (
              <div className="relative mb-6 h-[300px] w-full overflow-hidden rounded-xl md:h-[400px]">
                <Image
                  src={frontmatter.cover}
                  alt={frontmatter.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          <div className="prose prose-zinc max-w-none prose-headings:font-heading prose-a:text-primary dark:prose-invert">
            <MdxComponent />
          </div>

          <footer className="mt-16 border-t border-zinc-100 pt-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-500">
                Share this post
              </span>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(frontmatter.title)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors hover:text-zinc-900"
                  aria-label="Share on X"
                >
                  <XIcon className="h-5 w-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors hover:text-zinc-900"
                  aria-label="Share on LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </footer>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            {headings.length > 0 && (
              <div className="mb-8">
                <h2 className="mb-4 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                  On this page
                </h2>
                <nav className="flex flex-col gap-3">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}
