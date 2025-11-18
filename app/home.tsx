"use client";

import { NextJS } from "@/components/nextjssvg";
import { Button } from "@/components/ui/button";
import { Nodejs } from "@/components/ui/nodejs";
import { Rust } from "@/components/ui/rust";
import { Solana } from "@/components/ui/Solana";
import { Solidity } from "@/components/ui/solidity";
import { TypeScriptSVG } from "@/components/ui/typescriptsvg";
import { motion } from "framer-motion";

export default function JinxPortfolio() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 p-4 sm:p-6 lg:p-10 min-h-screen relative bottom-50">
      
      <div className="flex flex-col max-w-full sm:max-w-xl lg:max-w-2xl w-full">
        <motion.svg
          width="42"
          height="41"
          viewBox="0 0 42 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-3"
        >
          <motion.path
            d="M41.2002 0.0398865C41.8669 8.37322 39.8002 25.9399 26.2002 29.5399C12.6002 33.1399 3.86686 32.3732 1.2002 31.5399L7.2002 40.5399"
            stroke="black"
            strokeWidth={1.5}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0.700195 32.0399L10.7002 26.0399"
            stroke="black"
            strokeWidth={1.5}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
        </motion.svg>

        <motion.h2
          className="tracking-tight text-2xl sm:text-3xl font-bold mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
         <a>About Me</a>
        </motion.h2>

      <motion.p
  className="text-sm sm:text-base text-black leading-relaxed px-2 sm:px-0"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
>
  I’m Sunil Kumar Chavhan — a Full-Stack & Blockchain Polymath who loves
  building systems that scale, ship fast, and break limits. I work across the
  entire stack: 
  <Button variant="link" className="tracking-tighter text-[#1976d2]">
    <TypeScriptSVG className="w-4 h-4" />
    TypeScript
  </Button>
  , 
  <Button variant="link" className="tracking-tighter">
    <NextJS />Nextjs
  </Button>
  , 
  <Button variant="link" className="tracking-tighter text-[#75ad63]">
    <Nodejs />Node.js
  </Button>
  , and cloud-native infrastructure, while also crafting secure<br/>
  on-chain solutions using
  <Button variant="link" className="tracking-tighter text-[#7984d6] ">
    <Solana />Solana
  </Button>, 
  <Button variant="link" className="tracking-tighter">
    <Rust />Rust
  </Button>
  , and 
  <Button variant="link" className="tracking-tighter text-[#2c5081]">
    <Solidity />Solidity
  </Button>
  .
  <br />
  <br />
  I’ve been a <a className="underline underline-offset-2 decoration-[#001cf0] ">5xHackathon Winner and Top 4 Solana Hackathon Finalist</a>, selected as one of only 72
  fellows from 3,000 applicants, and part of the GitHub Campus Expert Summer
  2025 cohort. I thrive at the intersection of Web2 × Web3-where real-time
  systems, microservices, and decentralized architectures meet.
</motion.p>

      </div>
    </div>
  );
}
