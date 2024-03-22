import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motions";
import { TypingText } from "./CustomTexts";
import { Monly, Provision, Musai, explorationResearch } from "../assets";
import { checkmark } from "../assets";

const Billing = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.flexCenter} flex-col md:mb-28 mb-14 mt-18 gap-2 relative z-[5]`}
    >
      {/* gradient start */}
      <div className="hidden lg:absolute z-[3] -left-1/2 top-0 w-[40%] h-[40%] rounded-full pink__gradient" />
      {/* gradient end */}
      <TypingText title="Pekerjaan kami" />
      <motion.h1
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="font-poppins font-semibold text-white ss:text-[42px] text-[30px] leading-[42px] md:leading-[55px] max-w-full md:max-w-[600px] text-center mb-3 sm:mb-10"
      >
        Hasil Pekerjaan yang telah kami selesaikan
      </motion.h1>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-10 w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  grid-rows-1 md:grid-rows-3 text-white">
          <div className="col-start-1 col-end-3 md:col-end-2 md:col-start-2 row-start-2 md:row-start-1 pl-8 md:px-14 py-5 md:py-0 border-l-2 border-dashed border-gray-500 relative flex flex-col items-start justify-center">
            <div className="font-semibold text-gradient text-sm sm:text-base ">
              Website
            </div>
            <h1 className="font-poppins font-semibold text-white text-start text-[25px] sm:text-[30px] md:text-center mb-1 md:mb-3">
              Exploration research
            </h1>
            <p
              className={`font-poppins font-normal text-dimWhite w-full sm:max-w-[470px] text-xs sm:text-sm leading-[20px] md:leading-[30px]`}
            >
               is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy
            </p>
            <div className="font-poppins font-semibold text-white text-start text-[20px] sm:text-[23px] md:text-center mt-3 md:mt-2">
              Selengkapnya
            </div>

            <div className="size-8 bg-black rounded-full absolute top-0 left-[-17px]">
              <img src={checkmark} alt="checkmark" className="text-secBlue" />
            </div>
          </div>

          <div className="col-start-1 col-end-3 md:col-end-2 row-start-1 border-l-2 border-dashed md:border-l-0 border-gray-500">
            <div className="h-[250px] xs:h-[260px] sm:h-[320px] w-full md:px-14 pl-8">
              <img
                src={Monly}
                className="aspect-square object-cover object-center brightness-75 rounded-xl h-full w-full"
              />
            </div>
          </div>
          {/* 1 jalan */}

          {/* 2 jalan */}
          <div className="col-start-1 col-end-3 md:col-end-2 md:row-start-2 pl-8 md:px-14 py-5 md:py-0 border-l-2 border-dashed md:border-l-0 border-gray-500 relative flex flex-col items-start justify-center">
            <div className="font-semibold text-gradient text-sm sm:text-base">
              Website
            </div>
            <h1 className="font-poppins font-semibold text-white text-start text-[25px] sm:text-[30px] md:text-center mb-1 md:mb-3">
              Exploration research
            </h1>
            <p
              className={`font-poppins font-normal text-dimWhite w-full sm:max-w-[470px] text-xs sm:text-sm leading-[20px] md:leading-[30px]`}
            >
               is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy
            </p>
            <div className="font-poppins font-semibold text-white text-start text-[20px] sm:text-[23px] md:text-center mt-3 md:mt-2">
              Selengkapnya
            </div>

            <div className="size-8 bg-black rounded-full absolute top-0 left-[-17px] md:left-auto md:right-[-17px]">
              <img src={checkmark} alt="checkmark" className="text-secBlue" />
            </div>
          </div>

          <div className="col-start-1 col-end-3 md:col-start-2 row-start-3 md:row-start-2 border-l-2 border-dashed border-gray-500">
            <div className="h-[250px] xs:h-[260px] sm:h-[320px] w-full md:px-14 pl-8">
              <img
                src={Provision}
                className="aspect-square object-cover object-center brightness-75 rounded-xl h-full w-full"
              />
            </div>
          </div>
          {/* 2 jalan */}

          {/* 3 jalan */}
          <div className="col-start-1 col-end-3 md:col-end-auto md:col-start-2 row-start-6 md:row-start-3 pl-8 md:px-14 py-5 md:py-0 border-l-2 border-dashed border-gray-500 relative flex flex-col items-start justify-center">
            <div className="font-semibold text-gradient text-sm sm:text-base">
              Website
            </div>
            <h1 className="font-poppins font-semibold text-white text-start text-[25px] sm:text-[30px] md:text-center mb-1 md:mb-3">
              Exploration research
            </h1>
            <p
              className={`font-poppins font-normal text-dimWhite w-full sm:max-w-[470px] text-xs sm:text-sm leading-[20px] md:leading-[30px]`}
            >
               is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy
            </p>

            <div className="font-poppins font-semibold text-white text-start text-[20px] sm:text-[23px] md:text-center mt-3 md:mt-2">
              Selengkapnya
            </div>

            <div className="size-8 bg-black rounded-full absolute top-0 left-[-17px]">
              <img src={checkmark} alt="checkmark" className="text-secBlue" />
            </div>
          </div>

          <div className="col-start-1 col-end-3 md:col-end-2 md:row-start-3 border-l-2 border-dashed md:border-l-0 border-gray-500">
            <div className="h-[250px] xs:h-[260px] sm:h-[320px] w-full md:px-14 pl-8">
              <img
                src={Musai}
                className="aspect-square object-cover object-center brightness-75 rounded-xl h-full w-full"
              />
            </div>
          </div>
          {/* 3 jalan */}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Billing;
