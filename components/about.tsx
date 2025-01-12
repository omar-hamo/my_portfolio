"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I am a fourth-year university student at{" "}
        <span className="font-medium">Al-Shahba Private University</span>,
        studying Informatics Engineering. Alongside my academic pursuits, I have
        been working as a{" "}
        <span className="font-medium">frontend developer</span> at{" "}
        <span className="font-medium">Raizer</span> for the past five months.
        During this time, I have contributed to several impactful projects,
        including building{" "}
        <span className="font-medium">dynamic user interfaces</span>,{" "}
        <span className="font-medium">responsive layouts</span>, and enhancing
        the user experience for web applications using{" "}
        <span className="font-medium">React.js</span> and modern frontend tools.
      </p>

      <p>
        My tech stack includes <span className="font-medium">React.js</span>,{" "}
        <span className="font-medium">Next.js</span>,{" "}
        <span className="font-medium">Django</span>, and{" "}
        <span className="font-medium">PostgreSQL</span>. I am also proficient
        with <span className="font-medium">TypeScript</span>. I enjoy tackling
        complex challenges, optimizing application performance, and continuously
        learning new technologies to deliver high-quality results. Currently, I
        am focused on building{" "}
        <span className="font-medium">full-stack web applications</span> and am
        actively seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer, where I can apply my expertise, grow professionally, and
        contribute to impactful projects.
      </p>
    </motion.section>
  );
}
