'use client'

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

const DropdownMenu = RadixDropdownMenu.Root

const DropdownMenuTrigger = RadixDropdownMenu.Trigger

const DropdownMenuArrow = RadixDropdownMenu.Arrow

const DropdownMenuContent = forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Content>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <RadixDropdownMenu.Portal>
    <RadixDropdownMenu.Content
      ref={ref}
      sideOffset={sideOffset}
      className="bg-white shadow-lg rounded-lg p-2 z-50 min-w-[12rem]"
      {...props}
    />
  </RadixDropdownMenu.Portal>
))

DropdownMenuContent.displayName = 'DropdownMenuContent'

const DropdownMenuItem = forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Item>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Item>
>((props, ref) => (
  <RadixDropdownMenu.Item
    ref={ref}
    className="text-sm px-3 py-2 hover:bg-slate-200 rounded-lg outline-none flex gap-2 items-center cursor-pointer"
    {...props}
  />
))

DropdownMenuItem.displayName = 'DropdownMenuItem'

const DropdownMenuLabel = forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Label>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenu.Label>
>((props, ref) => (
  <RadixDropdownMenu.Label
    ref={ref}
    className="text-xs text-slate-500 font-semibold py-1 px-3"
    {...props}
  />
))

DropdownMenuLabel.displayName = 'DropdownMenuLabel'

export {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
}
