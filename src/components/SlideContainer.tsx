import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideContainerProps {
  children: ReactNode;
  slideNumber: number;
  direction: number;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export const SlideContainer = ({ children, slideNumber, direction }: SlideContainerProps) => {
  return (
    <AnimatePresence initial={false} custom={direction} mode="wait">
      <motion.div
        key={slideNumber}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 250, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
