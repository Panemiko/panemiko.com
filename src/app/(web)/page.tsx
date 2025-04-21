import { MaxWidth } from "@/components/max-width";
import { CustomButton } from "@/components/ui/custom-button";

export default function Page() {
  return (
    <main>
      <section className="relative overflow-x-clip">
        <div className="bg-pink/10 absolute -top-20 -left-20 h-[130%] w-[150vw] pb-20 blur-3xl" />
        <MaxWidth className="pt-28">
          <h1 className="text-secondary font-title mb-5 text-center leading-6 tracking-tighter uppercase">
            Transforme sua presença online e conquiste mais clientes
          </h1>
          <h2 className="font-title text-foreground mb-16 text-center text-6xl uppercase">
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
    </main>
  );
}
