import { LayoutTemplate } from "lucide-react";
import { Link } from "next-view-transitions";

export default function ProjectsPage() {
  const codingProjects = [
    { name: "Paperflow", link: "https://github.com/panemiko/paperflow" },
    { name: "ImageReader", link: "https://github.com/Panemiko/image-reader" },
    { name: "Chimera", link: "https://github.com/Panemiko/Chimera" },
    { name: "CRM", link: "https://github.com/Panemiko/CRM" },
  ];

  const commercialProjects = [
    { name: "getpaperflow.com", link: "https://getpaperflow.com" },
    { name: "cobuilt.com.br", link: "https://cobuilt.com.br" },
    {
      name: "clinicamichelecardoso.com.br",
      link: "https://clinicamichelecardoso.com.br",
    },
    {
      name: "unintersantacruz.com.br",
      link: "https://unintersantacruz.com.br",
    },
  ];

  return (
    <>
      <section className="relative mb-16">
        <div className="pointer-events-none fixed right-[-10%] bottom-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="mb-2 flex items-center gap-3 md:gap-4">
          <LayoutTemplate className="size-8 text-purple-500 md:size-10" />

          <h1 className="font-heading text-xl font-medium tracking-tight md:text-[1.5625rem]">
            Projects
          </h1>
        </div>
        <p className="font-heading text-foreground/50 md:text-xl">
          A collection of projects I&apos;ve built.
        </p>
      </section>

      <div className="mb-16 grid gap-12 md:grid-cols-[300px_1fr] md:gap-24">
        <section>
          <h2 className="font-heading text-muted-foreground mb-4 text-sm font-semibold tracking-widest uppercase md:text-lg">
            My Projects
          </h2>
          <ul className="space-y-3">
            {codingProjects.map((project) => (
              <li key={project.name}>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:border-primary border-border flex items-center justify-between border-b py-1 transition-colors md:py-2 md:text-xl"
                >
                  <span>{project.name}</span>
                  <span className="group-hover:text-primary text-muted-foreground transition-colors">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-muted-foreground mb-4 text-sm font-semibold tracking-widest uppercase md:text-lg">
            Pages made by me
          </h2>
          <ul className="space-y-3">
            {commercialProjects.map((project) => (
              <li key={project.name}>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hover:border-primary border-border flex items-center justify-between border-b py-1 transition-colors md:py-2 md:text-xl"
                >
                  <span>{project.name}</span>
                  <span className="group-hover:text-primary text-muted-foreground transition-colors">
                    ↗
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="text-foreground/50 mt-32 flex flex-col gap-1 text-[10px] tracking-[0.2em] md:text-[12.5px]">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}
