import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        alert("Message sent successfully!");

    };

    return (

        <section id="Contact" className="section contact-section">

            <div className="container-custom contact-container">


                {/* LEFT FORM */}

                <motion.div
                    className="contact-form-container"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <p className="contact-small-title">GET IN TOUCH</p>

                    <h2 className="contact-title">Contact</h2>


                    <form onSubmit={handleSubmit}>

                        <label>Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />


                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />


                        <label>Message</label>

                        <textarea
                            name="message"
                            placeholder="Your message..."
                            value={form.message}
                            onChange={handleChange}
                            required
                        ></textarea>


                        <button type="submit" className="contact-btn">

                            Send Message <FaPaperPlane />

                        </button>

                    </form>

                </motion.div>


                {/* RIGHT INFO */}

                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h3>Let's Connect</h3>

                    <p>

                        I'm always open to discussing new projects, creative ideas,
                        or opportunities to be part of your vision. Let's build something great together.

                    </p>


                    <div className="contact-links">

                        <div>

                            <FaEnvelope /><link rel="stylesheet" href="mailto:srinivasuluandra17@gmail.com" />

                            <span>srinivasuluandra17@gmail.com</span>

                        </div>

                        <div>

                            <FaGithub /><link rel="stylesheet" href="https://github.com/srinivasulu-andra/" />

                            <span>GitHub Profile</span>

                        </div>


                        <div>

                            <FaLinkedin /><link rel="stylesheet" href="https://www.linkedin.com/in/srinivasulu-andra/" />

                            <span>LinkedIn Profile</span>

                        </div>


                    </div>

                </motion.div>


            </div>

        </section>

    );

}