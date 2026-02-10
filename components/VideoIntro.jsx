'use client'

import { useState, useEffect } from 'react'

export default function VideoIntro() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000) // 5 secondes pour la vidéo

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        onEnded={() => setIsVisible(false)}
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
      
      {/* Overlay avec texte si nécessaire */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">
            حنكــة
          </h1>
          <p className="text-lg md:text-xl opacity-80">
            حيث تلتقي الحكمة بالاستثمار
          </p>
        </div>
      </div>
    </div>
  )
}
