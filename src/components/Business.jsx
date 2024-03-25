import React from "react";
import { features } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motions";
import { TypingText } from "./CustomTexts";

const Business = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.flexCenter} flex-col sm:mb-24 mb-10 mt-10 gap-2`}
    >
      <TypingText title="Digitalkan bisnis Anda sekarang juga" />
      <motion.h1
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="font-poppins font-semibold text-white ss:text-[42px] text-[30px] leading-[42px] md:leading-[55px] max-w-full md:max-w-[600px] text-center mb-3 sm:mb-10"
      >
        Kenapa anda harus mengunakan jasa kami
      </motion.h1>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10"
      >
        {features.map((item, index) => (
          <div
            key={item.id}
            className={`flex-1 flex justify-start items-start flex-row bg-card rounded-[16px] w-full p-5 gap-4`}
          >
            <div className="w-12 h-12 text-lg sm:text-xl md:text-2xl sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0 rounded-full font-bold text-secBlue bg-card flex items-center justify-center">
              {index + 1}
            </div>
            <div className="flex flex-col items-start gap-2">
              <h4 className="font-poppins font-bold md:text-[20px] text-[15px] sm:text-[18px] text-white">
                {item.title}
              </h4>
              <p
                className={`font-poppins font-normal md:text-[16px] sm:text-[14px] text-[12px] text-dimWhite`}
              >
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Business;
