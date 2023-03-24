'use client'

import * as RadixAvatar from '@radix-ui/react-avatar'
import { VariantProps, cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { getInitials } from '../helpers/get-initials'

export const avatarRootStyles = cva(
  'inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle',
  {
    variants: {
      size: {
        md: 'h-10 w-10',
        lg: 'h-14 w-14'
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
  extends VariantProps<typeof avatarRootStyles>,
    React.ComponentPropsWithoutRef<typeof RadixAvatar.Root> {
  src: string
  alt: string
  fallback: string
}

export const Avatar = forwardRef<
  React.ElementRef<typeof RadixAvatar.Root>,
  AvatarProps
>(({ src, alt, fallback, size, ...props }, ref) => {
  return (
    <RadixAvatar.Root
      ref={ref}
      className={twMerge(avatarRootStyles({ size }))}
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
