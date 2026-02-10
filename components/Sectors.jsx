'use client'

import { useEffect, useRef } from "react"
import Image from 'next/image'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "@/styles/style"

gsap.registerPlugin(ScrollTrigger)

const sectors = [
  { src: '/images/sector1.png', alt: 'قطاع عقاري' },
  { src: '/images/sector2.png', alt: 'قطاع صناعي' },
  { src: '/images/sector3.png', alt: 'قطاع سياحي' },
  { src: '/images/sector4.png', alt: 'قطاع لوجستي' },
  { src: '/images/sector5.png', alt: 'الإستثمار الدولي' },
  { src: '/images/sector6.png', alt: 'القطاع المالي' },
]

export default function Sectors() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".sector-item")

      gsap.fromTo(titleRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
          }
        }
      )

      gsap.fromTo(items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      className={`px-4 py-8 bg-purple-900 lg:py-20 lg:px-20`}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 md:gap-8">
          <h1 ref={titleRef} className={`${styles.title} text-center`}>
            مجالات <br className="hidden lg:block" /> الإستثمار 
          </h1>
          <p className="text-[12px] lg:text-[22px] text-textColor font-medium leading-relaxed text-center max-w-[100%] md:max-w-[450px]">
            نعمل على تنويع محفظتنا ضمن مجالات نُتقنها، ونؤمن بأهميتها لمستقبل الاقتصاد
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="sector-item relative w-full h-56 md:h-64 lg:h-72 overflow-hidden rounded-xl shadow-lg group"
            >
              {/* Image */}
              <Image
                src={sector.src}
                alt={sector.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Overlay background semi-transparent */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Texte ALT agrandi */}
              <div className="absolute top-6 right-6 text-white font-bold text-[20px] md:text-[35px] font-[800] z-10">
                {sector.alt}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
