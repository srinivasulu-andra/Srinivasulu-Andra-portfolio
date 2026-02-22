import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience(){

const experiences = [

{
year:"2023 - Present",
role:"Senior Software Developer",
company:"Hexaware Technologies",
points:[
"I worked as a MDM developer where i was responsible for end to end MDM implementation",
"I design and developed MDM solutions using Profisee MDM platform",
"Collaborated with cross-functional teams to gather requirements and deliver high-quality solutions",
"Optimized data workflows improving efficiency and performance"
]
},
{
year:"2022 - 2023",
role:"Senior Consultant",
company:"Capgemini Pvt Ltd.",
points:[
"Led a team of developers to deliver high-quality software solutions",
"Conducted technical workshops and training sessions for junior developers",
"Implemented best practices for code quality and performance optimization",
"Collaborated with clients to understand their requirements and provide tailored solutions"
]
}, 
{
year:"2019 - 2022",
role:"Informatica MDM Developer",
company:"Softpath System LLC",
points:[
"Designed and implemented MDM solutions using Informatica",
"Collaborated with cross-functional teams to gather requirements",
"Optimized data workflows improving efficiency"
]
},
{
year:"2018 - 2019",
role:"Associate Analyst",
company:"Subex Solutions",
points:[
"Design and created base objective, staging table, mapping, transformations as per the business requirements",
"Created match rules merge settings to improve the efficiency of the entire hub process implementation"
]
}
];

return(

<section id="Experience" className="section experience-section">

<div className="container-custom">

<p className="experience-small-title">MY JOURNEY</p>

<h2 className="experience-title">Experience</h2>


<div className="timeline">

{/* center line */}
<div className="timeline-line"></div>


{experiences.map((exp,index)=>(

<motion.div
key={index}
className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
>

{/* timeline dot */}
<div className="timeline-dot"></div>


{/* card */}
<div className="timeline-card">

<p className="timeline-year">
<FaBriefcase className="timeline-icon"/>
{exp.year}
</p>

<h3>{exp.role}</h3>

<p className="timeline-company">
{exp.company}
</p>

<ul>
{exp.points.map((point,i)=>(
<li key={i}>{point}</li>
))}
</ul>

</div>

</motion.div>

))}

</div>

</div>

</section>

);

}