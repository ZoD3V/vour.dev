import React from "react";
import styles from "../style";
import { discount, robot,heroContent } from "../assets";
import GetStarted from './GetStarted'
import { motion } from "framer-motion";
import { slideIn,staggerContainer,textVariant } from "../utils/motions";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:true,amount:0.25}}
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 p-6`}
      >
        <div className="flex flex-row items-center py-[6px] mb-2">
          <motion.p 
          variants={textVariant(1)}
          className="text-white text-[18px]">
            Selamat datang di Vour
            <span className="text-secBlue">.dev</span>
          </motion.p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <motion.h1 
          variants={textVariant(1.1)}
          className="flex-1 font-poppins font-semibold text-white ss:text-[62px] text-[42px] ss:leading-[80px] leading-[55px]">Tumbuh dan 
          <br className="sm:block hidden"/>
          {" "}
          <span className="text-gradient">Berkembang 
          </span> {" "}
          </motion.h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted/>
          </div>
        </div>

        <motion.h1 
        variants={textVariant(1.1)}
        className="font-poppins font-semibold text-white ss:text-[62px] text-[42px] ss:leading-[80px] leading-[75px] w-full">
          Dengan Teknologi
        </motion.h1>

        <motion.p 
        variants={textVariant(1.1)}
        className={`${styles.paragraph} max-w-[470px] mt-5 text-sm sm:text-base`}>
          Teknologi sekarang sudah sangat berkembang di mana dengan teknologi kita bisa mempermudah dan sangat lah membantu kita menyelesaikan masalah kita
        </motion.p>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:true,amount:0.25}}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <motion.img 
          variants={slideIn('right','tween',0.2,1)}
          src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div> 

      <motion.div 
      className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </motion.div>   
    </section>
  );
};

export default Hero;
