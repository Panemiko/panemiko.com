"use client";

import { GitHubIcon, LinkedInIcon } from "@/components/shared/social-icons";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { Link } from "next-view-transitions";
import { useEffect, useState } from "react";

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
      icon: <GitHubIcon className="h-5 w-5 md:h-6 md:w-6" />,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/tito-oliveira",
      icon: <LinkedInIcon className="h-5 w-5 md:h-6 md:w-6" />,
    },
  ];

  return (
    <>
      <section className="relative mb-16">
        <div className="pointer-events-none fixed right-[-10%] bottom-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[120px]" />
        <div className="mb-2 flex items-center gap-3 md:gap-4">
          <Mail className="size-8 text-red-500 md:size-10" />

          <h1 className="font-heading text-xl font-medium tracking-tight md:text-[1.5625rem]">
            Contact
          </h1>
        </div>
        <p className="font-heading text-foreground/50 md:text-xl">
          Feel free to reach out via any of the platforms below.
        </p>
      </section>

      <section>
        <div className="flex flex-col gap-6">
          {contactItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:border-primary border-border flex items-center justify-between border-b py-2 transition-colors md:py-4 md:text-2xl"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </div>
              <span className="group-hover:text-primary text-muted-foreground transition-colors">
                <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
              </span>
            </Link>
          ))}

          {/* Email Item (Client-only rendering for the string) */}
          <button
            onClick={copyToClipboard}
            className="group hover:border-primary border-border flex w-full cursor-pointer items-center justify-between border-b py-2 text-left transition-colors md:py-4 md:text-2xl"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <span className="text-muted-foreground group-hover:text-primary transition-colors">
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
              </span>
              <span className="font-medium">
                {isCopied ? "Copied!" : email || "Email"}
              </span>
            </div>
            <span className="group-hover:text-primary text-muted-foreground transition-colors">
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
    </>
  );
}
