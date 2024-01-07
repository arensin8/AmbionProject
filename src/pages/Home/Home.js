import React, { useState } from "react";
import BackToTop from "../../components/backtotop/BackToTop";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/services/Services";
import Slider from "../../components/Slider/Slider";
import Testimonial from "../../components/Testimonials/Testimonial";
import Virtual from "../../components/virtual/Virtual";
import Accordion from "../../components/accordion/Accordion";
import ChatIcon from "../../components/chatbot/ChatIcon";

import "./Home.css";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

import { Title } from "./style.js";
import ParticleRing from "../../components/Hero/ParticleRing";
import GsapText from "../../components/gsapText/GsapText";

const Home = () => {
  // const { scrollYProgress } = useScroll();
  // const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, easing: "easeOutBack" }}
      >
        <Header />
        <ParticleRing />
        {/* <Hero /> */}
        <Slider />

        {/* <Title style={{ x, willChange: "transform" }}>
          Lets start right now
        </Title> */}

        <GsapText />

        <Virtual />

        <Services />
        <Testimonial />
        <Accordion />
        <Footer />
        <ChatIcon />
        <BackToTop />
      </motion.div>
    </>
  );
};

export default Home;
