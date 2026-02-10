'use client'

import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor')

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      }
    }

    document.addEventListener('mousemove', moveCursor)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return <div className="custom-cursor" />
}
