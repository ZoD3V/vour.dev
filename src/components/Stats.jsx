import React from 'react'
import {stats} from '../constants'
import styles from '../style'
import { motion } from "framer-motion";
import { slideIn,staggerContainer } from "../utils/motions";

const Stats = () => {
  return (
  <motion.section 
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{once:true,amount:0.25}}
  className={`${styles.flexCenter} sm:flex-row flex-col sm:mb-20 mb-10 mt-10`}>
    {stats.map((stat) => (
      <motion.div 
      variants={slideIn('down','tween',0.2,1)}
      key={stat.id} className={`flex-1 flex justify-start items-center flex-row`} >
        <h4 className="font-poppins font-semibold md:text-[28px] sm:text-[22px] text-[20px] xs:leading-[45px] leading-[40px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal md:text-[28px] sm:text-[22px] text-[20px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </motion.div>
    ))}
  </motion.section>
  );
}

export default Stats;
