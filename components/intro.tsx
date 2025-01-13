"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
// import photo from "../public/assets/images/omar hamo 2.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* Profile Image and Wave Icon */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="./assets/images/omar hamo 2.jpg"
              alt="Omar Hamo"
              width={192}
              height={192}
              quality={95}
              priority
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Introduction Text */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Omar.</span> I’m a skilled{" "}
        <span className="font-bold">full-stack developer</span>. My expertise
        lies in creating seamless frontend experiences with{" "}
        <span className="underline">React.js</span> and{" "}
        <span className="underline">Next.js</span>, combined with robust backend
        solutions using <span className="underline">Django</span>. With a strong
        focus on <span className="italic">problem-solving</span> and crafting
        intuitive, user-friendly interfaces
        {/* , I enjoy turning ideas into
        high-quality, maintainable applications that make an impact. */}
      </motion.h1>

      {/* Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* Contact Me Button */}
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-9 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        {/* Download CV Button */}
        <a
          className="group bg-white px-9 py-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black dark:bg-white/10"
          href="./assets/omar_hamo_cv.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        {/* LinkedIn Profile Button */}
        <a
          className="bg-white p-5 text-gray-700 text-[1.9rem] hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/omar-hamo-b18ab02b0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>

        {/* GitHub Profile Button */}
        <a
          className="bg-white p-[17px] text-gray-700 text-[2.35rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black dark:bg-white/10 dark:text-white/60"
          href="https://github.com/omar-hamo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
