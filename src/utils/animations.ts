import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: {
    y: 20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const scaleIn: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};