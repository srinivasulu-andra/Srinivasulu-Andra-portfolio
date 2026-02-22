import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({project}){

return(

<motion.div
whileHover={{
scale:1.05,
rotateY:5
}}
className="glass p-6 glow hover:shadow-purple-500/40 transition"
>

<h3 className="text-xl font-bold gradient-text">
{project.title}
</h3>

<p className="text-gray-400 mt-2">
{project.description}
</p>

<div className="flex gap-2 mt-4 flex-wrap">

{project.tech.map(tech=>(

<span
key={tech}
className="bg-purple-500/20 px-3 py-1 rounded text-sm"
>
{tech}
</span>

))}

</div>

<div className="flex gap-4 mt-4">

<a href={project.github}>
<FaGithub/>
</a>

<a href={project.live}>
<FiExternalLink/>
</a>

</div>

</motion.div>

);
}