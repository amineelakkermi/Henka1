const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
   
    title: "text-[35px] lg:text-[55px] font-bold",
    paragraph: "font-normal mt-6 text-[16px] lg:text-[22px] text-center lg:text-right leading-relaxed",
   
    flexCenter: "flex items-center justify-center",
    flexStart: "flex items-center justify-start",
    flexEnd: "flex items-center justify-end",
    padding: "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
    paddingY: "py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16",
    marginY: "my-4 sm:my-6 md:my-8 lg:my-12 xl:my-16",
};

export const layout = {
    sectionRow: `flex lg:flex-row flex-col ${styles.paddingY}`,
    sectionColumn: `flex flex-col ${styles.paddingY}`,
    sectionReverse: `flex lg:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} lg:mr-10 mr-0 lg:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} lg:ml-10 ml-0 lg:mt-0 mt-24 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
