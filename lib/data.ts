import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import shopper from "@/public/assets/images/shoper.png";
import instagram from "@/public/assets/images/instagram.png";
import drmicheladib from "@/public/assets/images/drmicheladib.png";
import proshop from "@/public/assets/images/proshop.png";
import realestate from "@/public/assets/images/real-estate.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const certificationsData = [
  {
    title: "Marketing Management",
    institution: "Institution: New Horizons",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Cisco Certified Network Associate",
    institution: "Institution: New Horizons",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Quality Management System ISO 9001",
    institution: "Institution: Societe Generale de Surveillance",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Human Resource Management",
    institution: "Institution: Project International",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Project Management Professional V.6",
    institution: "Institution: Project International",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "Dr. Michel Adib Gym Management App",
    description:
      "I worked on a gym and healthy meal management system during my time at the company. I built a landing page and an admin dashboard that provides features like tracking the number of users, managing exercises and meals (add, edit, delete, activate, or deactivate), and much more.",
    tags: ["React", "Tailwind css", "Laravel", "Framer-Motion"],
    imageUrl: "./assets/images/drmicheladib.png", // Updated path
    link: "https://drmicheladib.com",
  },
  {
    title: "LMS - Learning Management System",
    description:
      "I built a comprehensive learning platform similar to Udemy or Coursera. Instructors can sign up, create courses with title, level, price, and set coupon discounts (10%, 20%, or 30%) for selected courses. An OTP system handles password recovery. Students preview a free section before purchasing via PayPal or Stripe. Features include user profiles, in-course chat, and course reviews with star ratings.",
    tags: [
      "React",
      "Django",
      "PostgreSQL",
      "Redux Toolkit",
      "Bootstrap",
      "PayPal",
      "Stripe",
      "JWT",
    ],
    imageUrl: "./assets/images/LMS.png",
    link: "",
  },

  {
    title: "Proshop",
    description:
      "I built an E-commerce platform where users can sign up and log in, add products to their cart, and make purchases using PayPal. The platform includes features like inventory management (out-of-stock notifications), and an admin dashboard where the admin can manage users (add, delete, or view), manage products (add, delete, or edit), and track orders to monitor their delivery status, along with many other features.",
    tags: [
      "React",
      "Django",
      "postgresql",
      "Redux Toolkit",
      "Paypal",
      "Bootstrap",
    ],
    imageUrl: "./assets/images/proshop.png", // Updated path
    link: "",
  },
  {
    title: "Real Estate",
    description:
      "I built a real estate website with advanced features, including the ability to update the location of a property and view nearby facilities such as hospitals, stadiums, and universities within a 10-kilometer radius on the map. The platform also includes many other features to enhance the user experience.",
    tags: [
      "React",
      "Django",
      "postgresql",
      "React Leaflet",
      "Material UI",
      "Geodjango",
    ],
    imageUrl: "./assets/images/real-estate.png", // Updated path
    link: "",
  },
  {
    title: "Instagram-Clone",
    description:
      "I developed a professional Instagram-inspired platform that allows users to sign up, log in, and share photos with captions. The platform includes core social features such as liking posts, leaving comments, following other users, and updating profile information, providing an engaging and interactive user experience.",
    tags: ["React", "Firebase", "Framer-Motion", "Chakra-UI", "Zustand"],
    imageUrl: "./assets/images/instagram.png", // Updated path
    link: "",
  },
  {
    title: "shopper",
    description:
      "I developed a fully functional e-commerce platform where users can register, log in, and add products to their cart. The platform includes an admin panel that enables administrators to manage users and products by adding, updating, or deleting them, ensuring efficient control over the system.",
    tags: ["React", "Firebase", "Redux Toolkit", "Reactstrap", "Framer-Motion"],
    imageUrl: "./assets/images/shoper.png", // Updated path
    link: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Python",
  "Django",
  "Git",
  "PostgreSQL",
  "Tailwind CSS",
  "Material UI",
  "Axios",
  "JWT",
  "Redux Toolkit",
  "I18next",
  "Formik",
  "Framer Motion",
  "Zustand",
  "Paypal",
  "Stripe",
] as const;
