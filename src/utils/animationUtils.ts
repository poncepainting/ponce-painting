/**
 * Common animation variants for use with Framer Motion
 */

export const animations = {
  // For dropdown/accordion/menu animations
  menu: {
    hidden: { opacity: 0, height: 0, y: -10 },
    visible: {
      opacity: 1,
      height: 'auto',
      y: 0,
      transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  },

  // For staggered container animations
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      }
    }
  },

  // For individual item animations within staggered containers
  item: {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  },

  // Fade in animation
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  },

  // Slide in from bottom animation
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  },

  // Slide in from left animation
  slideInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  },

  // Slide in from right animation
  slideInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  }
}; 