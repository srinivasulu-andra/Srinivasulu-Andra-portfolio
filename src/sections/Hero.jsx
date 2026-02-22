import React from "react";
// import "../styles/hero.css";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaEnvelope } from "react-icons/fa";

import Scene3D from "../three/Scene3D";

export default function Hero() {

  return (

    <section className="hero-section" id="Home">

      {/* 3D BACKGROUND */}
      <div className="hero-3d-bg">
        <Scene3D />
      </div>


      {/* CONTENT */}
      <div className="hero-content">

        <motion.p
          initial={{opacity:0,y:-20}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          className="hero-small-text"
        >
          HELLO, I'M
        </motion.p>


        <motion.h1
          initial={{opacity:0,scale:0.9}}
          animate={{opacity:1,scale:1}}
          transition={{duration:1}}
          className="hero-name"
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
          className="hero-role"
        />


        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1}}
          className="hero-description"
        >
          Designing and implementing robust Master Data Management solutions to drive data excellence and business success.
        </motion.p>


        {/* BUTTONS */}
        <div className="hero-buttons">

          <button className="btn-primary">
            View Projects
          </button>

          <button className="btn-glass">
            <FaDownload />
            Resume
          </button>

          <button className="btn-glass">
            <FaEnvelope />
            Contact Me
          </button>

        </div>

      </div>

    </section>

  );

}