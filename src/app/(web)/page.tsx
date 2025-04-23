import { MaxWidth } from "@/components/max-width";
import { CustomButton } from "@/components/ui/custom-button";
import { WebsitesCarousel } from "./websites-carousel";

export default function Page() {
  return (
    <main>
      <section className="relative overflow-x-clip pb-40">
        {/* shadow */}
        <div className="from-pink/20 absolute -top-20 -left-20 -z-20 h-full w-[150vw] bg-linear-to-b to-transparent pb-20 blur-3xl" />

        <MaxWidth className="pt-28">
          <h1 className="text-secondary font-title mb-5 text-center leading-6 tracking-tighter uppercase">
            Transforme sua presença online e conquiste mais clientes
          </h1>
          <h2 className="font-title text-foreground mb-16 text-center text-5xl uppercase">
            Tenha o site que seu negócio precisa
          </h2>
          <p className="text-foreground/70 mb-20 text-center">
            Com anos de experiência no mercado web, tenha para você ou seu
            negócio um site que não só te representa, mas também que seja
            estratégico e otimizado para conversão. Pode confiar em nós para
            criar a presença online que o seu negócio merece.
          </p>
          <CustomButton className="mb-3 w-full">
            Peça um orçamento gratuito
          </CustomButton>
          <p className="text-foreground/70 text-center text-xs">
            Descubra o Site Ideal para o Seu Negócio
          </p>
        </MaxWidth>
      </section>

      <div className="relative mb-32 pb-40">
        <WebsitesCarousel />

        {/* strips */}
        <div className="absolute -bottom-42 grid w-full grid-cols-3">
          <div className="bg-blue h-48 w-full" />
          <div className="bg-green h-64 w-full" />
          <div className="bg-pink h-88 w-full" />
        </div>
      </div>

      <section className="py-32">
        <MaxWidth>
          <h2 className="font-title text-foreground mb-12 text-4xl uppercase">
            Não tenha um site vazio e sem alma
          </h2>
          <p className="text-foreground/70">
            Você já deve ter visto um site de uma empresa que te deixou na
            dúvida do que ela de fato ofertava ou se aquele era realmente o site
            certo. Sites assim não engajam o visitante e trazem a perda de
            vendas e uma má impressão da sua marca.
          </p>
          <p className="text-foreground/70">
            O seu site não pode ser assim. Um website que realmente te ajuda a
            vender mais deve ser otimizado e pensado desde o início para sua
            empresa e sua necessidade, com foco em converter visitantes em
            clientes, independente da forma que você vende.
          </p>
        </MaxWidth>
      </section>

      <section className="relative overflow-x-clip py-32">
        {/* shadow */}
        <div className="bg-linear-to-b from-green/10 to-transparent absolute top-20 left-1/2 -z-20 h-full w-[600px] -translate-x-1/2 pb-20 blur-3xl" />

        <MaxWidth>
          <h2 className="font-title text-foreground mb-12 text-center text-4xl uppercase">
            O que importa para suas vendas
          </h2>
          <div className="space-y-10">
            <div className="bg-background border-secondary/50 rounded-lg border-2 px-4 py-10">
              <h3 className="mb-6 text-center text-2xl font-bold">
                Velocidade de carregamento
              </h3>
              <p className="text-foreground/70 text-center">
                Por mais que não pareça, o tempo de carregamento de um site
                comercial é um dos fatores mais importantes para ele dar certo.
                Quase metade dos visitantes desistem se o site demorar mais de 2
                segundos para abrir. [25]
              </p>
            </div>
            <div className="bg-background border-secondary/50 rounded-lg border-2 px-4 py-10">
              <h3 className="mb-6 text-center text-2xl font-bold">
                Estrutura otimizada
              </h3>
              <p className="text-foreground/70 text-center">
                Um site sem uma estrutura de vendas otimizada pode dificultar
                para seus clientes se acharem, resultando em uma perda de
                clientes. Um site bem estruturado pode aumentar em até 80% o
                número de conversões. [36]
              </p>
            </div>
          </div>
        </MaxWidth>
      </section>
    </main>
  );
}
