"use client";
import { motion, MotionProps } from "framer-motion";
import { PropsWithChildren } from "react";

export default function FadeIn({ children, ...props }: PropsWithChildren<MotionProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
