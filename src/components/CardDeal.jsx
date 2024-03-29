import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motions";
import Button from "./Button";

const CardDeal = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.flexCenter}  flex-col sm:mb-24 mb-10 mt-10 gap-2 relative z-[5]`}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="w-full rounded-xl box-shadow bg-black-gradient-2 p-8 md:p-12 flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-between flex-1 lg:px-16 xl:px-20"
      >
        <div className="flex flex-col gap-3 md:gap-4">
          <h1 className="font-poppins font-semibold text-white ss:text-[32px] text-[24px] max-w-full text-center md:text-start">
            Let’s try our service now!
          </h1>
          <p
            className={`font-poppins font-normal text-dimWhite w-full sm:max-w-[470px] text-xs sm:text-sm leading-[15px] text-center md:text-start`}
          >
             is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy
          </p>
        </div>

        <Button text='Get Started'/>
      </motion.div>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />{" "}
    </motion.section>
  );
};

export default CardDeal;
