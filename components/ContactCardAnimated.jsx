'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

const ContactCardAnimated = () => {
  const cardRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
    )
  }, [])

  return (
    <div
      ref={cardRef}
      className="relative w-[80%] h-[500px] rounded-[25px] border border-[#222] bg-white/10 backdrop-blur-lg shadow-lg flex flex-col gap-5 justify-center items-center transition-all duration-300 hover:backdrop-blur-lg"
    >
      <h2 className="text-[35px] lg:text-[55px] font-bold z-40">
        هل ترغب بالتواصل معنا ؟
      </h2>
      <p className="text-textColor text-[20px] md:text-[25px] max-w-[60%] z-40">
        نفتح باب النقاش مع شركاء مؤمنين بالاستثمار طويل الأمد، والرؤية المستدامة.
      </p>
      <Link
        href="/contact"
        className="border border-white max-w-[95%] md:max-w-[250px] mt-5 text-white
        hover:bg-white hover:text-black transition-colors duration-300 py-3 px-6 rounded-full font-ghaith text-[16px] flex items-center justify-center gap-2"
      >
        تواصل معنا
      </Link>
    </div>
  )
}

export default ContactCardAnimated
