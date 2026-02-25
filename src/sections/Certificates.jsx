import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaTimes } from "react-icons/fa";

export default function Certificates(){

const [selectedCert, setSelectedCert] = useState(null);

const certificates = [
{ title:"Microsoft Azure Developer solutions (AZ-204)", provider:"Microsoft", year:"2025", file:"/certificates/az-204.pdf"},
{ title:"Microsoft Azure Data Engineer Associate", provider:"Microsoft", year:"2025", file:"/certificates/az-de.pdf"},
{ title:"Microsoft Azure Data Scientist Associate", provider:"Microsoft", year:"2025", file:"/certificates/az-data-scientist.pdf"},
{ title:"Microsoft Power BI Data Analyst Associate", provider:"Microsoft", year:"2025", file:"/certificates/powerbi.pdf"},
{ title:"Microsoft Azure Fundamentals (AZ-900)", provider:"Microsoft", year:"2024", file:"/certificates/az-900.pdf"},
{ title:"Microsoft Fabric Analytics Engineer Associate", provider:"Microsoft", year:"2024", file:"/certificates/fabric-ae.pdf"},
{ title:"Reltio Certified MDM Developer", provider:"Reltio", year:"2024", file:"/certificates/reltio-mdm.pdf"},
{ title:"Profisee Certified MDM Professional", provider:"Profisee", year:"2023", file:"/certificates/profisee-mdm.pdf"},
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
className="cert-card cert-click"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.5, delay:index*0.08}}
onClick={()=>setSelectedCert(cert.file)}
>

<div className="cert-icon">
<FaAward/>
</div>

<h3 className="cert-name">{cert.title}</h3>
<p className="cert-provider">{cert.provider}</p>
<p className="cert-year">{cert.year}</p>

</motion.div>

))}

</div>
</div>

{/* MODAL VIEWER */}
<AnimatePresence>
{selectedCert && (

<motion.div
className="cert-modal-overlay"
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
onClick={()=>setSelectedCert(null)}
>

<motion.div
className="cert-modal-content"
initial={{scale:0.8,opacity:0}}
animate={{scale:1,opacity:1}}
exit={{scale:0.8,opacity:0}}
onClick={(e)=>e.stopPropagation()}
>

<button className="cert-close" onClick={()=>setSelectedCert(null)}>
<FaTimes/>
</button>

<iframe
src={selectedCert}
title="Certificate Preview"
className="cert-frame"
/>

</motion.div>
</motion.div>

)}
</AnimatePresence>

</section>
);
}