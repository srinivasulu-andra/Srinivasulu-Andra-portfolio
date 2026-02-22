import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects(){

const projects = [

{
title:"Wipfli",
description:"Understanding busineess data problems converting them into relable profisee MDM solutions that improve data quality, consistency, and governance across the organization.",
tech:["Profisee MDM", "Fast Apps", "REST API's", "D365 Application", "Azure & Databricks","SQL Server", "Power BI","Data Governance"],
github:"#",
demo:"#"
},

{
title:"IQUW",
description:"Data quality dashboard with interactive visualizations, data profiling, and anomaly detection.",
tech:["Profisee MDM", "Fast Apps", "REST API's","Azure & Databricks","SQL Server", "Power BI"],
github:"#",
demo:"#"
},

{
title:"Yorkshire Water",
description:"Customer 360 view with unified data model, real-time updates, and personalized insights.",
tech:["Profisee MDM", "Fast Apps", "REST API's","Azure & Databricks","SQL Server", "Power BI", "Data Governance"],
github:"#",
demo:"#"
},

{
title:"HSB (Munich Re)",
description:"Master data management solution with data integration, cleansing, and enrichment capabilities.",
tech:["Informatica MDM", "REST API's","SQL Server","IDD", "E360 Application"],
github:"#",
demo:"#"
},

{
title:"HPE (HP Channel Partner)",
description:"Master data management solution with data integration, cleansing, and enrichment capabilities.",
tech:["Informatica MDM", "REST API's","SQL Server","IDD", "E360 Application"],
github:"#",
demo:"#"
},

{
title:"AT&T",
description:"Master data management solution with data integration, cleansing, and enrichment capabilities.",
tech:["Informatica MDM", "REST API's","SQL Server","IDD", "E360 Application"],
github:"#",
demo:"#"
}

];

const filters = [
"All",
"Profisee MDM",
"Informatica MDM",
"Fast Apps",
"REST API's",
"D365 Application",
"Azure & Databricks",
"SQL Server",
"Power BI",
"Data Governance",
"IDD",
"E360 Application"
];

const [activeFilter,setActiveFilter]=useState("All");

const filteredProjects =
activeFilter==="All"
?projects
:projects.filter(project =>
project.tech.includes(activeFilter)
);

return(

<section id="Projects" className="section projects-section">

<div className="container-custom">

<p className="projects-small-title">MY WORK</p>

<h2 className="projects-title">Projects</h2>


{/* FILTER BUTTONS */}

<div className="projects-filters">

{filters.map(filter=>(

<button
key={filter}
className={`filter-btn ${activeFilter===filter ? "active":""}`}
onClick={()=>setActiveFilter(filter)}
>

{filter}

</button>

))}

</div>


{/* PROJECT GRID */}

<div className="projects-grid">

{filteredProjects.map((project,index)=>(

<motion.div
key={index}
className="project-card"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.5}}
>

<div className="project-card-header">

<h3>{project.title}</h3>

<div className="project-icons">

<a href={project.github}>
<FaGithub/>
</a>

<a href={project.demo}>
<FaExternalLinkAlt/>
</a>

</div>

</div>

<p className="project-description">
{project.description}
</p>


<div className="project-tech">

{project.tech.map((tech,i)=>(

<span key={i}>
{tech}
</span>

))}

</div>

</motion.div>

))}

</div>

</div>

</section>

);

}