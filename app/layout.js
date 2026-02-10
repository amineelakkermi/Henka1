// app/layout.js
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollTop from "@/components/ScrollToTop"
import CustomCursor from "@/components/CustomCursor"

export const metadata = {
  title: "شركة حنكة",
  description: "نحن مكتب استثمار عائلي (Family Office) نعمل على تنمية ثروات العائلة برؤية استراتيجية طويلة المدى. نُترجم القيم العائلية إلى قرارات استثمارية متزنة، تُوازن بين الطموح والاتزان، وتُحقق الاستدامة عبر الأجيال.",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '16x16 32x32 48x48 64x64'
      }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased bg-purple-900 text-white">
        <ScrollTop />
        <CustomCursor />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
