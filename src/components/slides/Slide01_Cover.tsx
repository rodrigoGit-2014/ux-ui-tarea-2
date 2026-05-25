import { motion } from 'framer-motion';
import { coverData } from '../../data/slidesData';

export const Slide01_Cover = () => {
  return (
    <div className="w-full h-full gradient-health flex items-center justify-center px-8">
      <div className="max-w-6xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-hero font-bold text-primary-700 mb-8 leading-tight"
        >
          {coverData.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl md:text-3xl text-neutral-600 leading-relaxed"
        >
          {coverData.subtitle}
        </motion.p>
      </div>
    </div>
  );
};
