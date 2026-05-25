import { useState, useEffect, useCallback } from 'react';

const TOTAL_SLIDES = 7;

export const useSlideNavigation = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Initialize from URL hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const slideNumber = parseInt(hash, 10);
    if (slideNumber >= 1 && slideNumber <= TOTAL_SLIDES) {
      setCurrentSlide(slideNumber);
    }
  }, []);

  // Update URL hash when slide changes
  useEffect(() => {
    window.location.hash = `${currentSlide}`;
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 1));
  }, []);

  const goToSlide = useCallback((slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= TOTAL_SLIDES) {
      setCurrentSlide(slideNumber);
    }
  }, []);

  return {
    currentSlide,
    totalSlides: TOTAL_SLIDES,
    nextSlide,
    prevSlide,
    goToSlide,
    isFirstSlide: currentSlide === 1,
    isLastSlide: currentSlide === TOTAL_SLIDES,
  };
};
