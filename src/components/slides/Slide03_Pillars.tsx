import { motion } from 'framer-motion';
import { PillarCard } from '../ui/PillarCard';
import { pillarsData } from '../../data/slidesData';

export const Slide03_Pillars = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 py-20 bg-neutral-50 overflow-y-auto">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-primary-700 mb-16"
        >
          Pilares de Confianza
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillarsData.map((pillar, index) => (
            <PillarCard
              key={pillar.id}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
