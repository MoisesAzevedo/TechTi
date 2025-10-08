"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
/* import { Icons } from "@/components/icons"; */
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import styles from "./navigation.module.scss";
import DefaultButton from "../Buttons/DefaultButton";
import { Button } from "@/components/ui/button";

const solutionsItems: { title: string; href: string; description: string }[] = [
  {
    title: "Manutenção",
    href: "/manutencao",
    description: "Manutenção preventiva e corretiva de equipamentos e sistemas de TI para garantir máximo desempenho."
  },
  {
    title: "Gestão de T.I.",
    href: "/solucoes/gestao",
    description: "Gestão completa da infraestrutura de TI, otimizando recursos e processos da sua empresa."
  },
  {
    title: "Infraestrutura",
    href: "/solucoes/infraestrutura",
    description: "Implementação e modernização de infraestrutura tecnológica robusta e escalável."
  },
  {
    title: "Consultoria",
    href: "/solucoes/consultoria",
    description: "Consultoria especializada em tecnologia para orientar as melhores decisões estratégicas."
  }
];

const aboutItems: { title: string; href: string; description: string }[] = [
  {
    title: "Nossa História",
    href: "/sobre/historia",
    description: "Conheça a trajetória da TechTI e como nos tornamos referência em tecnologia."
  },
  {
    title: "Missão e Valores",
    href: "/sobre/missao",
    description: "Nossos princípios e compromissos que guiam cada projeto e relacionamento."
  },
  {
    title: "Equipe",
    href: "/sobre/equipe",
    description: "Profissionais especializados e certificados em diversas tecnologias."
  },
  {
    title: "Certificações",
    href: "/sobre/certificacoes",
    description: "Reconhecimentos e certificações que garantem a qualidade dos nossos serviços."
  },
  {
    title: "Parceiros",
    href: "/sobre/parceiros",
    description: "Empresas e organizações que confiam em nossa expertise tecnológica."
  },
  {
    title: "Carreira",
    href: "/sobre/carreira",
    description: "Oportunidades de crescimento profissional em um ambiente inovador."
  }
];

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content."
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
];

export function Navigation() {
  return (
    <NavigationMenu className={styles.header}>
      {/* exists a div here. Style in styles.header child(1) */}
      <NavigationMenuList className={styles.nav}>
        <Link href="/">
          <img className={styles.logo} src="./logo/favicon.svg" />
        </Link>

        <div className={styles.navigation_container}>
          <NavigationMenuItem className={styles.navigation_item}>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
              Soluções
            </NavigationMenuTrigger>

            <NavigationMenuContent className={styles.navigation_content}>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-4">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md p-6 no-underline outline-none focus:shadow-md relative overflow-hidden"
                      href="/solucoes"
                      style={{
                        backgroundImage: 'url("/img/backgrounds/escritorio.avif")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="relative z-10">
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          TechTI Soluções
                        </div>
                        <p className="text-[14px] leading-tight text-white/90">
                          Soluções completas em tecnologia para impulsionar seu negócio.
                        </p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
                {solutionsItems.map((solution) => (
                  <ListItem
                    key={solution.title}
                    title={solution.title}
                    href={solution.href}
                  >
                    {solution.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Quem Somos</NavigationMenuTrigger>
            <NavigationMenuContent className={styles.navigation_content}>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {aboutItems.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contato
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>

        <div className={styles.buttons}>
          <Button
            asChild
            variant="outline"
            className={
              "bg-[#CCD6FF] border-none hover:bg-primary hover:shadow-[0_0_6px_#5AFF60]  w-[137px] h-[39px] text-[#030B4D] text-[16px] font-bold"
            }
          >
            <a
              href="https://blog.techti.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </Button>
          <DefaultButton value="Suporte" />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-[14px] font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-[14px] leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
