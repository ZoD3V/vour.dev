import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motions";
import { getTouch } from "../constants";

const Contact = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.flexCenter} flex-col mb-28 md:mt-14 gap-2 relative z-[5]`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 w-full">
        <div className="flex flex-col gap-3">
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-gradient text-[18px]"
          >
            Hubungi kami
          </motion.p>

          <motion.h1
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="font-poppins font-semibold text-white sm:text-[34px] text-[20px] max-w-full md:max-w-[600px] text-start"
          >
            Get in touch
          </motion.h1>

          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className={`${styles.paragraph} max-w-[470px] text-sm sm:text-base`}
          >
            Silakan tulis pertanyaan kamu pada form, kami dengan senang hati
            akan membalas pesan kamu.
          </motion.p>

          {getTouch.map((item, index) => (
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="flex gap-2 items-start"
              key={index}
            >
              <img
                src={item.icon}
                alt="icon"
                className={`w-[23px] h-[23px] object-contain text-white mb-2`}
              />
              <p className="text-white text-[16px]">{item.link}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="w-full bg-card p-6 flex flex-col rounded-xl gap-3 md:gap-5"
        >
          <h1 className="font-poppins font-semibold text-white sm:text-[34px] text-[20px] max-w-full md:max-w-[600px] text-start mb-1.3">
            Kirim Pertanyaan
          </h1>

          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nama"
              className="w-full md:w-1/2 rounded-md border border-dimBlue bg-card py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-secBlue focus:shadow-md"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full md:w-1/2 rounded-md border border-dimBlue bg-card py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-secBlue focus:shadow-md"
            />
          </div>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Subject"
            className="w-full rounded-md border border-dimBlue bg-card py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-secBlue focus:shadow-md"
          />

          <textarea
            rows="7"
            name="message"
            id="message"
            placeholder="Pesan"
            className="w-full resize-none rounded-md border border-dimBlue bg-card py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-secBlue focus:shadow-md"
          ></textarea>

          <button className="py-4 px-5 button-gradient font-bold rounded-lg"> 
          Kirim Pesan
        </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
