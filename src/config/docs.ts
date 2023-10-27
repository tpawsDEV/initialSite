import { MainNavItem, SidebarNavItem } from "@/types/nav";

type DocsConfig = {
  mainNav: (MainNavItem | SidebarNavItem)[];
  sidebarNav: SidebarNavItem[];
  userNav: MainNavItem[];
};

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Campanhas",
      items: [
        {
          title: "Piloto Automatico",
          href: "/piloto-automatico",
          label: "piloto-automatico",
          description: "Configure as suas campanhas de piloto automatico",
          items: [],
        },
        {
          title: "Minhas Campanhas",
          href: "/minhas-campanhas",
          label: "minhas-campanhas",
          description: "Crie as suas proprias campanhas",
          items: [],
        },
        {
          title: "Historico de campanhas",
          href: "/historico",
          label: "historico-de-campanhas",
          description: "Veja o historico das suas campanhas",
          items: [],
        },
        {
          title: "Cronograma",
          href: "/cronograma",
          label: "cronograma",
          description: "Veja o cronograma das suas campanhas",
          items: [],
        },
      ],
    },
    {
      title: "Programa de Fidelidade",
      items: [
        {
          title: "Piloto Automatico",
          href: "/piloto-automatico",
          items: [],
        },
        {
          title: "Minhas Campanhas",
          href: "/minhas-campanhas",
          items: [],
        },
        {
          title: "Historico-de-campanhas",
          href: "/historico",
          items: [],
        },
        {
          title: "Cronograma",
          href: "/cronograma",
          items: [],
        },
      ],
    },
  ],
  sidebarNav: [
    { title: "Dashboard", href: "/dashboard", items: [{
      title: "Meus Resultados",
      href: "/piloto-automatico",
      label: "piloto-automatico",
      description: "Configure as suas campanhas de piloto automatico",
      items: [],
    },] },
    {
      title: "Campanhas",
      items: [
        {
          title: "Piloto Automatico",
          href: "/piloto-automatico",
          label: "piloto-automatico",
          description: "Configure as suas campanhas de piloto automatico",
          items: [],
        },
        {
          title: "Minhas Campanhas",
          href: "/minhas-campanhas",
          label: "minhas-campanhas",
          description: "Crie as suas proprias campanhas",
          items: [],
        },
        {
          title: "Historico de campanhas",
          href: "/historico",
          label: "historico-de-campanhas",
          description: "Veja o historico das suas campanhas",
          items: [],
        },
        {
          title: "Cronograma",
          href: "/cronograma",
          label: "cronograma",
          description: "Veja o cronograma das suas campanhas",
          items: [],
        },
      ],
    },
    {
      title: "Programa de Fidelidade",
      items: [
        {
          title: "Piloto Automatico",
          href: "/piloto-automatico",
          items: [],
        },
        {
          title: "Minhas Campanhas",
          href: "/minhas-campanhas",
          items: [],
        },
        {
          title: "Historico-de-campanhas",
          href: "/historico",
          items: [],
        },
        {
          title: "Cronograma",
          href: "/cronograma",
          items: [],
        },
      ],
    },
  ],
  userNav: [
    {
      title: "Sair",
      href: "/logout",
    },
  ]
};
