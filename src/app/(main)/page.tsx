import { GitHubIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FileText,
  Layout,
  MessageSquare,
} from "lucide-react";
import { Link } from "next-view-transitions";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="mb-2 flex items-center gap-3 md:gap-4">
          <h1 className="font-heading text-xl font-medium tracking-tight md:text-[2.5rem] md:leading-tight">
            Tito Oliveira
          </h1>
        </div>
        <p className="font-heading text-foreground/50 md:text-2xl">
          Web Full-Stack Developer based in Porto Alegre, Brazil.
        </p>
      </section>

      {/* About Section */}
      <section className="mb-24 max-w-2xl">
        <h2 className="font-heading text-muted-foreground mb-6 text-sm font-semibold tracking-widest uppercase md:text-lg">
          About
        </h2>
        <div className="text-muted-foreground space-y-4 md:text-xl md:leading-relaxed">
          <p>
            <strong className="text-foreground">Hey, I&apos;m Tito.</strong>
          </p>
          <p>
            I&apos;m a full-stack developer who turns ridiculous ideas into
            reality. I prefer the unconventional over the standard, building
            things that stand out and push boundaries.
          </p>
          <p>
            Currently seeking a role as a{" "}
            <strong className="text-foreground">Software Engineer</strong>.{" "}
            <strong className="text-foreground">
              Have a wild project?{" "}
              <Link
                href="/contact"
                className="underline transition-colors hover:text-primary"
              >
                Let&apos;s build it
              </Link>
              .
            </strong>
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="font-heading text-muted-foreground mb-8 text-sm font-semibold tracking-widest uppercase md:text-lg">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-auto w-full justify-start gap-3 px-6 py-4 sm:justify-center md:text-lg"
          >
            <Link href="/contact">
              <MessageSquare className="text-primary size-5" />
              <span>Contact Me</span>
              <ArrowRight className="ml-auto size-5 opacity-0 transition-all group-hover:opacity-100 sm:ml-0" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-auto w-full justify-start gap-3 px-6 py-4 sm:justify-center md:text-lg"
          >
            <Link href="/projects">
              <Layout className="text-primary size-5" />
              <span>My Projects</span>
              <ArrowRight className="ml-auto size-5 opacity-0 transition-all group-hover:opacity-100 sm:ml-0" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-auto w-full justify-start gap-3 px-6 py-4 sm:justify-center md:text-lg"
          >
            <Link href="/articles">
              <FileText className="text-primary size-5" />
              <span>My Articles</span>
              <ArrowRight className="ml-auto size-5 opacity-0 transition-all group-hover:opacity-100 sm:ml-0" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-auto w-full justify-start gap-3 px-6 py-4 sm:justify-center md:text-lg"
          >
            <Link
              href="https://github.com/panemiko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="text-primary size-5" />
              <span>My GitHub</span>
              <ArrowRight className="ml-auto size-5 opacity-0 transition-all group-hover:opacity-100 sm:ml-0" />
            </Link>
          </Button>
        </div>
      </section>

      <footer className="text-foreground/50 mt-32 flex flex-col gap-1 text-[10px] tracking-[0.2em] md:text-[12.5px]">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
