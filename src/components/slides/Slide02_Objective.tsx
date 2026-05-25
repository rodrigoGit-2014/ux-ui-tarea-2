import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import { objectiveData } from '../../data/slidesData';

export const Slide02_Objective = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 bg-neutral-50">
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-100 text-primary-600">
            <Target className="w-12 h-12" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 leading-tight"
        >
          {objectiveData.text}
        </motion.h2>
      </div>
    </div>
  );
};
