"use client";

import React from "react";
import { motion } from "framer-motion";

function HeroImageMotion({ children, className }) {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        ease: "easeIn",
        duration: 2,
        delay: 0.4,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default HeroImageMotion;
