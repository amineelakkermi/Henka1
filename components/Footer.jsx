import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/images/logo.png"
import { FaInstagram, FaTwitter, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white overflow-hidden">
      {/* Pattern décoratif */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Ligne de séparation */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-12"></div>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Logo et description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right">
            <Link href="/" className="mb-6 group">
              <Image 
                src={logo} 
                alt="HENKA" 
                width={120} 
                height={120}
                className="transition-transform duration-300 group-hover:scale-110 filter brightness-0 invert"
              />
            </Link>
            <p className="text-purple-200 text-sm md:text-base leading-relaxed max-w-sm">
              مكتب استثمار عائلي سعودي يترجم القيم العائلية إلى قرارات استثمارية رشيدة تحقق النمو والاستدامة عبر الأجيال.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">روابط سريعة</h3>
            <div className="flex flex-col gap-3">
              <Link href="/#hero" className="text-purple-200 hover:text-white transition-colors duration-300 text-sm md:text-base">
                الرئيسية
              </Link>
              <Link href="/#about" className="text-purple-200 hover:text-white transition-colors duration-300 text-sm md:text-base">
                من نحن
              </Link>
              <Link href="/#vision" className="text-purple-200 hover:text-white transition-colors duration-300 text-sm md:text-base">
                رؤيتنا
              </Link>
              <Link href="/#investment" className="text-purple-200 hover:text-white transition-colors duration-300 text-sm md:text-base">
                مجالات الاستثمار
              </Link>
              <Link href="/#phl" className="text-purple-200 hover:text-white transition-colors duration-300 text-sm md:text-base">
                فلسفتنا
              </Link>
            </div>
          </div>

          {/* Contact et réseaux sociaux */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">تواصل معنا</h3>
            
            {/* Informations de contact */}
            <div className="flex flex-col gap-3 mb-6 text-sm md:text-base">
              <div className="flex items-center gap-3 text-purple-200">
                <FaMapMarkerAlt className="text-purple-400" />
                <span>الرياض، مركز الملك عبد الله المالي</span>
              </div>
            {/*
              <div className="flex items-center gap-3 text-purple-200">
                <FaPhone className="text-purple-400" />
                <a href="https://wa.me/966501234567" dir="ltr" className="hover:text-white transition-colors duration-300">
                  +966 50 123 4567
                </a>
              </div>
            */}
              <div className="flex items-center gap-3 text-purple-200">
                <FaEnvelope className="text-purple-400" />
                <a href="mailto:Bander@henka.com.sa" className="hover:text-white transition-colors duration-300">
                  Bander@henka.com.sa
                </a>
              </div>
             
            </div>

            {/* Bouton CTA */}
            <Link
              href="/contact"
              className="bg-white text-purple-900 hover:bg-purple-100 transition-all duration-300 py-3 px-8 rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              تواصل الآن
            </Link>

            {/* Réseaux sociaux */}
            <div className="flex gap-4 mt-6 text-xl md:text-2xl">
              <a 
                href="https://www.instagram.com/henka_sa" 
                target="_blank" 
                rel="noopener"
                className="text-purple-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://x.com/henka_sa" 
                target="_blank" 
                rel="noopener"
                className="text-purple-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://www.linkedin.com/company/henka-investment/" 
                target="_blank" 
                rel="noopener"
                className="text-purple-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent mb-8"></div>

        {/* Copyright */}
        <div className="flex justify-center items-center text-center text-white text-sm">
          <p>© {currentYear} HENKA. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
