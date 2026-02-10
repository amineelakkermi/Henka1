import About from "@/components/About";
import ContactBanner from "@/components/ContactBanner";
import Future from "@/components/Future";
import Hero from "@/components/Hero";
import InvestmentAreas from "@/components/InvestmentAreas";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Philosophy from "@/components/Philosophy";
import Sectors from "@/components/Sectors";
import Vision from "@/components/Vision";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home(){
  return (
   <div>
    <div className="relative min-h-screen">
      {/* Background image qui couvre tout */}
      <Image 
        src='/images/background.png' 
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        fill
      />
      <div className="absolute  inset-0 w-full h-full object-cover -z-10 bg-gradient-to-b from-purple-900/20 via-purple-800/30 to-purple-900/40" />
      {/* Navbar et Hero par-dessus le background */}
      <Navbar />
      <Hero />
    </div>
    <About />
    <Vision />
    <Partners />
    <InvestmentAreas />

    <Future />
   </div>
  )
}