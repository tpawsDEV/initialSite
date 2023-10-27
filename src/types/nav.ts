import { Icons } from "@/components/icons"

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  description?: string;
  label?: string;
};

export type NavItemWithChildren = {
  items: NavItemWithChildren[];
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  description?: string;
  label?: string;
}

export type MainNavItem = NavItem & {}

export type SidebarNavItem   = NavItemWithChildren & {}