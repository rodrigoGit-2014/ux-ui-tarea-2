import { motion } from 'framer-motion';
import { FindingCard } from '../ui/FindingCard';
import { findingsData } from '../../data/slidesData';

export const Slide06_Findings = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-20 bg-neutral-50 overflow-y-auto">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-primary-700 mb-16"
        >
          Hallazgos Clave
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {findingsData.map((finding, index) => (
            <FindingCard
              key={finding.id}
              text={finding.text}
              emphasis={finding.emphasis}
              delay={0.1 + index * 0.08}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
