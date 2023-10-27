import { CommandMenu } from "@/components/menus/command-menu"
import { MainNav } from "@/components/menus/main-nav"
import { MobileNav } from "@/components/menus/mobile-nav"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { UserNav } from "./user-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <ModeToggle />
            <UserNav />
          </nav>
        </div>
      </div>
    </header>
  )
}