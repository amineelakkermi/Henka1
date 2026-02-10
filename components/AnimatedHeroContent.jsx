'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiArrowLeft } from "react-icons/hi";
import realEstate from '../public/images/realEstate.png';
import styles from '@/styles/style';

const AnimatedHeroContent = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();
  const buttonsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.clearScrollMemory();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        }
      });

      tl.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
      })
        .from(textRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8
        }, "-=0.6")
        .from(buttonsRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.7)'
        }, "-=0.5");

      buttonsRef.current.forEach(btn => {
        btn?.addEventListener("mouseenter", () => {
          gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });
        btn?.addEventListener("mouseleave", () => {
          gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
      });


    }, heroRef);

    // Forcer le refresh pour corriger le bug d'affichage initial
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert(); // nettoie tout
    };
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center"
    
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

      {/* Titre */}
      <h1 ref={titleRef} className={`${styles.title}`}>
        حنكــة  حيث تلتقي الحكمة بالاستثمار
      </h1>

      {/* Paragraphe */}
      <p ref={textRef} className={`${styles.paragraph} text-right`}>
        نحن مكتب استثمار عائلي (Family Office) نعمل على تنمية ثروات العائلة برؤية استراتيجية طويلة المدى.
        <br className="hidden md:block" />
        نُترجم القيم العائلية إلى قرارات استثمارية متزنة، تُوازن بين الطموح والاتزان، وتُحقق الاستدامة عبر الأجيال.
      </p>

      {/* Boutons */}
      <div className="flex flex-row gap-4 mt-10">
       
        <a
          ref={el => buttonsRef.current[1] = el}
          href="#investment"
          className="bg-white max-w-[250px] transition-colors duration-300 py-3 px-6 text-black text-[16px] flex items-center justify-center gap-2"
        >
          استكشف استثماراتنا
          <HiArrowLeft className="text-[18px]" />
        </a>

         <a
          ref={el => buttonsRef.current[0] = el}
          href="/contact"
          className="border  max-w-[250px] transition-colors duration-300 py-3 px-6 text-white text-[16px] flex items-center justify-center gap-2"
        >
          تواصل معنا
        </a>
      </div>
      </div>
    </div>
  );
};

export default AnimatedHeroContent;


