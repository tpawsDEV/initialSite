import {
  Cloud,
  Banknote,

  User,
  XCircle,

} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SlOptions } from "react-icons/sl"
import { DialogTrigger } from "@radix-ui/react-dialog"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent w-6 h-6 p-0 hover:bg-transparent">
          <SlOptions style={{ fontSize: "25px"}} className="text-foreground"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <Dialog>
            <DialogTrigger className="w-full">
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <XCircle className="mr-2 h-4 w-4 " />
                <span>Bloquear</span>
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <div className="h-48 p-4 flex-col">
                <div className="text-center text-base md:text-xl p-3">
                  <h4>Tem certeza que você quer bloquear o cliente?</h4>
                </div>
                {/* options */}
                <div className="flex w-full justify-around my-10 md:my-10 ">
                  <Button className="bg-transparent text-foreground hover:bg-transparent md:text-base">Voltar</Button>
                  <Button className="bg-red-500 hover:bg-red-500 md:text-base">Sim, quero bloquear</Button>
                </div>
              </div>

            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger className="w-full">
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <Banknote className="mr-2 h-4 w-4" />
                <span>Reembolso</span>
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <div className="h-48 p-4 flex-col">
                <div className="text-center text-base md:text-xl p-3">
                  <h4>Tem certeza que você quer rembolsar o cliente?</h4>
                </div>
                {/* options */}
                <div className="flex w-full justify-around my-10 md:my-10 ">
                  <Button className="bg-transparent text-foreground hover:bg-transparent md:text-base">Voltar</Button>
                  <Button className="bg-red-500 hover:bg-red-500 md:text-base">Sim, quero reembolsar</Button>
                </div>
              </div>

            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger className="w-full">
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <User className="mr-2 h-4 w-4" />
                <span>Reenviar Acesso</span>
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <div className="h-48 p-4 flex-col">
                <div className="text-center text-base md:text-xl p-3">
                  <h4>Tem certeza que você quer reenviar o cliente?</h4>
                </div>
                {/* options */}
                <div className="flex w-full justify-around my-10 md:my-10 ">
                  <Button variant={"ghost"}>Voltar</Button>
                  <Button variant={"destructive"}>Sim, quero reenviar</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
