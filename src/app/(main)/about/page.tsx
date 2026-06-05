import {
  User,
  Bot,
  Code,
  Presentation,
  Rocket,
  Briefcase,
  Trophy,
  ExternalLink,
} from "lucide-react";
import { GitHubIcon } from "@/components/shared/social-icons";

export default function AboutPage() {
  return (
    <>
      <section className="relative mb-16">
        <div className="pointer-events-none fixed right-[-10%] bottom-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="mb-2 flex items-center gap-3 md:gap-4">
          <User className="size-8 text-orange-500 md:size-10" />

          <h1 className="font-heading text-xl font-medium tracking-tight md:text-[1.5625rem]">
            About Me
          </h1>
        </div>
        <p className="font-heading text-foreground/50 md:text-xl">
          A bit about my journey and expertise.
        </p>
      </section>

      <div className="max-w-3xl space-y-20">
        {/* Intro */}
        <section>
          <p className="text-foreground text-xl font-medium md:text-2xl">
            Hey, I&apos;m Tito Oliveira.
          </p>
        </section>

        {/* The Journey Timeline */}
        <section className="space-y-8">
          <h2 className="text-foreground/50 text-xs font-bold uppercase tracking-[0.2em]">
            The Journey
          </h2>

          <div className="relative border-l border-border/50 ml-3 space-y-12">
            {/* 2019 */}
            <div className="relative pl-8">
              <div className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                <Bot className="size-3 text-orange-500" />
              </div>
              <div className="space-y-2">
                <span className="text-orange-500 text-xs font-bold tracking-wider uppercase">
                  2019: The Beginning
                </span>
                <p className="text-muted-foreground md:text-xl md:leading-relaxed">
                  In 2019, while in sixth grade, I started programming as a
                  hobby. My first project was a Discord bot that automated image
                  editing, and it actually worked. After that, I stepped away
                  from code for almost a year.
                </p>
              </div>
            </div>

            {/* 2020 */}
            <div className="relative pl-8">
              <div className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                <Code className="size-3 text-orange-500" />
              </div>
              <div className="space-y-4">
                <span className="text-orange-500 text-xs font-bold tracking-wider uppercase">
                  2020: The Pandemic Era
                </span>
                <div className="text-muted-foreground space-y-4 md:text-xl md:leading-relaxed">
                  <p>
                    When the pandemic hit, my school forced us to use software
                    that I absolutely hated. Thinking I could build something
                    better, I jumped into creating a full school task
                    distribution system without really knowing what I was doing.
                  </p>
                  <p>
                    That project was where my passion for building products
                    really started. I wrote it in PHP because that was what I
                    knew from messing around with my father&apos;s company
                    cPanel since I was about eight years old. Looking back, it
                    was almost a disaster. I didn&apos;t even know REST APIs
                    existed, so I used webhooks for communication between the
                    server and client. For authentication, I just stored user
                    IDs in cookies, completely unaware they could be easily read
                    and altered.
                  </p>
                  <p>
                    Despite that &quot;failure,&quot; it pushed me to keep
                    creating, discovering new technologies, and learning better
                    ways to write code.
                  </p>
                </div>
              </div>
            </div>

            {/* High School */}
            <div className="relative pl-8">
              <div className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background shadow-sm">
                <Presentation className="size-3 text-orange-500" />
              </div>
              <div className="space-y-2">
                <span className="text-orange-500 text-xs font-bold tracking-wider uppercase">
                  High School: Pitches & Products
                </span>
                <p className="text-muted-foreground md:text-xl md:leading-relaxed">
                  In high school, I discovered how much I enjoyed giving
                  presentations and pitches. I loved the thrill of creating a
                  product under pressure. My friend and I even turned my
                  graduation speech into a startup-style pitch as a joke.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones & Projects Grid */}
        <section className="space-y-8">
          <h2 className="text-foreground/50 text-xs font-bold uppercase tracking-[0.2em]">
            Milestones & Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1: Major Projects */}
            <div className="group border-border/50 bg-card/50 hover:bg-card hover:border-border relative flex flex-col gap-4 rounded-2xl border p-6 transition-all duration-300">
              <Rocket className="size-6 text-orange-500" />
              <div className="space-y-2">
                <h3 className="text-foreground font-heading text-lg font-medium">
                  Major Projects
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                  During those years, I built two major projects:{" "}
                  <strong className="text-foreground">Cobuilt</strong>, a
                  company that sells custom computers, and{" "}
                  <a
                    href="https://getpaperflow.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground decoration-muted-foreground hover:decoration-foreground inline-flex items-center gap-1 underline underline-offset-4 transition-colors"
                  >
                    <strong>Paperflow</strong>
                    <ExternalLink className="size-3" />
                  </a>
                  , my current &quot;life project&quot;, a Git-like document
                  editor for complex writing. Paperflow was actually my final
                  presentation for my technical high school.
                </p>
              </div>
            </div>

            {/* Card 2: Real-World Experience */}
            <div className="group border-border/50 bg-card/50 hover:bg-card hover:border-border relative flex flex-col gap-4 rounded-2xl border p-6 transition-all duration-300">
              <Briefcase className="size-6 text-orange-500" />
              <div className="space-y-2">
                <h3 className="text-foreground font-heading text-lg font-medium">
                  Professional Experience
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
                  Beyond my own projects, I&apos;ve worked on real-world systems
                  that solve actual problems. At a real estate agency, I helped
                  transition from physical logistics to a digital, offline-first
                  sync system. As a freelancer, I&apos;ve scaled CRMs for
                  thousands of clients and focused on delivering
                  high-performance web applications.
                </p>
              </div>
            </div>

            {/* Card 3: Hackathons & Challenges (Full Width) */}
            <div className="group border-border/50 bg-card/50 hover:bg-card hover:border-border relative flex flex-col gap-4 rounded-2xl border p-6 transition-all duration-300 md:col-span-2">
              <Trophy className="size-6 text-orange-500" />
              <div className="space-y-4">
                <h3 className="text-foreground font-heading text-lg font-medium">
                  Innovation & Future
                </h3>
                <div className="text-muted-foreground space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    I still love the challenge of building under pressure,
                    whether it&apos;s winning a hackathon with an{" "}
                    <a
                      href="https://github.com/Panemiko/image-reader"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground decoration-muted-foreground hover:decoration-foreground inline-flex items-center gap-1 underline underline-offset-4 transition-colors"
                    >
                      AI-powered accessibility tool
                      <GitHubIcon className="size-3" />
                    </a>{" "}
                    built in 24 hours or engineering{" "}
                    <a
                      href="https://github.com/Panemiko/WebStats"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground decoration-muted-foreground hover:decoration-foreground inline-flex items-center gap-1 underline underline-offset-4 transition-colors"
                    >
                      real-time systems
                      <GitHubIcon className="size-3" />
                    </a>
                    .
                  </p>
                  <p className="text-foreground font-medium">
                    Today, I&apos;m looking for my next challenge where I can
                    focus on craft and high-impact solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="text-foreground/50 mt-32 flex flex-col gap-1 text-[10px] tracking-[0.2em] md:text-[12.5px]">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
