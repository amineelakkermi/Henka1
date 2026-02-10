'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PhilosophyContent = ({ philosophy, styles }) => {
  const titleRef = useRef();
  const textRef = useRef();
  const principleRefs = useRef([]);

  useEffect(() => {
    const allRefs = [titleRef, textRef, ...principleRefs.current];

    allRefs.forEach((ref, index) => {
      if (!ref?.current) return;

      gsap.fromTo(
        ref.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Titre et texte */}
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h1 ref={titleRef} className={`${styles.title} text-start`}>
          فلسفتنا الإستثمارية
        </h1>
        <p
          ref={textRef}
          className="text-[14px] lg:text-[22px] text-center lg:text-center text-textColor font-medium max-w-[100%] md:max-w-[750px] leading-relaxed"
        >
          في حنكــة، ندير استثماراتنا كما نحرص على حياتنا، حرصًا على تقديم قيمة
          مستدامة، تحترم المبادئ، وتلبي التطلعات.
        </p>
      </div>

      {/* Liste des principes */}
      <div className="w-full flex justify-center items-center flex-col gap-6 mt-6 md:mt-12">
        {philosophy.principles.map((principle, index) => (
          <div
            key={index}
            ref={(el) => (principleRefs.current[index] = { current: el })}
            className={`
             
                 bg-[#1a1c1d] hover:bg-[#2a2c2d] text-white
                
             rounded-xl px-5 py-4 text-[18px] flex justify-center w-[90%] md:w-[650px] text-textColor leading-relaxed transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-default`}
          >
           <p className="text-[14px] lg:text-[22px]">{principle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhilosophyContent;
