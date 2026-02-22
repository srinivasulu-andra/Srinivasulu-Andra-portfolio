import React from "react";
import { motion } from "framer-motion";

export default function Skills(){

const skillsData = [

{
category:"Informatica MDM",
skills:[
{name:"Informatica MDM Hub",level:90},
{name:"Informatica MDM IDD",level:80},
{name:"Informatica MDM E360",level:80}
]
},

{
category:"Profisee MDM",
skills:[
{name:"Profisee MDM Core",level:95},
{name:"Profisee MDM Admin",level:90},
{name:"Profisee MDM Data Quality",level:90},
{name:"Profisee MDM Governance",level:88},
{name:"Profisee MDM Integration",level:70},
{name:"Profisee MDM Reporting",level:70}
]
},

{
category:"Database",
skills:[
{name:"Oracle",level:88},
{name:"SSIS",level:85},
{name:"MySQL",level:82}
]
},

{
category:"Cloud & Tools",
skills:[
{name:"AWS / Azure & Databricks",level:80},
{name:"Docker / K8s",level:70},
{name:"Git / CI/CD",level:70},
]
}

];

return(

<section id="Skills" className="section skills-section">

<div className="container-custom">

<p className="skills-small-title">EXPERTISE</p>

<h2 className="skills-title">Skills</h2>


<div className="skills-grid">

{skillsData.map((group,index)=>(

<motion.div
key={index}
className="skills-card"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.5}}
>

<h3 className="skills-category">
{group.category}
</h3>


{group.skills.map((skill,i)=>(

<div key={i} className="skill-item">

<div className="skill-header">

<span>{skill.name}</span>

<span>{skill.level}%</span>

</div>


<div className="skill-bar">

<motion.div
className="skill-progress"
initial={{width:0}}
whileInView={{width:`${skill.level}%`}}
transition={{duration:1}}
></motion.div>

</div>

</div>

))}

</motion.div>

))}

</div>

</div>

</section>

);

}