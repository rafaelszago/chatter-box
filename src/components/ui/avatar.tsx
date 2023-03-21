'use client'

import * as RadixAvatar from '@radix-ui/react-avatar'
import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { getInitials } from '../helpers/get-initials'

export const avatarRootStyles = cva(
  'inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle',
  {
    variants: {
      size: {
        md: 'h-10 w-10'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

export const avatarImageStyles = cva('h-full w-full rounded-full')

export const avatarTextStyles = cva(
  'leading-1 flex h-full w-full items-center justify-center bg-white text-black font-bold'
)

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof RadixAvatar.Root> {
  src: string
  alt: string
  fallback: string
}

export const Avatar = forwardRef<
  React.ElementRef<typeof RadixAvatar.Root>,
  AvatarProps
>(({ src, alt, fallback, ...props }, ref) => {
  return (
    <RadixAvatar.Root
      ref={ref}
      className={twMerge(avatarRootStyles())}
      {...props}
    >
      <RadixAvatar.Image
        src={src}
        alt={alt}
        className={twMerge(avatarImageStyles())}
      />
      <RadixAvatar.Fallback
        delayMs={500}
        className={twMerge(avatarTextStyles())}
      >
        {getInitials(fallback)}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
})

Avatar.displayName = 'Avatar'
