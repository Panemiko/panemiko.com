import { CustomLink } from "@/components/shared/custom-link";
import { MaxWidth } from "@/components/shared/max-width";
import { GitHubIcon } from "@/components/shared/social-icons";
import { Button } from "@/components/ui/button";
import { FileText, Layout, MessageSquare } from "lucide-react";

export default function Page() {
  return (
    <MaxWidth>
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="mb-2 flex items-center gap-3 md:gap-4">
          <h1 className="font-heading text-xl font-medium tracking-tight md:text-[2.5rem] md:leading-tight">
            Tito Oliveira
          </h1>
        </div>
        <p className="font-heading text-foreground/50 md:text-2xl">
          Desenvolvedor Web Full-Stack em Porto Alegre, Brasil.
        </p>
      </section>

      {/* About Section */}
      <section className="mb-24 max-w-2xl">
        <h2 className="font-heading text-muted-foreground mb-6 text-sm font-semibold tracking-widest uppercase md:text-lg">
          Sobre
        </h2>
        <div className="text-muted-foreground space-y-4 md:text-xl md:leading-relaxed">
          <p>
            <strong className="text-foreground">Olá, eu sou o Tito 👋</strong>
          </p>
          <p>
            Alguém que tenta sempre fazer a coisa mais ridícula possível, porque
            quando der certo vai ser engraçado.
          </p>
          <p>
            Atualmente em busca de uma oportunidade como{" "}
            <strong className="text-foreground">Engenheiro de Software</strong>.{" "}
            Tem uma ideia, quer fazer uma crítica ou apenas conversar? Fique a
            vontade para <CustomLink href="/contact">falar comigo</CustomLink>.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="font-heading text-muted-foreground mb-8 text-sm font-semibold tracking-widest uppercase md:text-lg">
          Ações Rápidas
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-auto w-full justify-start gap-3 px-6 py-4 md:text-lg"
          >
            <CustomLink href="/contact" variant="unstyled">
              <MessageSquare className="text-primary size-5" />
              <span>Fale Comigo</span>
            </CustomLink>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-auto w-full justify-start gap-3 px-6 py-4 md:text-lg"
          >
            <CustomLink href="/projects" variant="unstyled">
              <Layout className="text-primary size-5" />
              <span>Meus Projetos</span>
            </CustomLink>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-auto w-full justify-start gap-3 px-6 py-4 md:text-lg"
          >
            <CustomLink href="/articles" variant="unstyled">
              <FileText className="text-primary size-5" />
              <span>Meus Artigos</span>
            </CustomLink>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group h-auto w-full justify-start gap-3 px-6 py-4 md:text-lg"
          >
            <CustomLink href="https://github.com/panemiko" variant="unstyled">
              <GitHubIcon className="text-primary size-5" />
              <span>Meu GitHub</span>
            </CustomLink>
          </Button>
        </div>
      </section>

      <footer className="text-foreground/50 mt-32 flex flex-col gap-1 text-[10px] tracking-[0.2em] md:text-[12.5px]">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </MaxWidth>
  );
}
