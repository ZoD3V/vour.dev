import { clients } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motions";
import { TypingText } from "./CustomTexts";

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
  variants={fadeIn('left', 'spring', index * 0.5, 0.75)}
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== clients.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </motion.div>
);

const Clients = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="client"
      className={`${layout.section} sm:mb-24 mb-10 mt-10`}
    >
      <div className={`${layout.sectionInfo}`}>
        <TypingText title="Our service" />

        <motion.h2
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="font-poppins font-semibold text-white ss:text-[32px] text-[24px] max-w-full text-center md:text-start"
        >
          What are we doing
        </motion.h2>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={`${styles.paragraph} max-w-[470px] mt-7`}
        >
          Technology has now developed so much that with technology we can make
          things easier and really help us solve our problems
        </motion.p>

        <Button styles={`mt-10`} text={"See More"} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {clients.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default Clients;
