'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/images/logo.png"
import menuOpen from "../public/images/menuOpen.svg"
import menuClose from "../public/images/menuClose.svg"
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter();
  

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/', text: 'الرئيسية' },
    { href: '/#about', text: 'من نحن' },
    { href: '/#vision', text: 'رؤيتنا' },
    { href: '/submit-project', text: 'تقديم مشروع' },

  ]

  const linkClasses = (item) => {
    const isActive = pathname === item.href.split('#')[0]
    return `
      text-[14px] lg:text-[16px] font-medium transition-colors duration-200
       ${isScrolled ? 'text-black' : 'text-white' }
    `
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)

    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(href)
    }
  }

  return (
    <>
      {/* Navbar avec background beige au scroll */}
      <nav className={`
        fixed top-0 left-0 right-0 z-[1000]
        transition-all duration-300
        ${isScrolled ? 'bg-white' : 'bg-transparent'}
      `}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div dir='rtl' className="flex items-center justify-between">
          
           

            {/* Logo à droite */}
            <Link href="/" className="shrink-0">
              <Image 
                src={logo} 
                alt="logo" 
                width={80} 
                height={80}
                className={`transition-all duration-300 ${isScrolled ? 'filter brightness-0' : ''}`}
              />
            </Link>

             {/* Menu au centre */}
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={linkClasses(item)}
                >
                  {item.text}
                </Link>
              ))}
            </div>

              {/* Bouton CTA à gauche (desktop uniquement) */}
            <Link href='/contact'  className={`${isScrolled ? 'bg-purple-900 text-white hover:bg-purple-700' : 'bg-white text-purple-900 hover:bg-gray-200'}  px-6 py-3  font-medium transition-colors duration-300 hidden md:block`}>
              تواصل معنا
            </Link >

            {/* Bouton menu mobile (mobile uniquement) */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-10">
              <Image 
                src={isOpen ? menuClose : menuOpen} 
                alt="menu" 
                width={30} 
                height={30}
                className={`${isScrolled ? 'filter brightness-0' : ''}`}
              />
            </button>
            
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex flex-col items-center justify-center">
          {/* Animation d'entrée */}
          <div className="absolute inset-0 bg-purple-900 animate-pulse opacity-20"></div>
          
          {/* Pattern décoratif */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full animate-pulse"></div>
          </div>

          {/* Bouton fermeture à gauche */}
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-8 left-8 text-white hover:text-purple-200 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
          >
            <Image src={menuClose} alt="close" width={25} height={25} />
          </button>

          {/* Logo en face du bouton fermeture (à droite) */}
          <div className="absolute top-8 right-8 transform transition-all duration-500 scale-100 hover:scale-110">
            <Image 
              src={logo} 
              alt="HENKA" 
              width={80} 
              height={80}
              className="filter brightness-0 invert"
            />
          </div>

          {/* Menu items avec animation d'entrée */}
          <div className="flex flex-col items-center gap-6 z-10 mt-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-white text-[20px] font-medium px-8 py-4 rounded-full 
                 border-2 border-white/30 hover:border-white hover:bg-white/10
                 transform transition-all duration-300 hover:scale-105
                 w-48 text-center backdrop-blur-sm
                 animate-fadeInUp"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  opacity: 0,
                  animationDelay: `${index * 100}ms`
                }}
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Bouton contact avec animation */}
          <div className="mt-12 z-10 transform transition-all duration-500 delay-300">
            <Link href='/contact' className="bg-white text-purple-900 hover:bg-purple-50 transition-all duration-300 py-4 px-8 rounded-full font-semibold text-[16px] shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-48">
              تواصل معنا
            </Link>
          </div>

          {/* Réseaux sociaux avec animation */}
          <div className="flex gap-6 mt-12 text-white text-2xl z-10">
            <a 
              href="https://www.instagram.com/henka_sa" 
              target="_blank" 
              rel="noopener"
              className="hover:text-purple-200 transition-all duration-300 transform hover:scale-110"
              style={{
                animation: 'fadeInUp 0.5s ease-out forwards',
                opacity: 0,
                animationDelay: '600ms'
              }}
            >
              <FaInstagram />
            </a>
            <a 
              href="https://x.com/henka_sa" 
              target="_blank" 
              rel="noopener"
              className="hover:text-purple-200 transition-all duration-300 transform hover:scale-110"
              style={{
                animation: 'fadeInUp 0.5s ease-out forwards',
                opacity: 0,
                animationDelay: '700ms'
              }}
            >
              <FaTwitter />
            </a>
            <a 
              href="https://www.linkedin.com/company/henka-investment/" 
              target="_blank" 
              rel="noopener"
              className="hover:text-purple-200 transition-all duration-300 transform hover:scale-110"
              style={{
                animation: 'fadeInUp 0.5s ease-out forwards',
                opacity: 0,
                animationDelay: '800ms'
              }}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
