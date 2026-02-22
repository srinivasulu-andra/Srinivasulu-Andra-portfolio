import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer(){

return(

<footer className="footer-section">

<div className="container-custom">

<div className="footer-card">


{/* LEFT */}

<div className="footer-left">

<h2>ANDRA SRINIVASULU</h2>

<p className="footer-role">SENIOR SOFTWARE DEVELOPER</p>

<p className="footer-description">

Experienced Master Data Management Developer delivering scalable Profisee and Informatica MDM solutions, ensuring high data quality, governance, and seamless system integration.

</p>

</div>



{/* CENTER */}

<div className="footer-center">

<h3>QUICK LINKS</h3>

<div className="footer-links">

<div>

<a href="#Home">Home</a>
<a href="#About">About</a>
<a href="#Skills">Skills</a>
<a href="#Projects">Projects</a>

</div>

<div>

<a href="#Experience">Experience</a>
<a href="#Certificates">Certificates</a>
<a href="#Contact">Contact</a>
<a href="#Home">Back to Top</a>

</div>

</div>

</div>



{/* RIGHT */}

<div className="footer-right">

<h3>CONTACT ME</h3>

<div className="footer-social">

<a href="mailto:srinivasuluandra17@gmail.com">
<FaEnvelope/>
<span>Email</span>
</a>

<a href="https://www.linkedin.com/in/srinivasulu-andra/">
<FaLinkedin/>
<span>LinkedIn</span>
</a>

<a href="https://github.com/srinivasulu-andra/">
<FaGithub/>
<span>GitHub</span>
</a>

</div>

</div>


</div>



{/* BOTTOM */}

<div className="footer-bottom">

© 2026 <b>Andra Srinivasulu</b> — All rights reserved.

</div>


</div>

</footer>

);

}