import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "../lib/utils";

type SectionRevealProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export function SectionReveal({ id, className, children }: SectionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={cn("section-shell scroll-mt-24", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
