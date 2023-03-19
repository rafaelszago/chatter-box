import { cva, VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-md transition-colors font-medium',
  {
    variants: {
      variant: {
        default:
          'bg-black text-white hover:bg-gray-800 disabled:bg-gray-600 disabled:text-gray-800',
        outlined:
          'bg-transparent border border-gray-400 text-black hover:border-black'
      },
      size: {
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-2.5'
      },
      fluid: {
        true: 'w-full',
        false: 'w-fit'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      fluid: false
    }
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export function Button({
  children,
  variant,
  size,
  fluid,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(buttonStyles({ variant, size, fluid }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
