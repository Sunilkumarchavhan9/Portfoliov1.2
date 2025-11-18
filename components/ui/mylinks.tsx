"use client";

import { X } from "./x";
import { LinkedIn } from "./linkedin";
import { GitHub } from "./github";
import { Mail } from "./mail";
import { motion } from "framer-motion";

export default function MyLinks() {
  return (
    <motion.div
      className="relative bottom-0 sm:-mt-80"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeOut",
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* Heading + Stars */}
      <motion.h2
        className="text-3xl sm:text-2xl font-extrabold mb-3 flex sm:flex-row items-center justify-center gap-2 sm:gap-3 px-4 text-center relative  lg:mr-114  -mt-80"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Find Me Here..

        {/* Stars SVG */}
        <motion.svg
          width="119"
          height="93"
          viewBox="0 0 119 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-8 sm:h-8 mt-2 sm:mt-0"
          variants={{
            hidden: { opacity: 0, scale: 0.7 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <motion.path
            d="M50.2903 35L55.2297 50.8926H71.2136L58.2823 60.7148L63.2216 76.6074L50.2903 66.7852L37.3591 76.6074L42.2984 60.7148L29.3671 50.8926H45.351L50.2903 35Z"
            fill="#001cf0"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <motion.path
            d="M13.7903 66L17.0458 76.0193L27.5807 76.0193L19.0578 82.2115L22.3132 92.2307L13.7903 86.0385L5.26746 92.2307L8.52291 82.2115L0 76.0193L10.5349 76.0193L13.7903 66Z"
            fill="#001cf0"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.3,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />

          <motion.path
            d="M92.2903 0L98.5767 24.1844H118.92L102.462 39.1312L108.748 63.3156L92.2903 48.3688L75.8324 63.3156L82.1187 39.1312L65.6608 24.1844H86.004L92.2903 0Z"
            fill="#001cf0"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.7,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
        </motion.svg>
      </motion.h2>

      <motion.div
        className="flex flex-row gap-4 sm:gap-6 items-center justify-center lg:mr-72 "
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <a
          href="https://x.com/FrostbytHitsuG"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <X className="w-4 h-4" />
           X
        </a>

        <a
          href="https://www.linkedin.com/in/sunil-kumar-chavhan-269195299/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <LinkedIn className="w-4 h-4" />
          LinkedIn
        </a>

        <a
          href="https://github.com/Sunilkumarchavhan9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <GitHub className="w-4 h-4" />
          GitHub
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=chavhansunilkumar753@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <Mail className="w-4 h-4" />
          Email
        </a>
      </motion.div>
        <div className="flex items-center justify-center relative top-10 lg:mr-130">
      <div className="relative inline-block">
        <h1 className="font-extrabold text-3xl">Experience</h1>

        {/* Underline Animation */}
        <motion.svg
          width="578"
          height="23"
          viewBox="0 0 578 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-1/2 transform -translate-x-1/2 top-8 w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.path
            d="M0.151794 21.5336L26.7662 13.0529L53.3806 4.57209L110.868 17.4952L147.063 4.57209L204.55 17.4952L245.004 0.53363L296.104 17.4952L332.299 0.53363L377.012 12.649L413.207 0.53363L464.307 12.649L494.115 0.53363L543.085 12.649L577.152 0.53363"
            stroke="#0015FF"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.8,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
        
      </div>
      
    </div>

    {/* EXPERIENCE ITEM 1 */}
    <div className="flex items-center justify-center mt-14">
      <div className="flex items-center gap-3 lg:mr-80">
        <img
          src="https://ugc.production.linktr.ee/39fc6b53-0c41-46a7-8af5-e895bc78ac90_YouTube-Avatar.png?io=true&size=avatar-v3_0"
          className="w-10 h-10 rounded-lg"
        />
        <div>Fellow — At rektoff_xyz<br/> (School Of Solana)</div>
        <div>Sep 2025 - Present</div>
      </div>
      
    </div>

    {/* EXPERIENCE ITEM 2 */}
    <div className="flex items-center justify-center mt-4">
      <div className="flex items-center gap-3 lg:mr-90">
        <img
          src="https://www.svgrepo.com/show/475654/github-color.svg"
          className="w-10 h-10 rounded-lg"
        />
        <div>GitHub Campus<br/> Student Expert</div>
         <div>Jun 2025 - Aug 2025</div>
      </div>
       
    </div>
    </motion.div>
  );
}
