'use client'

import { User } from '@prisma/client'
import { ArrowLeft, Settings } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { Avatar } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from './ui/dropdown-menu'

type UserMenuProps = {
  user: Pick<User, 'image' | 'name'>
}

export function UserMenu({ user }: UserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar
          src={user.image ?? ''}
          alt={user.name ?? 'profile picture'}
          fallback={user.name ?? ''}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.name ?? ''}</DropdownMenuLabel>
        <Link href="/settings">
          <DropdownMenuItem>
            <Settings size={12} /> Settings
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/signin' })}>
          <ArrowLeft size={12} /> Sign Out
        </DropdownMenuItem>
        <DropdownMenuArrow fill="white" />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
