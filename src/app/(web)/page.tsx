import { MaxWidth } from "@/components/max-width";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CustomButton } from "@/components/ui/custom-button";
import { CustomLink } from "@/components/ui/link";
import { siteConfig } from "@/lib/config";
import { CheckCircleIcon } from "lucide-react";
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
        <div className="from-green/10 absolute top-20 left-1/2 -z-20 h-full w-[600px] bg-linear-to-b to-transparent blur-3xl" />

        <MaxWidth>
          <h2 className="font-title text-foreground mb-12 text-center text-4xl uppercase">
            O que importa para suas vendas
          </h2>
          <div className="space-y-10">
            <div className="bg-background border-secondary/50 rounded-lg border-2 px-4 py-7">
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
            <div className="bg-background border-secondary/50 rounded-lg border-2 px-4 py-7">
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

      <section className="relative overflow-x-clip py-32">
        <div className="bg-secondary px-8 py-16">
          <p className="space-y-4 text-center">
            <span className="text-secondary-foreground font-title block text-5xl font-bold">
              8 em 10
            </span>
            <span className="text-secondary-foreground/70 block uppercase">
              clientes preferem interagir com empresas que têm website
            </span>
          </p>
        </div>
        <div className="bg-background border-b-secondary/50 border-b-2 px-8 py-16">
          <p className="space-y-4 text-center">
            <span className="text-foreground font-title block text-5xl font-bold">
              81%
            </span>
            <span className="text-foreground/70 block uppercase">
              dos consumidores pesquisam online antes de comprar
            </span>
          </p>
        </div>
        <div className="bg-background border-b-secondary/50 border-b-2 px-8 py-16">
          <p className="space-y-4 text-center">
            <span className="text-foreground font-title block text-5xl font-bold">
              75%
            </span>
            <span className="text-foreground/70 block uppercase">
              das pessoas julgam a credibilidade de uma empresa pelo design do
              site
            </span>
          </p>
        </div>
      </section>

      <section className="relative overflow-x-clip py-32">
        {/* shadow */}
        <div className="from-green/10 absolute top-0 left-1/2 -z-20 h-1/2 w-[600px] bg-linear-to-b to-transparent blur-3xl" />

        <MaxWidth>
          {/* image preview */}
          <div className="bg-foreground/10 mb-20 h-[32rem] w-full rounded-lg" />

          <h2 className="font-title text-foreground mb-4 text-left text-4xl uppercase">
            Por que nos escolher?
          </h2>

          <div className="bg-pink mr-2 mb-12 h-6 -skew-x-[30deg]" />

          <div className="space-y-10">
            <div className="bg-background border-secondary/50 rounded-lg border-2 px-4 py-7">
              <h3 className="mb-6 font-bold">Transparência e colaboração</h3>
              <p className="text-foreground/70 text-sm">
                Todas as etapas do processo da criação do seu site vão ser
                supervisionadas por você, com suas opiniões e o que você
                realmente quer.
              </p>
            </div>
            <div className="bg-background border-secondary/50 rounded-lg border-2 px-4 py-7">
              <h3 className="mb-6 font-bold">Paixão por inovação</h3>
              <p className="text-foreground/70 text-sm">
                Utilizamos as tecnologias mais novas no mercado para manter seu
                site seguro, estável e com um visual que impressiona o visitante
                desde o primeiro acesso.
              </p>
            </div>
            <div className="bg-background border-secondary/50 rounded-lg border-2 px-4 py-7">
              <h3 className="mb-6 font-bold">
                Sites pensados para você desde a base
              </h3>
              <p className="text-foreground/70 text-sm">
                Não utilizamos nenhum modelo pronto para criar seu site.
                Pensamos desde a elaboração do conteúdo até a entrega final em
                como podemos fazer o seu objetivo principal com o site ser
                atingido.
              </p>
            </div>
            <div className="bg-background border-secondary/50 rounded-lg border-2 px-4 py-7">
              <h3 className="mb-6 font-bold">Foco no seu objetivo</h3>
              <p className="text-foreground/70 text-sm">
                O seu site deve ter um objetivo claro para alcançar, seja
                conseguir mais contatos de clientes ou vender o seu produto.
                Otimizamos o conteúdo e estrutura da sua página para chegar
                nesse objetivo da melhor forma possível.
              </p>
            </div>
          </div>
        </MaxWidth>
      </section>

      <section className="relative overflow-x-clip py-32">
        <MaxWidth>
          <h2 className="font-title text-foreground mb-12 text-center text-4xl uppercase">
            Como fazemos o seu site?
          </h2>

          <p className="text-foreground/70 mb-24 text-center">
            Criar um site envolve vários processos, mas sempre vamos te dar a
            palavra para comentar e opinar sobre como o seu projeto está
            ficando. O objetivo é traduzir o que você espera para uma página que
            te representa.
          </p>

          <div className="space-y-10">
            <div>
              <div className="bg-accent flex h-40 w-full items-end rounded-t-2xl px-7 py-6">
                <span className="text-accent-foreground text-7xl font-bold">
                  1.
                </span>
              </div>
              <div className="border-accent/50 bg-background border px-7 py-10">
                <h3 className="mb-4 text-xl font-bold">
                  Planejamento e estruturação
                </h3>
                <p className="text-foreground/70 text-sm">
                  Vamos conversar para entender melhor como você espera que o
                  seu projeto fique e o que ele precisa ter para funcionar como
                  planejado.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-accent flex h-40 w-full items-end rounded-t-2xl px-7 py-6">
                <span className="text-accent-foreground text-7xl font-bold">
                  2.
                </span>
              </div>
              <div className="border-accent/50 bg-background border px-7 py-10">
                <h3 className="mb-4 text-xl font-bold">
                  Estrutura e wireframe
                </h3>
                <p className="text-foreground/70 text-sm">
                  Depois do conteúdo ser escrito, ele será organizado em um
                  esboço do que seu site ficará.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-accent flex h-40 w-full items-end rounded-t-2xl px-7 py-6">
                <span className="text-accent-foreground text-7xl font-bold">
                  3.
                </span>
              </div>
              <div className="border-accent/50 bg-background border px-7 py-10">
                <h3 className="mb-4 text-xl font-bold">Design</h3>
                <p className="text-foreground/70 text-sm">
                  Com a estrutura elaborada, vamos dar vida ao seu site, com uma
                  imagem que represente fielmente o que seu site vai ser quando
                  for implementado.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-accent flex h-40 w-full items-end rounded-t-2xl px-7 py-6">
                <span className="text-accent-foreground text-7xl font-bold">
                  4.
                </span>
              </div>
              <div className="border-accent/50 bg-background border px-7 py-10">
                <h3 className="mb-4 text-xl font-bold">
                  Desenvolvimento e implementação
                </h3>
                <p className="text-foreground/70 text-sm">
                  Com o design pronto e aprovado, o site vai ser desenvolvido e
                  colocado no ar.
                </p>
              </div>
            </div>
          </div>
        </MaxWidth>
      </section>

      <section className="bg-card relative my-16 overflow-x-clip py-32">
        <div className="relative mb-32">
          {/* strips */}
          <div className="absolute -bottom-42 grid w-full grid-cols-3">
            <div className="bg-pink h-88 w-full" />
            <div className="bg-green h-64 w-full" />
            <div className="bg-blue h-48 w-full" />
          </div>
        </div>
        <MaxWidth className="pt-28">
          <h2 className="font-title text-foreground mb-12 text-3xl uppercase">
            Mantenha seu site online e funcional 24/7
          </h2>

          <p className="text-foreground/70 mb-24">
            Depois do seu site estar concluído e online, conte conosco para
            manter ele funcionando.   Com o nosso suporte, pode ficar tranquilo
            sabendo que seu site está funcionando como planejado. 
          </p>

          <ol className="mb-40 space-y-4">
            <li className="flex items-center gap-4">
              <CheckCircleIcon className="text-accent" />
              <span className="text-foreground/70">
                Monitoramento de desempenho e otimizações
              </span>
            </li>
            <li className="flex items-center gap-4">
              <CheckCircleIcon className="text-accent" />
              <span className="text-foreground/70">
                Atualizações de segurança e software
              </span>
            </li>
            <li className="flex items-center gap-4">
              <CheckCircleIcon className="text-accent" />
              <span className="text-foreground/70">
                Pequenas atualizações de conteúdo
              </span>
            </li>
            <li className="flex items-center gap-4">
              <CheckCircleIcon className="text-accent" />
              <span className="text-foreground/70">
                Suporte técnico para dúvidas
              </span>
            </li>
            <li className="flex items-center gap-4">
              <CheckCircleIcon className="text-accent" />
              <span className="text-foreground/70">
                Backups regulares para sua tranquilidade
              </span>
            </li>
          </ol>

          <CustomButton className="mb-3 w-full">
            Peça um orçamento gratuito
          </CustomButton>
          <p className="text-foreground/70 text-center text-xs">
            Descubra o Site Ideal para o Seu Negócio
          </p>
        </MaxWidth>
      </section>

      <section className="relative overflow-x-clip py-16">
        {/* shadow */}
        <div className="from-green/10 absolute top-0 left-1/2 -z-20 h-1/2 w-[600px] bg-linear-to-b to-transparent blur-3xl" />

        <MaxWidth>
          {/* image preview */}
          <div className="bg-foreground/10 mb-20 h-[16rem] w-full rounded-lg" />

          <h2 className="font-title text-foreground mb-12 text-left text-4xl uppercase">
            Sobre mim
          </h2>

          <p className="text-foreground/70 mb-8">
            Opa, meu nome é Tito! Moro em Santa Cruz do Sul - RS e desde minha
            adolescência venho fazendo sites e outros projetos relacionados a
            programação e design.
          </p>

          <p className="text-foreground/70 mb-24">
            Sempre tive interesse por desenvolvimento web e principalmente ver
            os limites que não são explorados na criação de sites. Pode contar
            comigo para fazer o seu site se destacar de todos os outros.
          </p>
        </MaxWidth>
      </section>

      <section className="relative overflow-x-clip py-16">
        <MaxWidth>
          <h2 className="font-title text-foreground mb-12 text-left text-4xl uppercase">
            Perguntas frequentes
          </h2>

          <p className="text-foreground/70 mb-20">
            Caso tenha sobrado alguma questão para nós, fique a vontade para nos{" "}
            <CustomLink href={`mailto:${siteConfig.email}`}>
              enviar um e-mail com a sua pergunta
            </CustomLink>
            . Vamos ter o maior prazer em te ajudar!
          </p>

          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Quais tipos de sites vocês criam?
                </AccordionTrigger>
                <AccordionContent>
                  Qualquer tipo de site, desde landing pages para o lançamento
                  de produtos até sites institucionais, para você ter um cartão
                  digital para sua empresa.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Qual é o prazo para a criação de um website?
                </AccordionTrigger>
                <AccordionContent>
                  O prazo está bem aberto para definirmos, nenhum site demorou
                  mais de 6 semanas para ser feito, porém caso o tempo seja
                  importante para você, podemos ver de fazer mais rapidamente.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Vocês oferecem algum tipo de garantia?
                </AccordionTrigger>
                <AccordionContent>
                  Depois do site estar no ar pronto para receber visitantes,
                  você tem direito a pedir até 3 alterações por mês no seu site.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Preciso fornecer todo o conteúdo para o meu site?
                </AccordionTrigger>
                <AccordionContent>
                  Podemos escrever o conteúdo para seu site, mas as informações
                  precisam ser dadas por você. É importante que coisas como
                  meios de pagamento, depoimentos, biografias, ou outras
                  informações relacionadas ao seu negócio sejam verídicas para
                  não afetar a credibilidade da sua marca.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Como funciona o processo de criação do site?
                </AccordionTrigger>
                <AccordionContent>
                  Você pode verificar na seção de processos para saber como nos
                  criamos o seu site.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Terei participação nas etapas de criação?
                </AccordionTrigger>
                <AccordionContent>
                  Sim! Ao final de toda parte do processo de criação do seu site
                  você irá avaliar e nos dar um feedback sobre mudanças e se
                  podemos continuar para a próxima etapa.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Vocês otimizam o site para mecanismos de busca (SEO)?
                </AccordionTrigger>
                <AccordionContent>
                  Escrevemos à mão todas os campos importantes para a otimização
                  do mecânismo de busca do seu site, garantindo que ele seja
                  facilmente encontrado pelos seus potenciais clientes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  O que significa ter um site &quot;otimizado para
                  conversão&quot;?
                </AccordionTrigger>
                <AccordionContent>
                  Significa ter um site que seja pronto e preparado para guiar o
                  visitante até a ação que você deseja que ele realize, como
                  preencher um formulário ou contatar o seu WhatsApp.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>
                  Quanto custa criar um website com vocês?
                </AccordionTrigger>
                <AccordionContent>
                  Não podemos definir um valor fixo para o seu site por conta de
                  diversos fatores, como as diferenças que um site para outro
                  pode ter, tipos de site (institucional ou landing pages),
                  entre outros fatores. Caso queira saber quanto o seu site pode
                  custar,{" "}
                  <CustomLink href="/contate-nos">
                    peça um orçamento grátis para nós
                  </CustomLink>
                  .
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </MaxWidth>
      </section>
    </main>
  );
}
