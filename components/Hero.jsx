'use client'
import AnimatedHeroContent from "./AnimatedHeroContent";
import Image from "next/image";
import Particles from "./Particles";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Contenu animé sans background */}
      <div className="relative z-20 max-w-7xl w-full  py-8 lg:py-12">
        <AnimatedHeroContent />
      </div>
    </section>
  );
};

export default Hero;
