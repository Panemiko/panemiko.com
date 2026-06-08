import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import Image from "next/image";
import { CustomLink } from "@/components/shared/custom-link";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty";
import { FileText } from "lucide-react";
import { MaxWidth } from "@/components/shared/max-width";

export default function ArticlesPage() {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );

  return (
    <MaxWidth>
      <section className="relative mb-16">
        <div className="pointer-events-none fixed right-[-10%] bottom-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[120px]" />
        <div className="mb-2 flex items-center gap-3 md:gap-4">
          <FileText className="size-8 text-green-500 md:size-10" />

          <h1 className="font-heading text-xl font-medium tracking-tight md:text-[1.5625rem]">
            Artigos
          </h1>
        </div>
        <p className="font-heading text-foreground/50 md:text-xl">
          Reflexões sobre desenvolvimento, design e tecnologia.
        </p>
      </section>

      <section className="max-w-3xl">
        {posts.length > 0 ? (
          <ul className="flex flex-col">
            {posts.map((post) => {
              const formattedDate = new Date(
                post.frontmatter.date,
              ).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "short",
                year: "numeric",
              });

              return (
                <li key={post.slug}>
                  <CustomLink
                    href={`/${post.slug}`}
                    variant="unstyled"
                    className="group flex flex-col items-start justify-between gap-6 border-b py-10 last:border-0 sm:flex-row sm:items-center"
                  >
                    <div className="space-y-3 sm:max-w-[70%]">
                      <div className="text-muted-foreground flex items-center gap-3 text-xs tracking-widest uppercase">
                        <time dateTime={post.frontmatter.date}>
                          {formattedDate}
                        </time>
                        <span>&bull;</span>
                        <span>{post.readingTime}</span>
                      </div>
                      <h2 className="font-heading group-hover:border-primary inline-block border-b border-transparent text-xl font-medium transition-colors md:text-2xl">
                        {post.frontmatter.title}
                      </h2>
                      {post.frontmatter.description && (
                        <p className="text-muted-foreground line-clamp-2">
                          {post.frontmatter.description}
                        </p>
                      )}
                    </div>
                    <div className="bg-muted relative aspect-video w-full shrink-0 overflow-hidden rounded-lg sm:w-48">
                      <Image
                        src={post.frontmatter.cover}
                        alt={post.frontmatter.title}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 192px"
                      />
                    </div>
                  </CustomLink>
                </li>
              );
            })}
          </ul>
        ) : (
          <Empty className="items-start justify-start border-none p-0">
            <EmptyHeader className="items-start text-left">
              <EmptyTitle className="text-xl md:text-2xl">
                Nenhum artigo por enquanto
              </EmptyTitle>
              <EmptyDescription className="font-heading text-foreground/50 md:text-xl">
                Volte em breve para acompanhar novos artigos e reflexões.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}
      </section>

      <footer className="text-foreground/50 mt-32 flex flex-col gap-1 text-[10px] tracking-[0.2em] md:text-[12.5px]">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </MaxWidth>
  );
}
