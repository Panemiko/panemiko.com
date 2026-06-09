import { CustomLink } from "@/components/shared/custom-link";
import { MaxWidth } from "@/components/shared/max-width";
import { LinkedInIcon, XIcon } from "@/components/shared/social-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

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
    <MaxWidth className="pt-2 pb-40 md:pt-10">
      {frontmatter.cover && (
        <div className="relative -mx-4 mb-8 h-[300px] w-[calc(100%+2rem)] overflow-hidden rounded-none md:-mx-12 md:w-[calc(100%+6rem)] md:rounded-xl lg:-mx-24 lg:w-[calc(100%+12rem)]">
          <Image
            src={frontmatter.cover}
            alt={frontmatter.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="mb-12">
        <CustomLink
          href="/articles"
          variant="unstyled"
          className="group text-muted-foreground hover:text-foreground flex w-fit items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Voltar
        </CustomLink>
      </div>

      <div>
        <article className="min-w-0">
          <header className="mb-8">
            <h1 className="font-heading text-foreground mb-3 text-2xl font-bold md:text-4xl">
              {frontmatter.title}
            </h1>
            <div className="text-muted-foreground mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>{readingTime}</span>
            </div>

            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <Badge variant="secondary" key={tag}>
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-em:text-inherit prose-strong:text-foreground prose-headings:font-heading prose-a:text-primary prose-headings:text-foreground **:text-muted-foreground **:border-border max-w-none">
            <MdxComponent />
          </div>

          <footer className="border-border mt-16 border-t pt-8">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm font-medium">
                Compartilhar este artigo
              </span>
              <div className="flex gap-4">
                <Button asChild variant="ghost" size="icon">
                  <CustomLink
                    href={`https://x.com/intent/tweet?text=${encodeURIComponent(frontmatter.title)}&url=${encodeURIComponent(shareUrl)}`}
                    variant="unstyled"
                    aria-label="Share on X"
                  >
                    <XIcon />
                  </CustomLink>
                </Button>

                <Button asChild variant="ghost" size="icon">
                  <CustomLink
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    variant="unstyled"
                    aria-label="Share on LinkedIn"
                  >
                    <LinkedInIcon />
                  </CustomLink>
                </Button>
              </div>
            </div>
          </footer>
        </article>

        {/* <aside className="hidden lg:block">
          <div className="sticky top-24">
            {headings.length > 0 && (
              <div className="mb-8">
                <h2 className="text-foreground mb-4 text-xs font-semibold tracking-widest uppercase">
                  Nesta página
                </h2>
                <nav className="flex flex-col gap-3">
                  {headings.map((heading) => (
                    <CustomLink
                      key={heading.id}
                      href={`#${heading.id}`}
                      variant="unstyled"
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {heading.text}
                    </CustomLink>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </aside> */}
      </div>
    </MaxWidth>
  );
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}
