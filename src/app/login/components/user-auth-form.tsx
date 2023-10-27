"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaSpinner } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const createUserFormSchema = z.object({
  email: z.string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  password: z.string()
  .nonempty('A senha é obrigatória')
  .min(4, 'A senha precisa de no mínimo 4 caracteres')
  .max(100)
})

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {

  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      resolver: zodResolver(createUserFormSchema)
    }
  );

  function createUser(data: any) {
    console.log(data);
  }



  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(createUser)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <h1 className="text-gray-400 text-base">Email</h1>
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              //autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register('email')}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div className="grid gap-1 ">
            <h1 className="text-gray-400 text-base">Senha</h1>
            <Label className="sr-only" htmlFor="senha">
              senha
            </Label>
            <Input
              placeholder="*******"
              type="password"
              // autoCapitalize="none"
              // autoComplete="password"
              // autoCorrect="off"
              disabled={isLoading}
              {...register('password')}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>
        </div>
        <Button disabled={isLoading} className='w-full mt-5'>
          {isLoading && (
            <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Login
        </Button>

      </form >
    </div >
  )
}

