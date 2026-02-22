import { motion } from "framer-motion";

export default function SectionTitle({ title }) {

  return (
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl font-bold gradient-text mb-10"
    >
      {title}
    </motion.h2>
  );

}