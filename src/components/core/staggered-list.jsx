import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const listVars = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVars = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function StaggeredList({ className, ...motionProps }) {
  return (
    <motion.div
      variants={listVars}
      initial="hidden"
      animate="visible"
      className={cn(className)}
      {...motionProps}
    />
  );
}

export function StaggeredListItem({ className, ...motionProps }) {
  return (
    <motion.div
      variants={itemVars}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.2,
      }}
      className={cn(className)}
      {...motionProps}
    />
  );
}
