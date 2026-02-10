'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '@/styles/style';

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  { 
    src: '/images/realEstate.png', 
    nameAr: 'التطوير العقاري',
    nameEn: 'REAL ESTATE',
    description: 'استثمارات طويلة الأجل في مشاريع عقارية مختارة، تركّز على الجودة، والموقع، والقيمة المستدامة.'
  },
  { 
    src: '/images/fintech.png', 
    nameAr: 'التقنية المالية',
    nameEn: 'FINTECH',
    description: 'نستثمر في حلول الدفع، والتقنيات البنكية، والمنصات التي تعيد تعريف القطاع المالي.'
  },
  { 
    src: '/images/ai.png', 
    nameAr: 'الذكاء الاصطناعي',
    nameEn: 'AI & EMERGING TECH',
    description: 'ندعم الشركات التي تستخدم التقنية لصناعة المستقبل، من التحول الرقمي إلى الأتمتة والتحليل الذكي.'
  },
  { 
    src: '/images/logistics.png', 
    nameAr: 'الخدمات اللوجستية',
    nameEn: 'LOGISTICS',
    description: 'بخبرة عملية في هذا المجال، نُقيم وندعم المشاريع التي تبني مستقبل النقل والإمداد في المنطقة.'
  },
  { 
    src: '/images/venture.png', 
    nameAr: 'رأس المال الجريء',
    nameEn: 'VENTURE CAPITAL',
    description: 'نُراهن على رواد الأعمال أصحاب الرؤية، ونبني علاقات طويلة معهم لا صفقات قصيرة الأجل.'
  },
  { 
    src: '/images/industrie.png', 
    nameAr: 'الاستثمار الصناعي',
    nameEn: 'INDUSTRIAL',
    description: 'نُسهم في تطوير القطاع الصناعي المحلي من خلال دعم مشاريع تُضيف قيمة نوعية، وتعزز سلاسل التوريد.'
  },
  { 
    src: '/images/tourism.png', 
    nameAr: 'الاستثمار السياحي',
    nameEn: 'TOURISM',
    description: 'نستثمر في مشاريع تعكس جمال وثقافة المملكة، وتقدّم تجارب سياحية مستدامة ومميزة.'
  },
  { 
    src: '/images/international.png', 
    nameAr: 'الاستثمار الدولي',
    nameEn: 'INTERNATIONAL',
    description: 'ننظر للأسواق العالمية بعين استراتيجية، ونختار الفرص التي تتماشى مع رؤيتنا وتكمل محفظتنا.'
  },
  { 
    src: '/images/markets.png', 
    nameAr: 'أسواق المال',
    nameEn: 'CAPITAL MARKETS',
    description: 'ندير استثماراتنا في الأسواق المالية بأسلوب متزن، يراعي العوائد والاستقرار، وفق تحليل شامل وتقييم مستمر.'
  },
];

const InvestmentAreas = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".sector-item");

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
      id='investment'
      ref={containerRef}
      className={`px-4 py-8 bg-white lg:py-20 lg:px-6`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
        {/* Titre & Introduction */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 md:gap-8">
          <h1  className={`${styles.title} text-center text-purple-900`}>
            مجــالــات الإسـثـمــار
          </h1>
          <p className={`${styles.paragraph} text-center  lg:text-right text-purple-900 font-medium max-w-[100%] md:max-w-[450px]`}>
            نعمل على تنويع محفظتنا ضمن مجالات نُتقنها، ونؤمن بأهميتها لمستقبل الاقتصاد
          </p>
        </div>

        {/* Cartes des secteurs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="sector-item relative w-full h-64 md:h-72 lg:h-80 overflow-hidden 
              shadow-lg group bg-white border border-gray-200
              hover:shadow-xl transition-all duration-300"
            >
              {/* Image qui couvre toute la carte */}
              <Image
                src={sector.src}
                alt={sector.nameAr}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay indépendant pour l'effet */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3 transition-all duration-300 group-hover:h-full overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 via-purple-800/60 to-transparent transition-all duration-300
                group-hover:from-purple-950 group-hover:via-purple-900/90 p-6 text-right">
                  {/* Name EN en haut (gris, petite taille) */}
                  <h4 className="text-gray-400 text-xs md:text-sm font-light text-right mb-1 transition-all duration-300 group-hover:text-gray-300">
                    {sector.nameEn}
                  </h4>
                  
                  {/* Name AR en bas (grande taille) */}
                  <h3 className="text-white font-bold text-[16px] md:text-[18px] lg:text-[20px] text-right transition-all duration-300">
                    {sector.nameAr}
                  </h3>

                  {/* Description qui apparaît au hover */}
                  <p className="text-white/50 text-xs md:text-sm text-right opacity-0 transition-all duration-300 group-hover:opacity-100
                  mt-2 max-h-0 overflow-hidden group-hover:max-h-24">
                    {sector.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentAreas;