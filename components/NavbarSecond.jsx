'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/images/logo.png"
import menuOpen from "../public/images/menuOpen.svg"
import menuClose from "../public/images/menuClose.svg"
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function NavbarSecond() {
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
    { href: '/#phl', text: 'فلسفتنا' },
    { href: '/submit-project', text: 'تقديم مشروع' },

  ]

  const linkClasses = (item) => {
    const isActive = pathname === item.href.split('#')[0]
    return `
      text-white text-[18px] lg:text-[20px] hover:text-textColor transition-colors duration-200
      ${isActive ? 'text-textColor' : ''}
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
      {/* Navbar */}
      <nav dir="rtl" className={`
      mx-auto my-4 w-[95%]  lg:w-[86%] xl:w-[68%] rounded-[15px]
      px-6 lg:px-8 lg:py-4 py-3
      fixed top-0 left-0 right-0 z-[999]
      transition-all duration-300
    bg-white/10 backdrop-blur-md border border-white/10
     `}>

        <div className="max-w-5xl mx-auto  flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src={logo} alt="logo" width={80} height={80} />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* Desktop button */}
          <div className="hidden md:flex items-center gap-3">

            <Link
              href="/contact"
              className="bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-white transition-colors duration-300 py-2 px-6 rounded-full text-[16px]"
            >
              تواصــل الآن
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-8">
            <Link
              href="/contact"
              className="bg-white text-[17px] text-black transition-colors duration-200 py-2 px-3 rounded-[15px]"
            >
              تواصــل الآن
            </Link>
            <button onClick={() => setIsOpen(!isOpen)}>
              <Image src={isOpen ? menuClose : menuOpen} alt="menu" width={30} height={30} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay (en dehors du nav) */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center gap-8">
          <button onClick={() => setIsOpen(false)} className="absolute top-4 left-4">
            <Image src={menuClose} alt="close menu" width={24} height={24} />
          </button>

          <>
  {menuItems.map((item, index) => (
    <Link
      key={index}
      href={item.href}
      onClick={(e) => handleLinkClick(e, item.href)}
      className="text-white text-[20px] font-ghaith border-2 border-white px-8 py-3 rounded-full 
        hover:text-orange transform transition-all duration-200 hover:scale-105
        w-36 text-center flex items-center justify-center"
    >
      {item.text}
    </Link>
  ))}

  <div onClick={() => setIsOpen(false)}  className="flex items-center gap-4 mt-4">
  </div>
</>

        </div>
      )}
    </>
  )
}
