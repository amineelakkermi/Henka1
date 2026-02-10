'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from '@/styles/style';

gsap.registerPlugin(ScrollTrigger);

const AboutAnimatedContent = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const paragraphs = [
    "هي مكتب استثمار عائلي سعودي، تأسس على يد عائلة تمتلك إرثًا من الريادة والاستثمار الممتد لعقود.",
    "نُؤمن أن الثروة مسؤولية، وأن إدارة الأصول لا تتعلق بالأرقام فقط، بل بما تحمله من أثر، ورؤية، واستمرارية.",
    "حنكة ليست مجرد كيان مالي، بل عقلية تعمل على ترجمة قيم العائلة في الحكمة، الانضباط، والرؤية بعيدة المدى، إلى قرارات مالية رشيدة تنمّي الثروة وتحافظ عليها.",
    "نحــن نعمـــل بصمـــت لكـــن بأثـــر عمــيـــق.",
  ];

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
          once: true,
        },
      });


      // Animate each paragraph word by word
      const paragraphEls = gsap.utils.toArray(".animated-paragraph");

      paragraphEls.forEach((el) => {
        const words = el.innerText.trim().split(' ');
        el.innerHTML = words
          .map(word => `<span class="inline-block opacity-0 translate-y-[20px]">${word}</span>`)
          .join(' ');

        const spans = el.querySelectorAll('span');

        gsap.to(spans, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="flex relative flex-col justify-start gap-5">

      <div className="flex z-20 gap-2 lg:gap-8 items-center">
        <h1
          ref={titleRef}
          className={`${styles.title}`}
        >
          حنكــة للإستثمـــار
        </h1>

      
      </div>

      <div className="w-full flex z-20 flex-col gap-4">
        {paragraphs.map((text, i) => (
          <div key={i} className="flex items-start gap-3">
            <p className={`animated-paragraph ${styles.paragraph} text-right max-w-[600px]`}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAnimatedContent;
