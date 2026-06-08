import {
  LayoutTemplate,
  ArrowUpRight,
  FolderGit2,
  ScanText,
  Cpu,
  Users,
  Globe,
  Building2,
  HeartPulse,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { CustomLink } from "@/components/shared/custom-link";
import { MaxWidth } from "@/components/shared/max-width";

export default function ProjectsPage() {
  const codingProjects: { name: string; link: string; icon: LucideIcon }[] = [
    {
      name: "Paperflow",
      link: "https://github.com/panemiko/paperflow",
      icon: FolderGit2,
    },
    {
      name: "ImageReader",
      link: "https://github.com/Panemiko/image-reader",
      icon: ScanText,
    },
    { name: "Chimera", link: "https://github.com/Panemiko/Chimera", icon: Cpu },
    { name: "CRM", link: "https://github.com/Panemiko/CRM", icon: Users },
  ];

  const commercialProjects: { name: string; link: string; icon: LucideIcon }[] =
    [
      {
        name: "getpaperflow.com",
        link: "https://getpaperflow.com",
        icon: Globe,
      },
      {
        name: "cobuilt.com.br",
        link: "https://cobuilt.com.br",
        icon: Building2,
      },
      {
        name: "clinicamichelecardoso.com.br",
        link: "https://clinicamichelecardoso.com.br",
        icon: HeartPulse,
      },
      {
        name: "unintersantacruz.com.br",
        link: "https://unintersantacruz.com.br",
        icon: GraduationCap,
      },
    ];

  return (
    <MaxWidth>
      <section className="relative mb-16">
        <div className="pointer-events-none fixed right-[-10%] bottom-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="mb-2 flex items-center gap-3 md:gap-4">
          <LayoutTemplate className="size-8 text-purple-500 md:size-10" />

          <h1 className="font-heading text-xl font-medium tracking-tight md:text-[1.5625rem]">
            Projetos
          </h1>
        </div>
        <p className="font-heading text-foreground/50 md:text-xl">
          Uma coleção de projetos que desenvolvi.
        </p>
      </section>

      <div className="mb-16 flex flex-col gap-12">
        <section>
          <h2 className="font-heading text-muted-foreground mb-4 text-sm font-semibold tracking-widest uppercase md:text-lg">
            Meus Projetos
          </h2>
          <ul className="space-y-3">
            {codingProjects.map((project) => {
              const Icon = project.icon;
              return (
                <li key={project.name}>
                  <CustomLink
                    href={project.link}
                    variant="unstyled"
                    className="group hover:border-primary border-border flex items-center justify-between border-b py-1 transition-colors md:py-2 md:text-xl"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="text-muted-foreground h-5 w-5 transition-colors group-hover:text-purple-500" />
                      <span>{project.name}</span>
                    </div>
                    <span className="group-hover:text-primary text-muted-foreground shrink-0 transition-colors">
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-6 md:w-6" />
                    </span>
                  </CustomLink>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-muted-foreground mb-4 text-sm font-semibold tracking-widest uppercase md:text-lg">
            Sites desenvolvidos por mim
          </h2>
          <ul className="space-y-3">
            {commercialProjects.map((project) => {
              const Icon = project.icon;
              return (
                <li key={project.name}>
                  <CustomLink
                    href={project.link}
                    variant="unstyled"
                    className="group hover:border-primary border-border flex items-center justify-between border-b py-1 transition-colors md:py-2 md:text-xl"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="text-muted-foreground h-5 w-5 transition-colors group-hover:text-purple-500" />
                      <span>{project.name}</span>
                    </div>
                    <span className="group-hover:text-primary text-muted-foreground shrink-0 transition-colors">
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-6 md:w-6" />
                    </span>
                  </CustomLink>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <footer className="text-foreground/50 mt-32 flex flex-col gap-1 text-[10px] tracking-[0.2em] md:text-[12.5px]">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </MaxWidth>
  );
}
