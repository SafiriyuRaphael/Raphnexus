
"use client";

import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


export default function useAnimations() {
    const controls = useAnimation();

  const [ref, inview] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  useEffect(() => {
    if (inview) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inview]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.7, duration: 0.4 },
    },
  };
  
  const fastContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.35, duration: 0.4 },
    },
  };
  const leftCard = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const rightCard = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1 },
    },
  };
  const fastRightCard = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const downCard = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1 },
    },
  };
  const fastDownCard = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };
  const upCard = {
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1 },
    },
  };

  const opacityCard = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.1 },
    },
  };
  const scaleCard = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1.1 },
    },
  };
  const springCard = {
    hidden: { scale: 0.3 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 5, duration: 1.5 },
    },
  };

  return {
    controls,
    containerVariants,
    leftCard,
    rightCard,
    downCard,
    fastDownCard,
    opacityCard,
    ref,
    scaleCard,
    upCard,
    springCard,
    fastRightCard,
    fastContainerVariants
  };
};

