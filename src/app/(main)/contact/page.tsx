"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/shared/social-icons";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { CustomLink } from "@/components/shared/custom-link";
import { useEffect, useState } from "react";
import { MaxWidth } from "@/components/shared/max-width";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // Decode email only on the client to hide it from SSR-based bots
    // "dGl0b2x1Y2Nhb0BnbWFpbC5jb20=" is base64 for "titoluccao@gmail.com"
    setEmail(atob("dGl0b2x1Y2Nhb0BnbWFpbC5jb20="));
  }, []);

  const copyToClipboard = async () => {
    if (!email) return;
    await navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const contactItems = [
    {
      name: "GitHub",
      link: "https://github.com/panemiko",
      icon: GitHubIcon,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/tito-oliveira",
      icon: LinkedInIcon,
    },
  ];

  return (
    <MaxWidth>
      <section className="relative mb-16">
        <div className="pointer-events-none fixed right-[-10%] bottom-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[120px]" />
        <div className="mb-2 flex items-center gap-3 md:gap-4">
          <Mail className="size-8 text-red-500 md:size-10" />

          <h1 className="font-heading text-xl font-medium tracking-tight md:text-[1.5625rem]">
            Contato
          </h1>
        </div>
        <p className="font-heading text-foreground/50 md:text-xl">
          Sinta-se à vontade para entrar em contato através de qualquer uma das
          plataformas abaixo.
        </p>
      </section>

      <section>
        <div className="flex flex-col gap-6">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <CustomLink
                key={item.name}
                href={item.link}
                variant="unstyled"
                className="group hover:border-primary border-border flex items-center justify-between border-b py-1 transition-colors md:py-2 md:text-xl"
              >
                <div className="flex items-center gap-3">
                  <Icon className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors" />
                  <span className="font-medium">{item.name}</span>
                  {item.name === "GitHub" && (
                    <span className="text-muted-foreground/60 ml-2 hidden text-xs opacity-0 transition-opacity duration-200 select-none group-hover:opacity-100 min-[450px]:inline">
                      (não dá pra me contatar mas eu tinha que colocar em algum
                      lugar)
                    </span>
                  )}
                </div>
                <span className="group-hover:text-primary text-muted-foreground shrink-0 transition-colors">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-6 md:w-6" />
                </span>
              </CustomLink>
            );
          })}

          {/* Email Item (Client-only rendering for the string) */}
          <button
            onClick={copyToClipboard}
            className="group hover:border-primary border-border flex w-full cursor-pointer items-center justify-between border-b py-1 text-left transition-colors md:py-2 md:text-xl"
          >
            <div className="flex items-center gap-3">
              <Mail className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors" />
              <span className="font-medium">
                {isCopied ? "Copiado!" : email || "E-mail"}
              </span>
            </div>
            <span className="group-hover:text-primary text-muted-foreground shrink-0 transition-colors">
              {isCopied ? (
                <Check className="h-5 w-5 md:h-6 md:w-6" />
              ) : (
                <Copy className="h-5 w-5 md:h-6 md:w-6" />
              )}
            </span>
          </button>
        </div>
      </section>

      <footer className="text-foreground/50 mt-32 flex flex-col gap-1 text-[10px] tracking-[0.2em] md:text-[12.5px]">
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </MaxWidth>
  );
}
