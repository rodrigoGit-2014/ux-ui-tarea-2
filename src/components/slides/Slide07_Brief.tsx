import { motion } from 'framer-motion';
import { briefData } from '../../data/slidesData';

export const Slide07_Brief = () => {
  return (
    <div className="w-full h-full gradient-health flex items-center justify-center px-8">
      <div className="max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-display font-bold text-primary-700 mb-8 leading-tight"
        >
          {briefData.statement}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl md:text-3xl text-neutral-600 mb-16 leading-relaxed"
        >
          {briefData.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-lg text-neutral-500 font-medium"
        >
          {briefData.closing}
        </motion.div>
      </div>
    </div>
  );
};
