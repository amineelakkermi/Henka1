import AboutAnimatedContent from "./AboutAnimatedContent";

const About = () => {
  
  return (
    <section 
      id="about" 
      className={`relative w-full min-h-[90vh] text-purple-900 flex flex-col justify-center py-8 lg:py-20 overflow-hidden 
       bg-white
      `}
    >
      <div className="max-w-7xl mx-auto px-6  flex flex-col justify-center gap-5">
        <AboutAnimatedContent />
      </div>
    </section>
  );
};

export default About;