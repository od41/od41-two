export const growIn = {
  initial: {
    scale: 0.95,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.4,
      ease: "circOut",
    },
  },
};

export const fadeUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };
  
  