import Image from "next/image";
import H from "../public/images/H.png"
import styles from "@/styles/style";

const Vision = () => {
  
  return (
    <section id="vision" className={`w-full snap-start relative  bg-gray-50 min-h-[90vh] text-purple-900 flex flex-col justify-center py-8 lg:py-12 overflow-hidden`}>
      <div className="max-w-5xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-center gap-0">
          {/* رسالتنا */}
      <div
        className={`group md:border-t border-b md:border-l border-purple-300 hover:bg-purple-50  duration-300  flex flex-col gap-5 py-24 px-10`}
      >
       <div className='flex group items-center gap-5'>
       <h3 className={`${styles.title} text-purple-900`}>رسالتنــا</h3>
       <Image src={H} alt="logo" width={30} height={30} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0" />
       <div>
     
        </div>

       </div>
        <p className={`${styles.paragraph} text-right  font-medium`}>
          أن نحافظ على ثروة العائلة وننميها من خلال استثمارات مدروسة، تحترم القيم وتتبنّى الابتكار، مع التخطيط المستدام للأجيال القادمة.
        </p>
      </div>

      {/* رؤيتنا */}
      <div
        className={`group md:border-t md:border-b border-purple-300 hover:bg-purple-50 border-purple-200 duration-300  flex flex-col gap-5 py-24 px-10`}
        >
       <div className='flex  items-center gap-5'>
       <h3 className={`${styles.title} text-purple-900`}>رؤيتنــا</h3>
       <Image src={H} alt="logo" width={30} height={30} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 filter brightness-0" />
       <div>
     
        </div>

       </div>
        <p className={`${styles.paragraph} text-right text-purple-900 font-medium`}>
          أن نكون نموذجًا سعوديًا رائدًا في إدارة الاستثمارات العائلية بحكمة مؤسسية، وشراكات استراتيجية، ونمو متزن.
        </p>
      </div>

      
      </div>

    </section>
  );
};

export default Vision;
