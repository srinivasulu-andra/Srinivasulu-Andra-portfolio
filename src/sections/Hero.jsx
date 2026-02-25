import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaEnvelope } from "react-icons/fa";

import Scene3D from "../three/Scene3D";

export default function Hero() {

  return (

    <section className="hero-section" id="Home">

      {/* LIGHT AURA BACKGROUND */}
      <div className="hero-aura"></div>

      {/* 3D BACKGROUND */}
      <div className="hero-3d-bg">
        <Scene3D />
      </div>

      {/* CONTENT */}
      <div className="hero-content">

        <motion.p
          initial={{opacity:0,y:-30}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          className="hero-small-text reveal"
        >
          HELLO, I'M
        </motion.p>

        <motion.h1
          initial={{opacity:0,scale:0.8}}
          animate={{opacity:1,scale:1}}
          transition={{duration:1}}
          className="hero-name reveal-zoom"
        >
          Andra Srinivasulu
        </motion.h1>

        {/* TYPING TEXT */}
        <TypeAnimation
          sequence={[
            "Informatica MDM Developer",
            2000,
            "Profisee MDM Developer",
            2000,
            "Reltio MDM Developer",
            2000,
            "Cloud Engineer",
            2000
          ]}
          wrapper="h2"
          repeat={Infinity}
          className="hero-role glow-text reveal"
        />

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1}}
          className="hero-description reveal"
        >
          Designing and implementing robust Master Data Management solutions to drive data excellence and business success.
        </motion.p>

        {/* BUTTONS */}
        <div className="hero-buttons reveal">

          <button className="btn-primary floating-btn" onClick={() => document.getElementById("Projects").scrollIntoView({ behavior: "smooth" })}>

            View Projects
          </button>

          <a
            href="../public/certificates/resume.pdf"
            className="btn-glass floating-btn"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <FaDownload />
            Resume
          </a>

          <button className="btn-glass floating-btn" onClick={() => document.getElementById("Contact").scrollIntoView({ behavior: "smooth" })}>
            <FaEnvelope />
            Contact Me
          </button>

        </div>

      </div>

    </section>
  );
}