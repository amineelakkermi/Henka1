'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const SubmitProject = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    model: '',
    stage: '',
    amount: '',
    usage: '',
    investors: '',
    pitchLink: '',
    website: '',
    fullName: '',
    email: '',
    phone: '',
    role: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // أرسل النموذج باستخدام EmailJS
      const result = await emailjs.send(
        'service_zxmv0cb',     // اكتب هنا Service ID
        'template_pw72k2v',    // اكتب هنا Template ID
        form,
        'SdVchn_cATo0UDgSF'      // اكتب هنا Public Key
      );
  
      console.log('SUCCESS!', result.text);
      alert('تم إرسال النموذج بنجاح!');
  
      setForm({
        name: '',
        description: '',
        model: '',
        stage: '',
        amount: '',
        usage: '',
        investors: '',
        pitchLink: '',
        website: '',
        fullName: '',
        email: '',
        phone: '',
        role: '',
      });
  
    } catch (error) {
      console.error('FAILED...', error);
      alert('حدث خطأ أثناء الإرسال. تأكد من الاتصال بالإنترنت.');
    }
  };
  
  
  return (
    <section className={`relative w-full flex flex-col  gap-16 bg-purple-900 text-white pt-36 pb-24 px-6 md:px-20 dir-rtl`}>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">نموذج تقديم مشروع للاستثمار</h1>

      <div className="bg-[#111] px-8 py-12 rounded-xl max-w-3xl w-full mx-auto">

      <form onSubmit={handleSubmit} className="space-y-5" style={{ direction: 'rtl' }}>

        {/* 1 */}
        <div className="flex flex-col gap-3">
        <label className="text-md text-gray-300 mb-1">ما اسم المشروع أو الشركة؟</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-md rounded-md px-4 py-2 outline-none  placeholder-gray-500"
            placeholder="الاسم التجاري الحالي أو المقترح"
            required
          />
        </div>

        {/* 2 */}
        <div className="flex flex-col gap-3">
        <label className="text-md text-gray-300 mb-1">وصف مختصر للمشروع</label>
          <textarea
            name="description"
            rows="3"
            value={form.description}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-md rounded-md px-4 py-2 outline-none  placeholder-gray-500"
            placeholder="ما المشكلة التي تحلونها؟ وما هي فكرتكم الأساسية؟"
            required
          />
        </div>

        {/* 3 */}
        <div className="flex flex-col gap-3">
        <label className="text-md text-gray-300 mb-1">ما هو نموذج العمل؟</label>
          <textarea
            name="model"
            rows="3"
            value={form.model}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-md rounded-md px-4 py-2 outline-none  placeholder-gray-500"
            placeholder="كيف تحققون دخل؟ ومن هو العميل؟"
          />
        </div>

        {/* 4 */}
        <div className="flex flex-col gap-3">
        <label className="text-md text-gray-300 mb-1">في أي مرحلة أنتم حاليًا؟</label>
          <select
            name="stage"
            value={form.stage}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-md rounded-md px-4 py-2 outline-none  placeholder-gray-500"
          >
            <option value="">اختر المرحلة</option>
            <option>فكرة فقط</option>
            <option>منتج أولي (MVP)</option>
            <option>تحقق أولي من السوق</option>
            <option>دخل شهري منتظم</option>
            <option>مرحلة توسع</option>
          </select>
        </div>

        {/* 5 */}
        <div className="flex flex-col gap-3">
        <label className="text-md text-gray-300 mb-1">كم حجم الاستثمار المطلوب؟ وعلى ماذا سيتم إنفاقه؟</label>
          <input
            type="text"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-md rounded-md px-4 py-2 outline-none  placeholder-gray-500"
            placeholder="مثال: 50000 دولار"
          />
          <textarea
            name="usage"
            rows="2"
            value={form.usage}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-md rounded-md px-4 py-2 outline-none  placeholder-gray-500"
            placeholder="تسويق، تطوير، توظيف..."
          />
        </div>

        {/* 6 */}
        <div className="flex flex-col gap-3">
        <label className="text-md text-gray-300 mb-1">هل يوجد مستثمرون حاليون؟ وكم النسبة المتاحة للاستثمار؟</label>
          <textarea
            name="investors"
            rows="2"
            value={form.investors}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-md rounded-md px-4 py-2 outline-none  placeholder-gray-500"
            placeholder="مثال: لا يوجد مستثمرون – النسبة المتاحة 20%"
          />
        </div>

        {/* 7 */}
        <div className="flex flex-col gap-3">
        <label className="text-md text-gray-300 mb-1">رابط العرض التقديمي (Pitch Deck)</label>
          <input
            type="url"
            name="pitchLink"
            value={form.pitchLink}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-md rounded-md px-4 py-2 outline-none  placeholder-gray-500"
            placeholder="رابط Google Drive أو Notion"
          />
        </div>

        {/* 8 */}
        <div className="flex flex-col gap-3">
        <label className="text-md text-gray-300 mb-1">رابط الموقع أو حسابات التواصل</label>
          <input
            type="url"
            name="website"
            value={form.website}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-md rounded-md px-4 py-2 outline-none  placeholder-gray-500"
            placeholder="مثال: https://example.com"
          />
        </div>

        {/* 9 */}
        <div className="flex flex-col gap-3">
        <label className="text-md text-gray-300 mb-1">معلومات مقدم الطلب</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-md rounded-md px-4 py-2 outline-none  placeholder-gray-500"
            placeholder="الاسم الكامل"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-md rounded-md px-4 py-2 outline-none  placeholder-gray-500"
            placeholder="البريد الإلكتروني"
            required
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-md rounded-md px-4 py-2 outline-none  placeholder-gray-500"
            placeholder="رقم الجوال"
            required
          />
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleChange}
            className="bg-[#1a1a1a] border border-[#2a2a2a] text-white text-md rounded-md px-4 py-2 outline-none  placeholder-gray-500"
            placeholder="صفته بالمشروع (مؤسس – شريك – مدير تنفيذي)"
          />
        </div>

        <button
          type="submit"
          className="border border-white max-w-[250px] text-white hover:bg-white hover:text-black
          transition-colors duration-300 py-3 px-6 rounded-full
           text-[20px] flex items-center justify-center gap-2"        >
          إرسال النموذج
        </button>
      </form>
      </div>
    </section>
  )
}

export default SubmitProject
