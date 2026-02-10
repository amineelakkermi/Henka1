'use client';
import Image from 'next/image';
import styles from './Partners.module.css';
import { useState, useEffect } from 'react';

export default function Partners() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const partners = Array.from({ length: 8 }, (_, i) => ({
    src: `/images/partner${i + 1}.png`,
    alt: `Partner ${i + 1}`,
  }));

  // Dupliquez les partenaires pour créer un effet de boucle continu
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className={`w-full flex justify-center py-10 px-4 bg-gray-50 text-center relative`}>
      <div className="w-full max-w-7xl mx-auto px-6">
        <h1 className={`text-[28px] lg:text-[45px] text-purple-900 text-right mb-6 font-bold`}>استثـمــاراتـنا</h1>
        <div className="border-t border-purple-300 mb-8"></div>
        
        <div className={styles.wrapper}>
          {Array.from({ length: 8 }, (_, index) => (
            <div 
              key={index + 1}
              className={`${styles.item} ${styles['item' + (index + 1)]}`}
            >
              <Image 
                src={`/images/partner${index + 1}.png`} 
                alt={`Partner ${index + 1}`} 
                width={120} 
                height={120} 
                className={`object-contain transition-all duration-300 ${isScrolled ? 'filter brightness-0' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}