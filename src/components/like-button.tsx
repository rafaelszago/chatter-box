'use client'

import { Heart } from 'lucide-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

type LikeButtonProps = {
  postId: string
  likes: number
}

export function LikeButton({ postId, likes }: LikeButtonProps) {
  const [currentLikes, setCurrentLikes] = useState(likes)
  const [isLoading, setLoading] = useState(false)

  const handleLike = async () => {
    setLoading(true)

    const response = await fetch(`/api/posts/${postId}/like`, {
      method: 'POST'
    })

    if (response.ok) {
      setCurrentLikes(currentLikes + 1)
    }

    setLoading(false)
  }

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => handleLike()}>
        <Heart
          size={18}
          className={twMerge(
            'fill-gray-300 text-gray-300',
            currentLikes > 0 ? 'fill-red-500 text-red-500' : '',
            isLoading && 'animate-pulse'
          )}
        />
      </button>
      <p className="text-gray-500 text-sm">
        {currentLikes > 0 && currentLikes}
      </p>
    </div>
  )
}
