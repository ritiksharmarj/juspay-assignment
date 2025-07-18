import { motion, stagger } from "motion/react";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.1),
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export function StaggeredList({ className, ...motionProps }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={cn(className)}
      {...motionProps}
    />
  );
}

export function StaggeredListItem({ className, ...motionProps }) {
  return (
    <motion.div
      variants={item}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(className)}
      {...motionProps}
    />
  );
}
