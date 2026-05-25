import { motion } from 'framer-motion';

interface SlideTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  delay?: number;
}

export const SlideTitle = ({ children, subtitle, delay = 0 }: SlideTitleProps) => {
  return (
    <div className="text-center mb-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="text-4xl md:text-5xl font-bold text-primary-700 mb-3"
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="text-lg text-neutral-600 font-medium"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
