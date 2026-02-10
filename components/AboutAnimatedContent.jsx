'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from '@/styles/style';
import H from "../public/images/H.png"

gsap.registerPlugin(ScrollTrigger);

const AboutAnimatedContent = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const paragraphs = [
    "هي مكتب استثمار عائلي سعودي، تأسس على يد عائلة تمتلك إرثًا من الريادة والاستثمار الممتد لعقود, ؤمن أن الثروة مسؤولية، وأن إدارة الأصول لا تتعلق بالأرقام فقط، بل بما تحمله من أثر، ورؤية، و استمرارية , حنكة ليست مجرد كيان مالي، ",

    " بل عقلية تعمل على ترجمة قيم العائلة في الحكمة، الانضباط، والرؤية بعيدة المدى، إلى قرارات مالية رشيدة تنمّي الثروة وتحافظ عليها.",
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
    <div  className="flex relative flex-col justify-center items-start gap-8 ">

      {/* Titre à gauche */}
      <div className="flex z-20 gap-2 lg:gap-8 items-center lg:items-start">
        <h1
          className={`${styles.title}`}
        >
          حنكــة للإستثمـــار
        </h1>
      </div>

      {/* Paragraphes à droite */}
      <div className="w-full flex z-20 flex-col gap-4">
        {paragraphs.map((text, i) => (
          <div key={i} className="flex items-start gap-3">
            <p className={` ${styles.paragraph} mt-0 text-[16px] lg:text-[18px] ${i === 2 ? 'text-center' : 'text-right'}`}>
              {text}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center">
      <p className={`${styles.paragraph} mt-0 text-[16px] lg:text-[18px] text-center w-full mx-auto`}>نحــن نعمـــل بصمـــت لكـــن بأثـــر عمــيـــق.</p>
      </div>

      {/* Contenu Vision pour mobile */}
      <div className="lg:hidden w-full flex z-20 flex-row gap-4 mt-8">
        {/* رسالتنا */}
        <div className="group border-b border-purple-300 hover:bg-purple-50 duration-300 flex flex-col gap-3 py-6 px-4 flex-1">
          <div className='flex group items-center gap-3'>
            <h3 className={`${styles.title} text-purple-900 text-[14px]`}>رسالتنــا</h3>
            <Image src={H} alt="logo" width={20} height={20} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0" />
          </div>
          <p className={`${styles.paragraph} text-[10px] text-right`}>
            أن نحافظ على ثروة العائلة وننميها من خلال استثمارات مدروسة، تحترم القيم وتتبنّى الابتكار، مع التخطيط المستدام للأجيال القادمة.
          </p>
        </div>

        {/* رؤيتنا */}
        <div className="group border-b border-purple-300 hover:bg-purple-50 duration-300 flex flex-col  py-6 px-4 flex-1">
          <div className='flex items-center gap-3'>
            <h3 className={`${styles.title} text-purple-900 text-[14px]`}>رؤيتنــا</h3>
            <Image src={H} alt="logo" width={20} height={20} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0" />
          </div>
          <p className={`${styles.paragraph} text-[10px] text-right text-purple-900`}>
            أن نكون نموذجًا سعوديًا رائدًا في إدارة الاستثمارات العائلية بحكمة مؤسسية، وشراكات استراتيجية، ونمو متزن.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAnimatedContent;
