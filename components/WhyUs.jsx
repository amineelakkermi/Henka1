'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/style";
import Image from "next/image";
import { theme } from "@/tailwind.config";

export const why_henka = {
  points: [
    "خبرة عملية في ريادة الأعمال والأسواق المحلية والعالمية",
    "خصوصية وثقة في التعامل",
    "فلسفة متزنة تجمع بين الانضباط والمرونة",
    "تركيز على القيم العائلية والتوريث",
    "شراكات استراتيجية، وليست مجرد استثمارات مالية"
  ]
};

const WhyUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, titleRef.current);


      
    

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="phl"
      className={`relative snap-start min-h-[90vh] flex flex-col justify-center items-center w-full
         bg-white text-purple-900 py-12 lg:py-20 px-6 lg:px-20`}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-12 z-40">

        {/* Titre + Points side by side */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
          {/* Titre */}
          <div className="lg:w-1/2 w-full">
            <h1
            ref={titleRef}
            className={`${styles.title} text-center lg:text-start`}>
              لمــاذا <br /> حـنـكــة ؟
            </h1>
          </div>

          {/* Liste des points */}
          <div className="lg:w-1/2 w-full flex flex-col items-center gap-4">
            {why_henka.points.map((point, index) => (
              <div
                key={index}
                className={` 
                 bg-purple-50 hover:bg-purple-100 text-purple-900
                rounded-xl px-5 py-4 text-[18px] flex justify-center w-[90%] md:w-[500px] leading-relaxed transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-default`}
                    >
                <p className="text-[14px] lg:text-[22px]">
                {point}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
