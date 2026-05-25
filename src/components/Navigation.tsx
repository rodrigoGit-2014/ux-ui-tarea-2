import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  isFirstSlide: boolean;
  isLastSlide: boolean;
}

export const Navigation = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  isFirstSlide,
  isLastSlide,
}: NavigationProps) => {
  const progress = (currentSlide / totalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      {/* Progress Bar */}
      <div className="h-1 bg-neutral-100 relative overflow-hidden">
        <motion.div
          className="h-full bg-primary-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Navigation Controls */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={isFirstSlide}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
            isFirstSlide
              ? 'text-neutral-300 cursor-not-allowed'
              : 'text-primary-700 hover:bg-primary-50 active:scale-95'
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        {/* Slide Counter */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-neutral-700 font-medium">
            {currentSlide} / {totalSlides}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={isLastSlide}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
            isLastSlide
              ? 'text-neutral-300 cursor-not-allowed'
              : 'text-primary-700 hover:bg-primary-50 active:scale-95'
          }`}
          aria-label="Next slide"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
