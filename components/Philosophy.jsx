"use client"
// components/Philosophy.jsx
import { philosophy } from "@/constants/data"
import styles from "@/styles/style"
import PhilosophyContent from "./PhilosophyContent"
import Image from "next/image"
import H from "../public/images/H.png"

const Philosophy = () => {
 
  return (
    <section
      id="phl"
      className={`w-full relative bg-white text-purple-900 py-12 lg:py-20 px-4 lg:px-20 overflow-hidden`}
    >
      {/* المحتوى الرئيسي */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10">
        <PhilosophyContent philosophy={philosophy} styles={styles} />
      </div>
    </section>
  )
}

export default Philosophy
