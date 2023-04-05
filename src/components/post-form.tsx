'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader, Send } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'
import { Avatar, Button, inputStyles } from './ui'

const postCreateSchema = z.object({
  content: z.string().min(1).max(255, { message: 'Max 255 characters' })
})

type PostFormData = z.infer<typeof postCreateSchema>

type PostFormProps = {
  name: string
  image: string
}

export function PostForm({ name, image }: PostFormProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, isValid, errors }
  } = useForm<PostFormData>({
    mode: 'all',
    resolver: zodResolver(postCreateSchema)
  })

  const onSubmit = async (data: PostFormData) => {
    await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    reset({
      content: ''
    })

    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:flex items-start gap-6"
      >
        <div>
          <Avatar src={image} alt={name} fallback={name} />
        </div>
        <div className="w-full mt-3 md:mt-0">
          <div className="md:flex justify-between items-center mb-3">
            <p className="text-sm">Hey {name}, what&apos;s happening?</p>
            <p className="text-xs text-gray-500">
              Characters:{' '}
              <span
                className={errors.content?.message && 'text-red-500 font-bold'}
              >
                {watch('content')?.length ?? 0}
              </span>{' '}
              of 255
            </p>
          </div>
          <div className="md:relative md:flex">
            <input
              disabled={isSubmitting}
              className={twMerge(inputStyles(), 'block')}
              {...register('content')}
            />
            <div className="md:absolute inset-y-0 right-0 flex py-1.5 pr-2">
              <Button
                type="submit"
                variant="outlined"
                disabled={isSubmitting || !isValid || isPending}
                className="w-full mt-3 md:mt-0 md:w-fit"
              >
                {isSubmitting ? <Loader size={14} /> : <Send size={14} />}
                <span className="ml-3">Post</span>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
