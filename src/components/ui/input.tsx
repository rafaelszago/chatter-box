import { cva } from 'class-variance-authority'

export const inputStyles = cva(
  'text-sm border-0 bg-gray-50 w-full focus:outline-none focus:bg-gray-100 rounded-md p-3 text-gray-700 placeholder:text-gray-600 focus:ring-0 focus:shadow-none disabled:text-gray-400'
)
