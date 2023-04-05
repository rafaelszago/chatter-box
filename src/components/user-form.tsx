'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader } from 'lucide-react'
import { User } from 'next-auth'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'
import { Button, inputStyles } from './ui'

const userUpdateSchema = z.object({
  name: z.string().min(4).max(40)
})

type UserUpdateData = z.infer<typeof userUpdateSchema>

type UserFormProps = {
  user: User | undefined
}

export default function UserForm({ user }: UserFormProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors }
  } = useForm<UserUpdateData>({
    mode: 'all',
    resolver: zodResolver(userUpdateSchema),
    values: {
      name: user?.name ?? ''
    }
  })

  const onSubmit = async (data: UserUpdateData) => {
    await fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="text-sm mb-2">Email</label>
        <input
          className={twMerge(inputStyles(), 'mt-2')}
          value={user?.email ?? ''}
          disabled
        />
      </div>
      <div>
        <label className="text-sm">Name</label>
        <input
          className={twMerge(inputStyles(), 'mt-2')}
          {...register('name')}
        />
        <p className="text-xs font-medium text-red-500 mt-3">
          {errors.name?.message}
        </p>
      </div>
      <div>
        <Button
          type="submit"
          disabled={isSubmitting || !isValid || isPending}
          className="w-full md:w-fit"
        >
          {isSubmitting && <Loader size={14} className="mr-3" />}
          Update
        </Button>
      </div>
    </form>
  )
}
