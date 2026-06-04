import Link from "next/link";

export default function Page() {
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

  const contact = [
    { name: "GitHub", link: "https://github.com/panemiko" },
    { name: "LinkedIn", link: "https://linkedin.com/in/tito-oliveira" },
    { name: "titoluccao@gmail.com", link: "mailto:titoluccao@gmail.com" },
  ];

  return (
    <main className="max-w-4xl px-12 pt-16 pb-24 md:max-w-6xl md:px-24 md:pt-24 md:pb-32 lg:ml-[8%]">
      <section className="mb-16">
        <h1 className="font-heading mb-2 text-xl font-medium tracking-tight md:text-[1.5625rem]">
          Tito Oliveira
        </h1>
        <p className="font-heading text-foreground/50 md:text-xl">
          Web Full-Stack Developer based in Porto Alegre, Brazil.
        </p>
      </section>
      <div className="mb-16 grid gap-12 md:grid-cols-[300px_1fr] md:gap-24">
        <section>
          <h2 className="font-heading text-muted-foreground mb-4 text-sm font-semibold tracking-widest uppercase md:text-lg">
            My projects
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

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-semibold tracking-widest uppercase md:text-lg">
          Contact
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          {contact.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:border-primary hover:text-primary w-fit border-b border-transparent transition-colors md:text-xl"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </section>

      <footer className="text-foreground/50 mt-32 flex flex-col gap-1 text-[10px] tracking-[0.2em] md:text-[12.5px]">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
