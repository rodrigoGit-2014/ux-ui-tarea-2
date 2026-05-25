import { SlideTitle } from '../ui/SlideTitle';
import { PillarCard } from '../ui/PillarCard';
import { pillarsData } from '../../data/slidesData';

export const Slide03_Pillars = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 py-8 gradient-health relative overflow-hidden">
      <SlideTitle>Pilares de Confianza</SlideTitle>

      {/* Cards Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillarsData.map((pillar, index) => (
          <PillarCard
            key={pillar.id}
            title={pillar.title}
            description={pillar.description}
            icon={pillar.icon}
            index={index}
            delay={0}
          />
        ))}
      </div>
    </div>
  );
};
