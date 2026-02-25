import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile1.png";
import { FaCode, FaServer, FaCloud, FaLightbulb } from "react-icons/fa";

export default function About() {

  return (
    <section id="About" className="section about-section">
      <div className="container-custom about-container">
        {/* LEFT SIDE PROFILE CARD */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-profile-card">
            <div className="about-avatar">
              <img
                src={profileImage}
                alt="Andra Srinivasulu"
                className="about-profile-image"
                width={350}
                height={450}
              />
            </div>
            <p className="about-username">
              {/* Andra Srinivasulu */}
            </p>
          </div>
        </motion.div>
        {/* RIGHT SIDE CONTENT */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="about-small-title">
            ABOUT ME
          </p>
          <h2 className="about-title">
            Who I Am
          </h2>
          <p className="about-description">
            Master Data Management (MDM) Developer with 8+ years of IT experience, including 4+ years in Profisee MDM and 4 years in Informatica MDM. Experienced in designing, implementing, and supporting enterprise MDM solutions for different domains. Skilled in data modeling, match & merge configuration, survivorship rules, hierarchy management, and data governance implementation workflow for datastewardship and data quality management.</p>
          <p className="about-description-secondary">
            Proficient in cloud-native MDM solutions, including Azure and Databricks, with a strong focus on leveraging cloud technologies to enhance data management capabilities. Adept at collaborating with cross-functional teams to deliver scalable and efficient MDM solutions that drive business value and improve data quality across the organization.
          </p>
          {/* CARDS */}

          <div className="about-cards">

            <div className="about-card">
              <FaCode className="about-icon" />
              <h3>8+ Years</h3>
              <p>Professional software development experience</p>
            </div>

            <div className="about-card">
              <FaServer className="about-icon" />
              <h3>MDM Developer</h3>
              <p>Informatica, Profisee, Reltio </p>
            </div>

            <div className="about-card">
              <FaCloud className="about-icon" />
              <h3>Cloud Native</h3>
              <p>Azure, Databricks & cloud architectures</p>
            </div>

            <div className="about-card">
              <FaLightbulb className="about-icon" />
              <h3>Problem Solver</h3>
              <p>Designing and implementing robust Master Data Management solutions to drive data excellence and business success.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}