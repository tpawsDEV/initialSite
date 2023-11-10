// PaginationControls.tsx
'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '5'

  return (
    <div className='flex gap-2 justify-center items-center  mt-3'>
      <button
        className='text-foreground p-1'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/sales?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
        prev page
      </button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <Button
        variant={"ghost"}
        className='text-foreground p-1'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/sales?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        next page
      </Button>
    </div>
  )
}

export default PaginationControls