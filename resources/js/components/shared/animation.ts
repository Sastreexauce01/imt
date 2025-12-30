import { Variants } from "framer-motion";

export const SlideUp = (delay: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};

export const SlideLeft = (delay: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay,
      },
    },
  };
};

export const SlideRight = (delay: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay,
      },
    },
  };
};

export const SlideRotate = (delay: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: -50,
      rotate: -20, // angle de départ
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0, // revient à 0
      transition: {
        duration: 1,
        delay,
      },
    },
  };
};