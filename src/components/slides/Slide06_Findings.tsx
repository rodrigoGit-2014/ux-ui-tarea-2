import { SlideTitle } from '../ui/SlideTitle';
import { FindingCard } from '../ui/FindingCard';
import { findingsData } from '../../data/slidesData';

export const Slide06_Findings = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 py-8 gradient-health">
      <SlideTitle>Hallazgos Clave</SlideTitle>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">
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
  );
};
