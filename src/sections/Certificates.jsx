import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

export default function Certificates(){

const certificates = [
{
title:"Microsoft Azure Data Fundamentals",
provider:"Microsoft",
year:"2025"
},

{
title:"Microsoft Azure Developer Associate",
provider:"Microsoft",
year:"2025"
},

{
title:"Microsoft Azure Data Scientist Associate",
provider:"Microsoft",
year:"2025"
},
{
title:" Microsoft Power BI Data Analyst Associate",
provider:"Microsoft",
year:"2025"
},
{
title:"Microsoft Azure Fundamentals (AZ-900)",
provider:"Microsoft",
year:"2024"
},
{
title:"Microsoft fabric Data Engineer Associate",
provider:"Microsoft",
year:"2024"
},
{
title:" Profisee Certified MDM Professional",
provider:"Profisee",
year:"2023"
},
{
title:" Informatica Certified MDM Developer",
provider:"Informatica",
year:"2021"
}
];

return(

<section id="Certificates" className="section certificates-section">

<div className="container-custom">

<p className="cert-small-title">ACHIEVEMENTS</p>

<h2 className="cert-title">Certificates</h2>


<div className="cert-grid">

{certificates.map((cert,index)=>(

<motion.div
key={index}
className="cert-card"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.5}}
>

<div className="cert-icon">

<FaAward/>

</div>

<h3 className="cert-name">
{cert.title}
</h3>

<p className="cert-provider">
{cert.provider}
</p>

<p className="cert-year">
{cert.year}
</p>

</motion.div>

))}

</div>

</div>

</section>

);

}