'use client'

import { useState , useEffect } from 'react'
import emailjs from '@emailjs/browser'
import styles from '@/styles/style'

// Configuration EmailJS
const SERVICE_ID = 'service_zxmv0cb'
const TEMPLATE_ID = 'template_uic9hrv'
const PUBLIC_KEY = 'SdVchn_cATo0UDgSF'

// Custom scrollbar styles
const customScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: #33241d;
    border-radius: 4px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 4px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #000;
  }
`;

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [open, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.service-type-dropdown')) return;
      setIsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Inject custom scrollbar styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = customScrollbarStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')
  
    const formData = new FormData(e.target)
    
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message')
        },
        PUBLIC_KEY
      )
      
      setSuccess('تم إرسال رسالتك بنجاح!')
      e.target.reset()
    } catch (error) {
      setError('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.')
    } finally {
      setLoading(false)
    }
  }

 
  return (
    <section className={`relative w-full flex flex-col  gap-16 bg-purple-900 text-white pt-36 pb-24 px-6 md:px-20 dir-rtl`}>
      {/* Titre */}
      <div className="flex flex-col gap-5 text-center">
        <h1 className={`${styles.title}`}>
        هل ترغب بالتواصل معنا ؟
        </h1>
     
        <p className="text-sm md:text-[25px] text-textColor">
        نفتح باب النقاش مع شركاء مؤمنين بالاستثمار طويل الأمد، والرؤية المستدامة.
        </p>
      </div>

      {/* Formulaire */}
      <div className="bg-[#111] px-8 py-12 rounded-xl max-w-3xl w-full mx-auto">
  
      <form onSubmit={handleSubmit} className="space-y-5" style={{ direction: 'rtl' }}>
    
    {/* الاسم الكامل */}
    <div className="flex flex-col gap-3">
      <label className="text-sm text-gray-300 mb-1">الاسم الكامل</label>
      <input
        type="text"
        name="name"
        required
        placeholder="أدخل اسمك"
        className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-sm rounded-md px-4 py-2 outline-none  placeholder-gray-500"
      />
    </div>

    {/* البريد الإلكتروني */}
    <div className="flex flex-col gap-3">
      <label className="text-sm text-gray-300 mb-1">البريد الإلكتروني</label>
      <input
        type="email"
        name="email"
        required
        placeholder="example@email.com"
        className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-sm rounded-md px-4 py-2 outline-none  placeholder-gray-500"
      />
    </div>

     {/* ؤقم الهاتف */}
     <div className="flex flex-col gap-3">
      <label className="text-sm text-gray-300 mb-1">رقم الهاتف</label>
      <input
        type="tel"
        name="phone"
        required
        placeholder="+966..."
        className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-sm rounded-md px-4 py-2 outline-none  placeholder-gray-500"
      />
    </div>



    {/* الرسالة */}
    <div className="flex flex-col gap-3">
      <label className="text-sm text-gray-300 mb-1">تفاصيل الرسالة</label>
      <textarea
        name="message"
        required
        rows="4"
        placeholder="اكتب رسالتك هنا"
        className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-sm rounded-md px-4 py-2 outline-none  placeholder-gray-500"
      ></textarea>
    </div>

    {/* زر الإرسال */}
    <div className="flex items-center justify-between">
      <button
        type="submit"
        disabled={loading}
        className="border border-white max-w-[250px] text-white hover:bg-white hover:text-black
        transition-colors duration-300 py-3 px-6 rounded-full
         text-[20px] flex items-center justify-center gap-2"
        >
        {loading ? '...جاري الإرسال' : 'إرســال'}
      </button>
    </div>

    {success && <div className="text-green-400 text-sm mt-4">{success}</div>}
    {error && <div className="text-red-500 text-sm mt-4">{error}</div>}
      </form>
      </div>


      {/* Pied de page */}
      <div className="text-sm flex flex-col md:flex-row justify-between items-center gap-4 mt-16">
        <div className="text-center md:text-right text-[18px] md:text-[22px]">
          <p>
          المـقـر :  كافد "مركز الملك عبد الله المالي"
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:Bander@henka.com.sa"
            className="hover:text-gray-200 text-[18px] md:text-[20px] transition"
          >
        البريد الإلكترونـي :  Bander@henka.com.sa  
          </a>

        </div>
      </div>
    </section>
  )
}