'use client'

import * as RadixHoverCard from '@radix-ui/react-hover-card'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Avatar, Button } from '.'

type HoverUserCardProps = {
  id: string
  image: string
  name: string
}

const hoverCardContentStyles = cva(
  'data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-60 rounded-md bg-white p-5 shadow-lg data-[state=open]:transition-all'
)

export function HoverCard({ id, image, name }: HoverUserCardProps) {
  return (
    <RadixHoverCard.Root>
      <RadixHoverCard.Trigger asChild>
        <Link href="/">
          <Avatar src={image} alt={name} fallback={name} />
        </Link>
      </RadixHoverCard.Trigger>
      <RadixHoverCard.Portal>
        <RadixHoverCard.Content
          className={twMerge(hoverCardContentStyles())}
          sideOffset={5}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Avatar src={image} alt="" fallback="" />
              <div className="font-medium">{name}</div>
            </div>
            <Link href={`/profiles/${id}`}>
              <Button>View profile</Button>
            </Link>
          </div>

          <RadixHoverCard.Arrow className="fill-white" />
        </RadixHoverCard.Content>
      </RadixHoverCard.Portal>
    </RadixHoverCard.Root>
  )
}
