import { SlideTitle } from '../ui/SlideTitle';
import { TensionSplitCard } from '../ui/TensionSplitCard';
import { tensionsData } from '../../data/slidesData';

export const Slide05_Tensions = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 py-8 gradient-health">
      <SlideTitle>Tensiones Estratégicas</SlideTitle>

      {/* Horizontal layout for tensions */}
      <div className="w-full max-w-7xl flex items-start justify-center gap-6 flex-1">
        {tensionsData.map((tension, index) => (
          <div key={tension.id} className="flex-1 min-w-0">
            <TensionSplitCard
              title={tension.title}
              side1={tension.side1}
              side2={tension.side2}
              question={tension.question}
              delay={0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
