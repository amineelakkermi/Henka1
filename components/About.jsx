import AboutAnimatedContent from "./AboutAnimatedContent";

const About = () => {
  
  return (
    <section 
      id="about" 
      className={`relative w-full min-h-[90vh] text-purple-900 flex flex-col justify-start py-8 lg:py-20 overflow-hidden 
       bg-white
      `}
    >
      <div className="max-w-4xl mx-auto px-6  flex flex-col justify-start gap-5">
        <AboutAnimatedContent />
      </div>
    </section>
  );
};

export default About;