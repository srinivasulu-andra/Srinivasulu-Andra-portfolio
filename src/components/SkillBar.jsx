import { motion } from "framer-motion";

export default function SkillBar({ skill }) {

  return (
    <div>

      <p>{skill.name}</p>

      <div className="bg-gray-800 h-2 rounded">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: skill.level + "%" }}
          className="bg-purple-500 h-2 rounded"
        />

      </div>

    </div>
  );
}