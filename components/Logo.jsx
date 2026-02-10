'use client'

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import bgImageBig from "../public/images/animation.png"
import bgImageMedium from "../public/images/animation2.png"
import gsap from "gsap"

const Logo = ({ onFinish }) => {
  const sectionRef = useRef()
  const bgRef = useRef()
  const [isMedium, setIsMedium] = useState(false)

  // Detecte la largeur de l'écran pour choisir l'image
  useEffect(() => {
    const checkWidth = () => {
      setIsMedium(window.innerWidth < 768)
    }
    checkWidth()
    window.addEventListener("resize", checkWidth)
    return () => window.removeEventListener("resize", checkWidth)
  }, [])

  const bgImage = isMedium ? bgImageMedium : bgImageBig

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onFinish?.()
      }
    })

    tl.set(sectionRef.current, { opacity: 1 })

    tl.fromTo(
      bgRef.current,
      { scale: 1.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.out"
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen w-full flex justify-center items-center bg-purple-800 opacity-0"
    >
      <div
        ref={bgRef}
        className="relative w-screen h-screen"
      >
        <Image
          src={bgImage}
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}

export default Logo
