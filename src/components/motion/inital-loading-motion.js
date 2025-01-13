"use client";

import { HTMLMotionProps, motion, Transition } from "framer-motion";
import React from "react";

function LoadingMotionWrapper({ children, className, transition, ...props }) {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        ease: "easeIn",
        duration: 1,
        ...transition,
      }}
      viewport={{ once: true, amount: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default LoadingMotionWrapper;
