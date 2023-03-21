import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const cardStyles = cva('rounded-md shadow bg-white border border-gray-100 p-8')

type CardProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ children, className }: CardProps) {
  return <div className={twMerge(cardStyles(), className)}>{children}</div>
}
