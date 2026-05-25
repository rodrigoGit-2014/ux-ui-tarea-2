import { useState, useRef } from 'react';
import { SlideContainer } from './SlideContainer';
import { Navigation } from './Navigation';
import { useSlideNavigation } from '../hooks/useSlideNavigation';
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation';

// Slide imports
import { Slide01_Cover } from './slides/Slide01_Cover';
import { Slide02_Objective } from './slides/Slide02_Objective';
import { Slide03_Pillars } from './slides/Slide03_Pillars';
import { Slide04_Ecosystem } from './slides/Slide04_Ecosystem';
import { Slide05_Tensions } from './slides/Slide05_Tensions';
import { Slide06_Findings } from './slides/Slide06_Findings';
import { Slide07_Brief } from './slides/Slide07_Brief';

export const Presentation = () => {
  const {
    currentSlide,
    totalSlides,
    nextSlide,
    prevSlide,
    isFirstSlide,
    isLastSlide,
  } = useSlideNavigation();

  const [direction, setDirection] = useState(0);
  const prevSlideRef = useRef(currentSlide);

  // Determine slide direction for animation
  if (currentSlide !== prevSlideRef.current) {
    setDirection(currentSlide > prevSlideRef.current ? 1 : -1);
    prevSlideRef.current = currentSlide;
  }

  useKeyboardNavigation({
    onNext: nextSlide,
    onPrev: prevSlide,
    isFirstSlide,
    isLastSlide,
  });

  const renderSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Slide01_Cover />;
      case 2:
        return <Slide02_Objective />;
      case 3:
        return <Slide03_Pillars />;
      case 4:
        return <Slide04_Ecosystem />;
      case 5:
        return <Slide05_Tensions />;
      case 6:
        return <Slide06_Findings />;
      case 7:
        return <Slide07_Brief />;
      default:
        return <Slide01_Cover />;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-neutral-50">
      <SlideContainer slideNumber={currentSlide} direction={direction}>
        {renderSlide()}
      </SlideContainer>

      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
        isFirstSlide={isFirstSlide}
        isLastSlide={isLastSlide}
      />
    </div>
  );
};
